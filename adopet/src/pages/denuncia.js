import React, { useState } from 'react';
import {Text, View, Bottom, StyleSheet,TextInput, Image, TouchableOpacity, Button } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';

 const Tab = createBottomTabNavigator();
   
export default function Denuncia() {
   const navigation = useNavigation();

  
  const [nome,setNome] = useState("");
  const [endereco,setEndereco] = useState("");
  const [descricao,setDescricao] = useState("");
  const [image, setImage] = useState(null);



  async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
function salvar(){
  save("nome", nome)
  save("endereco", endereco)
  save("descricao", descricao) 
}
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style ={styles.container}>
    <Animatable.View animation = "fadeInUp" delay={500} style={styles.containerHeader}>
    <Text style={styles.message}> Denúncia </Text>
    </Animatable.View>
    
    <Animatable.View style={styles.containerForm}>
    <Text style={styles.title}>Nome</Text>
    <TextInput
        placeholder="Digite seu nome completo"
        style={styles.input}
        onChangeText={text=>setNome(text)} 
      />

      <Text style={styles.title}>Endereço</Text>
    <TextInput
        placeholder="Digite seu endereço"
        style={styles.input}
        onChangeText={text=>setEndereco(text)} 
      />

   

    <Text style={styles.title}>Descrição</Text>
    <TextInput 
       placeholder="Descreva o ocorrido"
        style={styles.input}
        onChangeText={text=>setDescricao(text)} 
      />
      <Button title="Adicione uma foto" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, color: '#1b3653', fontSize: 18, fontWeight: 'bold',backgroundColor:'#1b3653'}} />}

      <TouchableOpacity style={styles.button}
          onPress={() =>{salvar();navigation.navigate('Home');}}>
        <Text style={styles.buttonText}> Enviar </Text>
        </TouchableOpacity>


     </Animatable.View>
     </View>
 

);
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1b3653'
    },
    containerHeader:{
      marginTop:'14%',
      marginBottom:'8%',
      paddingStart:'5%.'
    },
    message:{
      fontSize:28,
      fontWeight:'bold',
      color: '#ffffff',
      textAlign: 'center'
    },
    containerForm:{
      backgroundColor: '#ffffff',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%'
    },
    title:{
      fontSize: 20,
      marginTop: 28,
    },
    input:{
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
      color: '#808080'
    },
    button:{
      backgroundColor: '#000000',
      width:'100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText:{
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
})