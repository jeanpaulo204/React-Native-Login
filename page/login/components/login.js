
import React from 'react';
import { View, StyleSheet, Text, TextInput, } from 'react-native';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/themed';

export const Tela = () => {

  const Props = StyleSheet.create({
   top:{
       marginTop:35
       },
   btn:{
    marginTop:100
   }
  });


return (

<View>

<View>
<Input placeholder='Seu Email'/>
</View>
<View style={Props.top}>
<Input placeholder="Password" secureTextEntry={true} />
</View>
<View style={Props.btn}>
<Button title="Entrar" buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }} containerStyle={{height: 40,width: 200,marginHorizontal: 50,marginVertical: 10,}}titleStyle={{color: 'white',marginHorizontal: 20,}}/>
</View>
</View>



);



}