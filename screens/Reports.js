import React, { useState } from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import User from '../images/user.png';
import Alarm from '../images/bell.png';
import Images from '../images/image.png';

function Report() {
  const [reportTypeModalVisible, setReportTypeModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState(null);
  const [locationInput, setLocationInput] = useState('');

  const handleReportTypeSelect = (item) => {
    setSelectedReportType(item);
    setReportTypeModalVisible(false);
  };

  const handleLocationInput = (text) => {
    setLocationInput(text);
  };

  const reportTypes = [
    { label: 'Mala Calidad del Agua', value: 'Mala Calidad del Agua' },
    { label: 'Reporte de infraestructura', value: 'Reporte de infraestructura' },
  ];

  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ backgroundColor: '#95E7FB', height: 116 }}>
        <View style={{ marginTop: Constants.statusBarHeight, flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.profile} source={User} />
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text style={styles.users}>Brian Hernández</Text>
            <Text style={styles.email}>reverdead@gmail.com</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={Alarm} style={styles.alarm} />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <View style={styles.parts}>
            <Text style={{ fontSize: 20 }}>Generar Reporte</Text>
          </View>
          <View style={styles.parts}>
            <View style={{ flex: 0, width: 331, height: 85 }}>
              <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 8 }}>Tipo de reporte</Text>
              <TouchableOpacity style={styles.combos} onPress={() => setReportTypeModalVisible(true)}>
                <Text>{selectedReportType ? selectedReportType.label : 'Seleccionar tipo de reporte'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.parts}>
            <View style={{ flex: 0, width: 331, height: 85 }}>
              <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 8 }}>Ubicación del reporte</Text>
              <TextInput
                style={styles.combos}
                placeholder="Ingresar ubicación del reporte"
                value={locationInput}
                onChangeText={handleLocationInput}
              />
            </View>
          </View>
          <View style={styles.parts}>
            <View style={{ flex: 0, width: 331, height: 85 }}>
              <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 8 }}>Adjuntar evidencia</Text>
              <View style={styles.combos}>
                <View style={{ flex: 4 }}></View>
                <View style={{ flex: 1, backgroundColor: '#2BCFF7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={Images} style={{ width: '40%', height: '53%' }} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Generar Reporte button pressed')}>
            <Text style={styles.buttonText}>Generar Reporte</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={reportTypeModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {reportTypes.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.modalOption}
                onPress={() => handleReportTypeSelect(item)}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCancel} onPress={() => setReportTypeModalVisible(false)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  combos: {
    width: '100%',
    height: 50,
    backgroundColor: '#95E7FB',
    borderRadius: 20,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parts: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  users: {
    fontSize: 16,
  },
  email: {
    fontSize: 14,
  },
  alarm: {
    height: '30%',
    width: '30%',
  },
  profile: {
    backgroundColor: 'black',
    height: '70%',
    width: '70%',
    borderRadius: 40,
  },
  button: {
    width: '85%',
    height: '40%',
    backgroundColor: '#95E7FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
  },
  modalOption: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalCancel: {
    paddingVertical: 8,
    marginTop: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Report;
 