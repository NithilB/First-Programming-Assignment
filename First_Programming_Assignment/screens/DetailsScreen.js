import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'API';  

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        setDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!details) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{details.title}</Text>
      <Text>{details.overview}</Text>
      <Button title="Add to Watchlist" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
