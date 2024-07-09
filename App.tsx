import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import Task from './src/components/task/task';
type TaskType = {
  title: string;
  checked: boolean;
};
function App() {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState<TaskType[]>([]);
  const [isFocused, setIsFocused] = React.useState(false);
  const addElement = () => {
    var newArray = [...tasks, {title: text, checked: false}];
    setTasks(newArray);
    setText('');
    //...taskin içindeki elemanları kopyalıyor
    //sonra ben yeni bir eleman ekledim textinputtan aldığım değerle =>{ title: text}
  };
  console.log(text);
  return (
    <View style={styles.container}>
      <View style={styles.task_container}>
        <View style={styles.top_view}>
          <Text style={styles.main_title}>Soner Yapılacaklar</Text>
          <Text style={styles.main_title}>{tasks.length}</Text>
        </View>
        <FlatList
          data={tasks}
          renderItem={({item}) => <Task title={item.title} />}
        />
        <View style={styles.bottom_view}>
          <TextInput
            style={styles.search_bar}
            onChangeText={setText}
            value={text}
            placeholder="Yapılacak..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Pressable
            onPress={addElement}
            style={[
              styles.button_container,
              {
                backgroundColor: isFocused ? '#ffa500' : '#808080',
              },
            ]}>
            <Text style={styles.button_title}>Kaydet</Text>
          </Pressable>
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
    margin: 10,
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
  button_title: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
  },
  button_container: {
    backgroundColor: '#808080',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
