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
import { useState } from 'react';
export default function Login({ navigation }) {
  const [userLogin, setUserLogin] = useState({
    name: '',
    password: '',
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '',
          padding: 20,
          borderRadius: 10,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOffset: { width: 0, height: 1 },
          elevation: 6,
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
          }}
        >
          <Image
            source={require('../assets/favicon.png')}
            style={{
              height: 90,
              width: 90,
            }}
          ></Image>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'skyblue' }}>
            Login{' '}
          </Text>
        </View>
        <Text style={{ fontSize: 17, color: 'skyblue' }}>Name</Text>
        <TextInput
          style={{
            borderWidth: 1,
            margin: 0,
            padding: 14,
            fontSize: 18,
            borderColor: 'gray',
            borderRadius: 6,
          }}
          placeholder='Enter Name'
          onChangeText={(text) => {
            setUserLogin({ ...userLogin, name: text });
          }}
        ></TextInput>
        <Text style={{ fontSize: 17, color: 'skyblue', marginTop: 35 }}>
          Password
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 0,
            padding: 14,
            fontSize: 18,
            borderColor: 'gray',
            borderRadius: 6,
          }}
          placeholder='Enter Password'
          secureTextEntry={true}
          onChangeText={(text) => {
            setUserLogin({ ...userLogin, password: text });
          }}
        ></TextInput>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Text style={{ color: 'red' }}>Forgot password ?</Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 8,
          }}
        >
          <Text
            style={{
              backgroundColor: 'skyblue',
              padding: 9,
              alignSelf: 'center',
              borderRadius: 4,
              fontSize: 18,
              color: 'white',
              paddingHorizontal: 70,
              marginTop: 20,
            }}
            onPress={() => {
              navigation.navigate('user');
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}
        >
          <Text>
            don't have a account ?{' '}
            <Text
              style={{ color: 'skyblue', fontWeight: 'bold' }}
              onPress={() => {
                navigation.navigate('Sign');
              }}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
});
