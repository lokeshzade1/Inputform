import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Login from './componant/Login';
import Signup from './componant/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './componant/users/User';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='login'
            component={Login}
            options={{
              title: null,
            }}
          />
          <Stack.Screen
            name='Sign'
            component={Signup}
            options={{
              title: null,
            }}
          />
          <Stack.Screen
            name='user'
            component={User}
            options={{
              title: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
