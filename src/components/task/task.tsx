import React from 'react';
import {View, Text} from 'react-native';
import styles from './task.styles';

const Task = (props: any) => {
  return (
    <View style={styles.task_view}>
      <Text>{props.title}</Text>
    </View>
  );
};
export default Task;
