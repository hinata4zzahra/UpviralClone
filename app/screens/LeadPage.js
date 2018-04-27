import React, {Component} from 'react'
import {Text,View, StyleSheet, ImageBackground} from 'react-native'
import {
  Container, Content, Image,
  Icon,Button, Item, Input,
  Textarea,Form, Label
} from 'native-base'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'

import {saveCampaign, campaign} from '../actions/campaigns'

class LeadPage extends Component {



  state= {
    button_content_campaign:'',
    content_campaign:'',
    title_campaign:''
  }

  componentWillMount(){
    const {objectId} = this.props.navigation.state.params
    this.props.dispatch(campaign(objectId))
  }

  handleSave = (objectId) => {

    const {uri,name} = this.props.navigation.state.params

    const campaign={
      title_campaign:this.state.title_campaign,
      img_background_campaign:uri,
      button_content_campaign:this.state.button_content_campaign,
      content_campaign:this.state.content_campaign,
      name:name
    }

    this.props.dispatch(saveCampaign(campaign,objectId))
    .then(() => {
      const navigateToLeadPageSuccess = NavigationActions.navigate({
        routeName : 'LeadPageSuccess',
        params:{objectId,name},
      })
      this.props.navigation.dispatch(navigateToLeadPageSuccess)
    })
  }

  render() {
    console.log(this.props.campaignsReducer)

    const {title_campaign,content_campaign,button_content_campaign,objectId,name} = this.props.campaignsReducer.detail_campaign
    const{uri}=this.props.navigation.state.params
    return(
    <Container style={styles.container}>
      <Content>
          <View style={styles.btnCon}>
            <Button rounded info style={styles.btn} onPress={() => this.props.navigation.goBack()}>
              <Text style={{color:'white'}}>Back</Text>
            </Button>
            <Button rounded info style={styles.btn}>
              <Text style={{color:'white'}}>Preview</Text>
            </Button>
            <Button rounded info style={styles.btn} onPress={()=>this.handleSave(objectId,title_campaign,uri,name)}>
              <Text style={{color:'white'}}>Save</Text>
            </Button>
          </View>
          <View style={styles.title}>
            <Text>Title</Text>
            <Item regular>
              <Input placeholder={title_campaign} onChangeText={(title_campaign)=>this.setState({title_campaign})} />
            </Item>
          </View>
          <View style={styles.viewPage}>
            <Text>Landing Page URL : </Text>
          </View>
          <View>
            <ImageBackground source={{uri:uri}} style={{width:400,height:230,marginLeft:5}}>
              <Form>
                <Textarea rowSpan={3} bordered placeholder={content_campaign}
                 style={{marginTop:25,color:'white',marginLeft:25,marginRight:25}}
                 onChangeText={(content_campaign)=>this.setState({content_campaign})}
                />
              </Form>
              <Form>
                <Item regular style={{marginTop:10,marginLeft:25,marginRight:25}}>
                  <Input placeholder={button_content_campaign}
                   onChangeText={(button_content_campaign)=>this.setState({button_content_campaign})}
                   style={{color:'white'}}
                  />
                </Item>
              </Form>
            </ImageBackground>
          </View>
      </Content>
    </Container>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    campaignsReducer: state.campaignsReducer
  }
}

export default connect(mapStateToProps)(LeadPage)

styles = StyleSheet.create({
  container:{
    flex:1
  },
  btnCon:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:5,
    marginLeft:5,
    marginRight:5
  },
  btn:{
    width:125,
    justifyContent:'center',
    alignSelf:'center'
  },
  title:{
    marginTop:15
  },
  viewPage:{
    marginTop:15,
    marginRight:10,
    flexDirection:'row',
    justifyContent:'space-between',
  }
})
