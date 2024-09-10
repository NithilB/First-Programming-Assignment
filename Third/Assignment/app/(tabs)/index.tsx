import { TouchableOpacity, FlatList, Image, StyleSheet, Platform, View, Text, SafeAreaView, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import {Link, useRouter} from 'expo-router'
import {useState} from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const API_KEY = "e95cd6fe4ec6b4879b60a9708d111e0a"
const API_READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjZDZmZTRlYzZiNDg3OWI2MGE5NzA4ZDExMWUwYSIsIm5iZiI6MTcyNTg0Mzk1Mi45MDc1NDQsInN1YiI6IjY2ZGU0OTVhYTJmYzk0Zjc5M2U0NDg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J-BAfYlvbmhEDpUjXj6CSs55xgNaTowYE4L_K2JixjU"
const URL = "https://api.themoviedb.org/3/movie/";


/*

 LOG  {"page": 1, "results": [{"adult": false, "backdrop_path": "/vINgGecnz95iDL6fjQMARDsocgG.jpg", "genre_ids": [Array], "id": 280, "original_language": "en", "original_title": "Terminator 2: Judgment Day", "overview": "Set ten years after the events of the original, James Cameron’s classic sci-fi action flick tells the story of a second attempt to get the rid of rebellion leader John Connor, this time targeting the boy himself. However, the rebellion has sent a reprogrammed terminator to protect Connor.", "popularity": 104.927, "poster_path": "/5M0j0B18abtBI5gi2RhfjjurTqb.jpg", "release_date": "1991-07-03", "title": "Terminator 2: Judgment Day", "video": false, "vote_average": 8.1, "vote_count": 12668}, {"adult": false, "backdrop_path": "/ffdqHMWkh1h9MABwIfbfRJhgFW6.jpg", "genre_ids": [Array], "id": 218, "original_language": "en", "original_title": "The Terminator", "overview": "In the post-apocalyptic future,
*/

export interface MovieHit{
  backdrop_path: string,
  genre_ids: string[],
  id: number,
  original_title: string,
  overview: string
}

export default function HomeScreen() {

  const [movies, setMovies] = useState<MovieHit[]>([]);
  const router = useRouter();


  const showMovieDetails = () => {

  }

  const renderMovie = (item: MovieHit) => {

    return(


        <TouchableOpacity style={{margin: 10, alignItems: 'center'}} onPress={() => router.push({
          pathname: '/movielist',
          //@ts-ignore
          params: item
        })}>

          <Text style={{fontSize: 20}}>{item.original_title}</Text>

          <Image source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
          }} style={{width: Dimensions.get("window").width * .8, height: 200}}/>

        </TouchableOpacity>



    );

  }

  const searchMovies = (text: string) => {

  const url = `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjZDZmZTRlYzZiNDg3OWI2MGE5NzA4ZDExMWUwYSIsIm5iZiI6MTcyNTg0NzcxNC4yMTY1NTYsInN1YiI6IjY2ZGU0OTVhYTJmYzk0Zjc5M2U0NDg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNkfGyVBFr5nz3vgRKRBEkq_G7ZJY0je4Cgb-2osWWA'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => {

      const res = json.results;
      setMovies(res);

    })
    .catch(err => console.error('error:' + err));


  }

  return (
   <SafeAreaView style={styles.background}>


   <View style={{width: '100%', flex: 1, alignItems: 'center'}}>

    <Text style={{
      fontSize: 30,
      fontWeight: 'bold',
    }}>Search Movies</Text>


    <TextInput style={{
      backgroundColor: 'grey',
      width: '80%',
      padding: 10,
      borderRadius: 10,
      color: 'white',
      fontSize: 20
    }} 
      placeholder={"Search Here"}
      onBlur={(event) => searchMovies(event.nativeEvent.text)}
    />
    <FlatList
    contentContainerStyle={{alignItems: 'center', width: '100%'}}
    data={movies}
    renderItem={({item}) => renderMovie(item)}
    keyboardDismissMode={"interactive"}
    />
    </View>


 
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  background: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRGwQsNGVYErAtEPif_Nyj0A2CbKDQkSI",
  authDomain: "first-c4b0a.firebaseapp.com",
  databaseURL: "https://first-c4b0a-default-rtdb.firebaseio.com",
  projectId: "first-c4b0a",
  storageBucket: "first-c4b0a.appspot.com",
  messagingSenderId: "355161999791",
  appId: "1:355161999791:web:607a567ec37b32d413875a",
  measurementId: "G-RJGK2G9QYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/



/*
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Import Firebase auth methods
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRGwQsNGVYErAtEPif_Nyj0A2CbKDQkSI",
  authDomain: "",
  projectId: "first-c4b0a",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export Firebase services
export { db, collection, addDoc, getDocs, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
*/