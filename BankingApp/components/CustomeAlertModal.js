import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const CustomAlert = ({ visible, title, message, onClose }) => {
  if (!visible) return null;

  return (
    <Modal transparent animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth:2 }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300, borderWidth:2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
          <Text>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: 'blue', marginTop: 10, fontWeight: 'bold' }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;

