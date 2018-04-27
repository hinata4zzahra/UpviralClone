import {StackNavigator} from 'react-navigation'
import React from 'react'
import {Image,Text, Button} from 'react-native'
import LoginScreen from '../screens/LoginScreen'
import Campaigns from '../screens/Campaigns'
import CampaignCreate from '../screens/CampaignCreate'
import EditCampaign from '../screens/EditCampaign'
import Register from '../screens/Register'
import CreatePassword from '../screens/CreatePassword'
import LeadPage from '../screens/LeadPage'
import LeadPageSuccess from '../screens/LeadPageSuccess'
import Thank from '../screens/Thank'
import DetailTitle from '../screens/DetailTitle'
import LeadTitleSuccess from '../screens/LeadTitleSuccess'
import Reward from '../screens/Reward'

const RootNavigator = StackNavigator({
  Campaigns: {

    screen: Campaigns,
    navigationOptions : {
        headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}>LIST CAMPAIGNS</Text> ,
        headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
        headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100,justifyContent:'flex-start'}} />,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },

  CampaignCreate: {
    screen: CampaignCreate,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}>CREATE CAMPAIGNS</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
  EditCampaign: {
    screen: EditCampaign,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}>LEAD PAGE</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  CreatePassword: {
    screen: CreatePassword,
    navigationOptions: {
      header: null
    }
  },
  LeadPage: {
    screen: LeadPage,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}>LEADPAGE DETAIL</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
  LeadPageSuccess: {
    screen: LeadPageSuccess,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}>LEADPAGE PREVIEW</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
  Thank: {
    screen: Thank,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}> THANK PAGE</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
  DetailTitle: {
    screen: DetailTitle,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}> THANK YOU PAGE TITLE</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
  LeadTitleSuccess: {
    screen: LeadTitleSuccess,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}> Lead Title Success</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
  Reward: {
    screen: Reward,
    navigationOptions : {
      headerTitle:<Text style={{color:"white",marginLeft:55,fontSize:20}}> REWARD PAGE</Text> ,
      headerStyle:{height:100,width:500,backgroundColor:'#0e646d'},
      headerLeft: <Image source={require('../img/logo.png')} style={{ width: 100, height: 100}} />,
    }
  },
})

export default RootNavigator;
