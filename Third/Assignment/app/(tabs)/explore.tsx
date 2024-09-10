import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../../scripts/firebase.js'; // Correct the import path
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);


  // Monitor authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, navigate to home screen
        setLoggedIn(true);
      }
    });
    return unsubscribe;
  }, []);

const logOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    Alert.alert("Signed Out!");
    setLoggedIn(false);
    setUser(null);
  })
}

  // Handle login
  const handleLogin = () => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(creds => {
      const user = creds.user;
      setUser(user);
    }).catch(err => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setLoggedIn(true);
        setUser(user);

      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert('Login Error', errorMessage);
      });
    })
    
  };

  return (
    <View style={styles.container}>
    {
      !isLoggedIn ? 
    <>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />

      <Text style={styles.registerText}>
        Sign in here as well! You can only make one unique email and password{' '}
      </Text>
      </>
      :
      <>
        <TouchableOpacity onPress={logOut} style={{backgroundColor: 'red', alignItems: 'center', padding: 10}}>
          <Text style={{fontSize: 20}}>
          Log Out
        </Text>
        </TouchableOpacity>
      </>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  registerLink: {
    color: '#0000ff',
    fontWeight: 'bold',
  },
});
