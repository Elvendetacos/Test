import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, ImageBackground, ScrollView } from 'react-native';
import Alarm from '../images/bell.png';
import Cascade from '../images/cascada.jpg';


function Home() {
    return ( 
        <View style={{ flexGrow: 1}}>
            <View style={{backgroundColor: '#95E7FB', height: 116}}>
                <View style={{marginTop: Constants.statusBarHeight, flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <View style={styles.profile}></View>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.users}>Brian Hernández</Text>
                        <Text style={styles.email}>reversdead@gmail.com</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <Image source={Alarm} style={styles.alarm} />
                    </View>
                </View>
            </View>
            <ImageBackground source={Cascade} resizeMode="cover" style={styles.backgroundImage}>
                <ScrollView style={{width: '100%', height: '70%', flex: 0, flexGrow: 0, marginTop: 'auto', marginBottom: 'auto'}} horizontal={true}>
                    <View style={styles.cardsPoint}>
                        <Text>Tip de cuidado de agua del día
                            Anexar link con imagen de algún post o blog</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
            <View style={{flex:1}}>
                <View style={styles.generateReport}>
                    <View style={styles.cardReport}>
                        
                    </View>
                </View>
                <View style={styles.viewReport}>
                    <View style={styles.cardViewReport}>

                    </View>
                </View>
                <View style={styles.enterpise}>
                </View>
            </View>
        </View>
     );
}


const styles = StyleSheet.create({
    cardViewReport:{
        width: 336,
        height: 81,
        borderRadius: 20,
        backgroundColor: '#95E7FB',
        elevation: 8,
    },
    cardReport:{
        width: 336,
        height: 81,
        borderRadius: 20,
        backgroundColor: '#95E7FB',
        elevation: 8,
    },
    enterpise:{
        flex: 1,
        backgroundColor: 'white'
    },
    viewReport: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    generateReport: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardsPoint: {
        color: '#342A21',
        backgroundColor: '#95E7FB',
        marginRight: 20,
        marginLeft: 20,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 2,
        borderLeftWidth:1,
        borderRightWidth:3,
        flex: 1,
        height: 154,
        width: 199,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage:{
        width: '100%',
        height: 258,
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
    }
  });

export default Home;