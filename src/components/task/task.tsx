import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './task.styles';

const Task = (props: any) => {
  return (
    <View style={styles.task_view}>
      <Pressable
        onPress={() => {
          console.log('pressed');
        }}>
        <Text style={styles.task_title}>{props.title}</Text>
      </Pressable>
    </View>
  );
};
export default Task;
