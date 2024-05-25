import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from 'expo-location';

const QrCodeScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    // Send data to backend
    fetch('http://localhost:3000/checkins/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 1, // User ID should be dynamic
        location: `${latitude},${longitude}`,
        siteName: data
      })
    }).then(response => response.json())
      .then(data => {
        alert(`Check-in successful at ${data.siteName}`);
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        alert('Error:', error);
      });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default QrCodeScanner;
