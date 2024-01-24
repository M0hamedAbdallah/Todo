import { StyleSheet } from 'react-native';
import { todo } from '../../types/types';
import { useState } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useGetTodosQuery } from '../../services/Api';

export default function TabOneScreen() {
  // const [todos,setTodos] = useState<todo[]>([]);

  // const getTodos = async () => {
  //   const response = await fetch('http://localhost:3000/api/todos');
  //   const data = await response.json();
  //   setTodos(data);
  // }

  const { isLoading, data, error } = useGetTodosQuery();

  const getDate = (data: Date): string => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {data?.map((todo: todo) => (
        <View key={todo.Todo_id}>
          <Text>{todo.Todo_name}</Text>
          <Text>{todo.Todo_description}</Text>
          <Text>{getDate(todo.Todo_time)}</Text>
          <View>
            <Text>
              {todo.number_of_love}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
