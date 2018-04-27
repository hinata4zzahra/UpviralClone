import React, {Component} from 'react';
import {
  StyleSheet, TouchableOpacity,
  View, Text, Image, ImageBackground,
} from 'react-native';
// import {NavigationActions} from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import {
  Form, Item, Input, Label,
  Icon, Button
} from 'native-base';
import {connect} from 'react-redux';

import bgSrc from '../img/bgpic5.gif';
import logoImg from '../img/logo.png';

export default class LoginScreen extends Component {
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
                <Icon active name='ios-person-outline' style={{color:"#f9fafc",paddingTop:5}} />
                <Label style={styles.text1}>Username</Label>
                <Input style={styles.text1} />
               </Item>
               <Item floatingLabel>
                <Icon active name='ios-lock-outline' style={{color:"#f9fafc",paddingTop:5}} />
                <Label style={styles.text1}>Password</Label>
                <Input secureTextEntry={true} style={styles.text1} />
               </Item>
             </Form>
           </View>
           <View style={styles.conbutton}>
             <Button rounded onPress={() => this.props.navigation.navigate('Campaigns')} style={styles.button} >
              <Text style={styles.text1}>Login</Text>
             </Button>
           </View>
           <View style={styles.sign}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} >
              <Text style={styles.text1}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CreatePassword')}>
              <Text style={styles.text1}>Forgot Password?</Text>
            </TouchableOpacity>
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
  sign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginRight:70,
    marginLeft:60
  },
  conImg: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
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
    flex:0.5,
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    height: 40,
    width: 300,
    marginTop:40,
    borderColor: '#f9fafc',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#29bc8b"
  },
});
