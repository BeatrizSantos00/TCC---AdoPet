import * as WebBrowser from 'expo-web-browser';
import {Text, View, StyleSheet,TextInput, Image, TouchableOpacity,SafeAreaView,FlatList } from 'react-native';
 
   
export default function Ongs() {
   
   const DATA = [
  {
    noticia: 'Scobby',
    imagem: 'https://a.imagem.app/ooVqLY.jpeg',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf_bp5Cz8reL7bPreNSqZqLRprQWO1MhtBy946IiBHGZsAzrg/viewform?usp=sf_link',
  },
 {
    noticia: 'Lana',
    imagem: 'https://a.imagem.app/ooVwxG.png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeVsuSTO0iLq5bisikbS4Ec6ELDGclhD1-RsqvbBpx62aLTHw/viewform?usp=sf_link',
  },
  {
    noticia: 'Tião',
    imagem: 'https://a.imagem.app/ooVl29.jpeg',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScGolJ4KtHUIeeyYmg2ZThhqvzjB54ErZkHCbptXQTPDvO2_g/viewform?usp=sf_link',
  },
  {
    noticia: 'Pipoca',
    imagem: 'https://a.imagem.app/ooVJfa.jpeg',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeyeQEVhSjqr0gm9pGGfkzJ6U9s3Aw9UehXGCLbseVz2swo_Q/viewform?usp=sf_link',
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
     <Text style={styles.title2}> Adoção </Text>
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
      textAlign:'center',
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