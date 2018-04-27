import React, {Component} from 'react';
import {
  StyleSheet, View, Text,
  Image, ImageBackground,
} from 'react-native';
// import {NavigationActions} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import {
  Form, Item, Input, Label,
  Icon, Button, 
} from 'native-base';
import {connect} from 'react-redux';

import bgSrc from '../img/bg_pastel6.jpg';
import logoImg from '../img/logo.png';

export default class CreatePassword extends Component {
  render() {
    return(
      <ImageBackground style={styles.picture} source={bgSrc}>

        <View style={styles.container}>
           <View style={styles.conImg}>
             <Image source={logoImg} style={styles.image} />
           </View>
           <View style={styles.form}>
             <Form>
               <Item floatingLabel>
                <Icon active name='ios-lock-outline' style={{color:"#f9fafc",paddingTop:5}} />
                <Label style={styles.text1}>Create New Password</Label>
                <Input secureTextEntry={true} style={styles.text1} />
               </Item>
             </Form>
           </View>
           <View style={styles.conbutton}>
             <Button rounded onPress={() => this.props.navigation.goBack()} style={styles.button} >
              <Text style={styles.text1}>Create Password</Text>
             </Button>
           </View>
          </View>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
  },
  form: {
    flex: 0.5,
    justifyContent: 'center',
    marginRight:70,
    marginLeft:60
  },
  conImg: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:80
  },
  image: {
    width: 125,
    height: 125,
  },
  text1: {
    color: "#f9fafc",
    backgroundColor: 'transparent',
    alignItems:'center',
    fontFamily:'Gabriola Regular'
  },
  conbutton:{
    flex:0.25,
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    marginTop:-250,
    height: 40,
    width: 300,
    borderColor: 'white',
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"transparent"
  },
});
