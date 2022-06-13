import React, { Component } from 'react'; 
import { Text, View } from 'react-native';

export default class LoginScreen extends Component {
    signInWithGoogleAsync = async() => {
        try {
             const result = await Google.logInAsync({
             behaviour: "web",
             androidClientid: "337752148967-8upqqlfc6li2600n2tsvnarrgfu21u00.apps.googleusercontent.com",
             iosClientid: "337752148967-2qheiadojiu5s2mu9r97f9j5j60di6g0.apps.googleusercontent.com",
             scopes: ['profile', 'email']
           });
     render() 
         return (
           <View 
              style={{
                   flex: 1, 
                   justifyContent: "center", 
                   alignltems: "center"
              }}>
              <Text>Login</Text>
              </View>
         )
        

    }

