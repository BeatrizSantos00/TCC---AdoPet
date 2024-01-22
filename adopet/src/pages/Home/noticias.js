import * as WebBrowser from 'expo-web-browser';
import {Text, View, StyleSheet,TextInput, Image, TouchableOpacity,SafeAreaView,FlatList } from 'react-native';
 
   
export default function Ongs() {
   
   const DATA = [
   {
    noticia: 'Prefeitura de São José dos Campos lança o Programa permanente de castração e microchipagem de cães e gatos, Meu Pet Feliz.          ',
    subtitulo: 'Ler mais',
    imagem: 'https://www.sjc.sp.gov.br/media/27968/capa-inscricoes_pet.svg',
    link: 'https://www.sjc.sp.gov.br/servicos/saude/meu-pet-feliz/',
  },
  { 
  noticia: 'Mulher autista consegue autorização para seu cão acompanhar seu parto no Reino Unido',
    subtitulo: 'Ler mais...',
    imagem:
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/07/cao-ajuda-parto-mulher-autista.png?w=740&h=415&crop=1',
    link: 'https://www.cnnbrasil.com.br/internacional/mulher-autista-consegue-autorizacao-para-seu-cao-acompanhar-seu-parto-no-reino-unido/',
  },
 {
    noticia: 'Idoso comemora aniversário de 100 anos com mais de 200 cães como convidados',
    subtitulo: 'Ler mais',
    imagem:
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/idoso-comemora-aniversario-com-caes-e1687559377380.jpg?w=690&h=388&crop=1',
    link: 'https://www.cnnbrasil.com.br/internacional/idoso-comemora-aniversario-de-100-anos-com-mais-de-200-caes-como-convidados/',
  },

  {
    noticia: 'Posso dar gelo para meu cachorro? Veterinário tira dúvidas sobre como amenizar calor para seus pets',
    subtitulo:'Ler mais',
    imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/GettyImages-1242680597.jpg?w=732&h=412&crop=1',
    link: 'https://www.cnnbrasil.com.br/saude/posso-dar-gelo-para-meu-cachorro-veterinario-tira-duvidas-sobre-como-amenizar-calor-para-seus-pets/',
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
          <Text style={styles.title}>{item.subtitulo} </Text>
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
     <Text style={styles.title2}> Notícias </Text>
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
      fontWeight: 'bold',
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