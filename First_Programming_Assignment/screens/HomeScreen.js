import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const API_KEY = 'API'; 
const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`);
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for Movies, Anime, or TV Shows"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={searchContent} />
      {loading ? <ActivityIndicator size="large" /> : null}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title || item.name}</Text>
            <Button title="Details" onPress={() => navigation.navigate('Details', { id: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
