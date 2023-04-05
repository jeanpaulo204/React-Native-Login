
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Tela } from './components/login';
import { Gif } from './components/gif';


export const Login = () => {

  const Props = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     marginTop: 30
    },
  
    inicio: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 100
    
    },
  });

return (

<View>

<View style={Props.header}>
<Gif/>
</View>
<View style={Props.inicio}>
<Tela />
</View>

</View>


);


}