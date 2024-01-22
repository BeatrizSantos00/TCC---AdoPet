import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function SignIn(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
   const [senha, setSenha] = useState('')

   function handleSignIn(){
     if(username ==='' || email === ''|| passaword === ''){
       alert ("Preencha os campos")
       return;
     }
     const data= {
       email,
       passaword
     }
     console.log(data);
   }

  return (
    <View style= {styles.container}>
    <Animatable.View animation= "fadeInLeft" delay= {500} style= {styles.containerHeader}>
    <Text style= {styles.message}> Bem-vindo(a) </Text>
    </Animatable.View>

    <Animatable.View animation= "fadeInUp" style= {styles.containerForm}>


    <Text style= {styles.title}>Nome </Text>
    <TextInput
    onChangeText={setNome}
    value={nome}
    placeholder="Digite seu Nome..."
    style={styles.input}
    />
    <Text style= {styles.title}>Email </Text>
    <TextInput
    onChangeText={setEmail}
    value={email}
    placeholder="Digite um email..."
    style={styles.input}
    />
     <Text style= {styles.title}>Senha </Text>
    <TextInput
    onChangeText={setSenha}
    value={senha}
    placeholder="Digite sua senha..."
    secureTextEntry={true}
    style={styles.input}
    />
    
    <TouchableOpacity 
    style= {styles.button}
      onPress= {()=> navigation.navigate('Home')}
    >
    <Text style= {styles.buttonText}> Cadastrar</Text>
    </TouchableOpacity>

   

       <TouchableOpacity
        style= {styles.buttonRegister}
        onPress= {()=> navigation.navigate('Login')}
        >
    <Text style= {styles.registerText}> Já tem uma conta? Entrar</Text>
    </TouchableOpacity>

    </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    background: "#1b3653"
  },
  containerHeader: {
    marginTop:'14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  },
  containerForm: {
    backgroundColor: 'white',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize:20,
    marginTop:28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 15,
    color: 'gray'
  }, 
  button: {
    backgroundColor: '#1b3653',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1'
  }

})