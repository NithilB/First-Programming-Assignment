import {Text, StyleSheet, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {getAuth} from 'firebase/auth';
import {getDatabase, ref, set, get, child} from 'firebase/database';


export default function MovieList(){

    const movie = useLocalSearchParams();
    const auth = getAuth();

    const saveItem = async () => {
        if(auth && auth.currentUser){

          const db = getDatabase();
          const uid = auth.currentUser.uid;

          const dbRef = ref(db);
          const snap = await get(child(dbRef, `users/${uid}/savedMovies`));
        //   if(!snap.exists()){
        //       set(ref(db, 'users/'), {
        //       savedItems: 
        //     })            
        //       set(ref(db, 'users/'), {
        //       savedItems: 
        //     })            
        //       set(ref(db, `users/${uid}/savedMovies`), {
        //       savedItems: [movie.id],
        //     })
        //   }else{
        //     set(ref(db, `users/${uid}/savedMovies`), {
        //       savedItems: [...snap.val(), movie.id]
        //     })
        //   }
            
        }
    }

    return(
        <View style={styles.background}>
        
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{movie.original_title}</Text>

        <Image source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
          }} style={{width: Dimensions.get("window").width * .8, height: 200}}/>


          <Text style={{textAlign: 'center'}}>{movie.overview}</Text>

          {
            auth.currentUser ? 
            <TouchableOpacity onPress={saveItem} style={{backgroundColor: 'red', paddingHorizontal: 30, paddingVertical: 20, borderRadius: 20, marginTop: 20}}>

            <Text style={{fontSize: 30}}>Save to Watchlist</Text>

          </TouchableOpacity>
          : null
          }
          

        </View>
    )
}
/*
 LOG  {"apiKey": "AIzaSyCRGwQsNGVYErAtEPif_Nyj0A2CbKDQkSI", "appName": "[DEFAULT]", "authDomain": "first-c4b0a.firebaseapp.com", "currentUser": undefined}
*/

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
      alignItems: 'center',
      padding: 20
    }
  });