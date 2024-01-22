import * as WebBrowser from 'expo-web-browser';
import {Text, View, StyleSheet,TextInput, Image, TouchableOpacity,SafeAreaView,FlatList } from 'react-native';
 
   
export default function Ongs() {
   
   const DATA = [
  {
    imagem: 'https://ongsoscidadaniaanimal.org/images/site/logo-ong-cidadania-animal.png',
    link: 'https://ongsoscidadaniaanimal.org/',
  },
  { 
    imagem:
      'https://storage.googleapis.com/sealpolen-files.polinizador.com.br/blob/ongs/ong-anjosdepatasindaiatuba-thumb.png',
    link: 'https://polen.com.br/anjosdepatasindaiatuba',
  },
  { 
    imagem:
      'https://storage.googleapis.com/sealpolen-files.polinizador.com.br/blob/ongs/ong-sosbichos-logo.png',
    link: 'https://polen.com.br/sosbichos',
  },


];
   
   
   
   const Item = ({ item }) => (
  <View style={styles.item}>
    <TouchableOpacity onPress={() => clickItemFlatList(item)}>
      <View style={{ flex: 1, flexDirection: '1' }}>
        <View style={{ flex: 8 }}>
          <Image
            style={styles.logo}
            source={{
              uri: item.imagem,
            }}
          />
        </View>
      
        <View style={{ flex: '-11' }}>
          <Text style={styles.title}>{item.noticia} </Text>
         
         
   
          <View style={{ backgroundColor:'#ffffff'}}>
        </View>
      </View>
      </View>
   
    </TouchableOpacity>
  </View>
);

clickItemFlatList = (item) => {
  WebBrowser.openBrowserAsync(item.link);
};






  return (
    <SafeAreaView style={styles.container}>
     <Text style={styles.title2}> Ongs Parceiras </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1b3653'
    },
  
    title:{
      fontSize: 20,
      marginTop: 28,
    },
  

  item: {
    borderColor: 'white',
    borderWidth: 1,
   backgroundColor: '#ffffff',
    padding: 2,
    marginVertical: 3,
    marginHorizontal: 5,
    borderRadius: 2,
    fontWeight: 'arial',
  },
  
   title2: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'center',
    color:'white',
  },

  logo: {
  height: 150,
    width: '50%',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    marginTop: 10,
    alignSelf: 'center'
  }

})