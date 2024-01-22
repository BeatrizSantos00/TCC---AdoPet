import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Home/noticias';
import Doação from '../doacao';
import Adoção from '../adocao';
import Denúncia from '../denuncia';
import Voluntario from '../volun';
import Ongs from '../ongs';
import Usuario from '../usuario';


const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return (
    
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size}) => <Ionicons name="home" size={20} color={color}/>,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabel: 'Home'
        }}
      />

      <Tab.Screen
        name="Doação"
        component={Doação}
        options={{
          tabBarIcon: ({ color, size}) => <Ionicons name="logo-usd" size={20} />,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabel: 'Doação'
        }}
      />

      <Tab.Screen
        name="Adoção"
        component={Adoção}
        options={{
          tabBarIcon: ({ color, size}) => <Ionicons name="paw" size={20} />,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabel: 'Adoção'
        }}
      />

      <Tab.Screen
        name="Denúncia"
        component={Denúncia}
        options={{
          tabBarIcon: ({ color, size}) => <Ionicons name="warning" size={20}/>,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabel: 'Denúncia'
        }}
      />

      <Tab.Screen
        name="Voluntario"
        component={Voluntario}
        options={{
          tabBarIcon: ({ color, size}) => <Ionicons name="person-add" size={20} color="black"/>,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabel: 'Voluntario'
        }}
      />

      <Tab.Screen
        name="Ongs"
        component={Ongs}
        options={{
          tabBarIcon: ({ color, size}) => <Ionicons name="earth" size={20}/>,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabel: 'Ongs'
        }}
      />

         <Tab.Screen
        name="logout"
        component={Usuario}
        options={{
          tabBarIcon: ({ color, size}) => <Ionicons name="exit-outline" size={20} color="black"/>,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabel: 'logout'
        }}
      />
    </Tab.Navigator>
  )
}