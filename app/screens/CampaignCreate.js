import React, {Component} from 'react'
import {
  Container, Content, Form,
  Label, Item, Input,
  Button, Text
} from 'native-base'
import {StyleSheet,ImageBackground, View} from 'react-native'
import {connect} from 'react-redux'

import {createcampaign, allcampaigns} from '../actions/campaigns'
import bgSrc from '../img/bg_pastel6.jpg';

class CampaignCreate extends Component{

  state = {
    name: "",

  }

  componentWillMount(){
    this.props.dispatch(allcampaigns())
  }



  handleSubmit = () => {

    if(this.state.name !== ""){
      this.props.dispatch(createcampaign(this.state))
      .then(()=>{
        alert('Create Campaign Success!')
        this.props.dispatch(allcampaigns())
        this.props.navigation.goBack()
      })
    } else {
      alert ("campaign name must be created!")
    }
  }

  render(){
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        <Container style={styles.container}>
          <Content>
            <View>
              <Form style={styles.form}>
                <Item stackedLabel style={styles.viewForm}>
                  <Label style={styles.text1}>campaign name</Label>
                  <Input onChangeText={(name)=>this.setState({name})} style={styles.text1} />
                </Item>
              </Form>
            </View>
            <View style={styles.conbutton}>
              <Button onPress={()=> this.handleSubmit()} style={styles.button}>
                <Text style={{color:"white"}}>Submit</Text>
              </Button>
              <Button onPress={()=> this.props.navigation.goBack()} style={styles.button}>
                <Text style={{color:"white"}}>Back</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    campaignsReducer: state.campaignsReducer
  }
}

export default connect(mapStateToProps)(CampaignCreate)

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
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:150
    },
  viewForm:{
    marginRight:70,
    marginLeft:60,
    height: 100,
    width: 300,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  text1: {
    color: "#0a5260",
    backgroundColor: 'transparent',
    alignItems:'center',
    fontFamily:'Lobster'
  },
  conbutton:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:15
  },
  button: {
    height: 50,
    width: 300,
    marginTop:25,
    borderColor: '#664c1c',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#0a5260"
  },
});
