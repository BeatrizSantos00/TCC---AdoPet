
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function Welcome(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

    <View style={styles.containerLogo}>
    <Animatable.Image
    animation="flipInY"
    source={require('../assets/logo.png')}
    style={{
            width: 280,
            height: 200,}}
    rezideMode= "contain"
    />
    </View>

    <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
    <Text style ={styles.title}> Fazer logout</Text>
    <Text style ={styles.text}>Até logo </Text>

    <TouchableOpacity 
    style={styles.button}
    onPress= {()=> navigation.navigate('Welcome')}
    >
    <Text style={styles.buttonText}> Sair </Text>
    </TouchableOpacity>
    </Animatable.View>

    
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor:'white'
},
containerLogo:{
   flex: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
},
containerForm: {
  flex:1,
  backgroundColor: '#dc0010',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingStart: '5%',
  paddingEnd: '5%'
},
title: {
  fontSize: 20,
  fontWeight:'bold',
  alignSelf: 'center',
  marginTop: 28,
  marginBottim: 12
},
text:{
  color:'black',
  alignSelf: 'center',
},
button: {
  position: 'absolute',
    backgroundColor: '#000000',
    borderRadius: 40,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText: {
  fontSize: 18,
  color: 'white',
  fontWeight: 'bold'
}

})