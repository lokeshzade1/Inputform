import { StatusBar } from 'expo-status-bar';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';
export default function User({ navigation }) {
  const [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    let result = await data.json();
    setFakeData(result);
  };
  console.log(fakeData);
  return (
    <View style={{ paddingBottom: 0 }}>
      <FlatList
        data={fakeData}
        renderItem={({ item }) => {
          return (
            <>
              <View>
                <View style={{ borderWidth: 1, margin: 4, padding: 5 }}>
                  <Text>{item.name}</Text>
                  <Text>{item.username}</Text>
                  <Text>{item.email}</Text>
                  <Text>{item.address.city}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
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
