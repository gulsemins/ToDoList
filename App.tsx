import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Task from './src/components/task/task';

function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  console.log(text);
  return (
    <View style={styles.container}>
      <View style={styles.task_container}>
        <View style={styles.top_view}>
          <Text style={styles.main_title}>Yapılacaklar</Text>
          <Text style={styles.main_title}>0</Text>
        </View>
        <Task title="adc" />
        <View style={styles.bottom_view}>
          <TextInput
            style={styles.search_bar}
            onChangeText={onChangeText}
            placeholder="Yapılacak..."
          />
          <TouchableOpacity style={styles.button_container}>
            <Text style={styles.button_title}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  task_container: {
    flex: 1,
    margin: 5,
    justifyContent: 'space-between',
  },
  main_title: {
    color: '#ffa500',
    fontSize: 28,
    fontWeight: 'bold',
  },
  top_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom_view: {
    marginBottom: 50,
    backgroundColor: '#37474f',
    borderRadius: 10,
    padding: 10,
  },
  search_bar: {
    color: 'gray',
  },
  button_container: {
    backgroundColor: '#808080',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  button_title: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
  },
});
