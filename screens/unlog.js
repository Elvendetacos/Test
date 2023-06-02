import React from "react";
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, ImageBackground, ScrollView } from 'react-native';
import Cascade from '../images/cascada.jpg';
import First from '../images/primera.jpg';
import Second from '../images/segunda.jpg';
import  Enterprise1 from '../images/enterprise1.png';
import  Enterprise2 from '../images/enterprise2.png';
import  Enterprise3 from '../images/enterprise3.png';
import TipCard from "../components/tipCard";
import User from '../images/user.png';


function Unlog() {
    return ( 
        <View style={{ flexGrow: 1}}>
            <View style={{backgroundColor: '#95E7FB', height: 116}}>
                <View style={{marginTop: Constants.statusBarHeight, flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                        <Image style={styles.profile} source={User}></Image>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.users}>Inicia Sesión</Text>
                        <Text style={styles.email}>Registrate</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                    </View>
                </View>
            </View>
            <ImageBackground source={Cascade} resizeMode="cover" style={styles.backgroundImage}>
                <ScrollView style={{width: '100%', height: '70%', flex: 0, flexGrow: 0, marginTop: 'auto', marginBottom: 'auto'}} horizontal={true}>
                    <TipCard/>
                    <TipCard/>
                </ScrollView>
            </ImageBackground>
            <View style={{flex:1}}>
                <View style={styles.generateReport}>
                    <View style={styles.cardReport}>
                        <Image source={First} style={{flex:1, width:'100%', height: '100%'}}/> 
                        <View style={{flex:3, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#342A21', fontSize: 20}}>Generar Reporte</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewReport}>
                    <View style={styles.cardViewReport}>
                        <View style={{flex:3, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#342A21', fontSize: 20}}>Generar Reporte</Text>
                        </View>
                        <Image source={Second} style={{flex:1, width:'100%', height: '100%'}}/> 
                    </View>
                </View>
                <View style={styles.enterpise}>
                    <View style={styles.enterpiseView}>
                        <View  style={styles.imagesEnterorise}>
                        <Image source={Enterprise1} style={{width: '100%', height:'100%'}}></Image>
                        </View>
                        <View  style={styles.imagesEnterorise}>
                        <Image source={Enterprise2} style={{width: '100%', height:'100%'}}></Image>    
                        </View>
                        <View  style={styles.imagesEnterorise}>
                        <Image source={Enterprise3} style={{width: '100%', height:'100%'}}></Image>    
                        </View>
                    </View>
                </View>
            </View>
        </View>
     );
}


const styles = StyleSheet.create({
    imagesEnterorise:{
        flex: 0,
        width: '21%',
        marginLeft: 'auto',
        marginRight:'auto',
        backgroundColor: 'white',
        height: '88%', 
        borderRadius: 35,
        overflow: 'hidden',
        borderColor: 'black',
        elevation: 3
    },
    enterpiseView:{
        width: 336,
        height: 81,
        flexDirection: 'row',
    },
    cardViewReport:{
        overflow: 'hidden',
        width: 336,
        height: 81,
        borderRadius: 20,
        backgroundColor: '#95E7FB',
        elevation: 8,
        flexDirection: 'row',
    },
    cardReport:{
        overflow: 'hidden',
        width: 336,
        height: 81,
        borderRadius: 20,
        backgroundColor: '#95E7FB',
        elevation: 8,
        flexDirection: 'row',
    },
    enterpise:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
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

export default Unlog;