import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Home() {
  return (
     <NavigationContainer
     independent={true}>
      <TabRoutes />
    </NavigationContainer>
  );
}

