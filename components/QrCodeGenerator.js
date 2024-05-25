import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrCodeGenerator = () => {
  const [siteName, setSiteName] = useState('');
  const [generated, setGenerated] = useState(false);

  const generateQrCode = () => {
    setGenerated(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Site Name"
        value={siteName}
        onChangeText={setSiteName}
        style={styles.input}
      />
      <Button title="Generate QR Code" onPress={generateQrCode} />
      {generated && <QRCode value={siteName} size={200} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%'
  }
});

export default QrCodeGenerator;
