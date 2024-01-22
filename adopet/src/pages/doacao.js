import * as WebBrowser from 'expo-web-browser';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Pix() {
  const DATA = [
    {
      noticia: 'Doe de outra forma...',
      imagem: 'https://www.qrcode-monkey.com/img/default-preview-qr.svg',
      link: 'https://forms.gle/hgHcjKfHf6JDWZHEA',
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

            <View style={{ backgroundColor: '#ffffff' }}></View>
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
      <Text style={styles.title2}> Faça sua Doação </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '32%',
    flex: 1,
    backgroundColor: '#1b3653',
    paddingStart: '13%',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%.',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  containerForm: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 22,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000000',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
  stretch: {
    margin: 40,
    width: 190,
    height: 190,
    borderRadius: 80 / 2,
    alignSelf: 'center',
  },
  container: {
    width: '88%',
    alignSelf: 'center',
    marginTop: '32%',
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: '20',
    shadowOpacity: 0.1,
    shadowColor: 'white',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    backgroundColor: '#1b3653',
  },

  item: {
    borderColor: 'white',
    borderWidth: 10,
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
    textAlign: 'center',
    color: 'white',
  },

  logo: {
    height: 150,
    width: '50%',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    marginTop: 10,
    alignSelf: 'center',
  },
});
