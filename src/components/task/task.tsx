import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './Task.styles';

const Task = (props: any) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View
      style={[
        styles.task_view,
        checked ? styles.task_view_checked : styles.task_view_unchecked,
      ]}>
      <Pressable
        onPress={() => {
          console.log('pressed');
          setChecked(!checked);
          props.toggleChecked();
        }}>
        <Text style={[styles.task_title, checked && styles.task_title_checked]}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};
export default Task;
