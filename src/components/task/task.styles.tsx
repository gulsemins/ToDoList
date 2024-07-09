import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  task_view: {
    borderRadius: 10,
    padding: 10,
    margin: 7,
  },
  task_title: {
    color: 'white',
  },
  task_title_checked: {
    textDecorationLine: 'line-through',
  },
  task_view_checked: {
    backgroundColor: '#37474f',
  },
  task_view_unchecked: {
    backgroundColor: '#7da453',
  },
});
