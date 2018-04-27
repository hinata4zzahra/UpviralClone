// import axios from 'axios'
//
// export function allcampaigns(){
//   return {
//     type: "ALL_CAMPAIGNS",
//     payload: axios.get('http://rest.learncode.academy/api/utari/campaigns')
//   }
// }
//
// export function getCampaign(){
//   return {}
// }
//
// export function createcampaign(data){
//   return {
//     type: "CREATE_CAMPAIGN",
//     payload: axios.post('http://rest.learncode.academy/api/utari/campaigns', data)
//   }
// }
import axios from 'axios'

export function allcampaigns(){
  return {
    type: "ALL_CAMPAIGNS",
    payload: axios.get('https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaigns?pageSize=100')

  }
}

export function campaign(objectId){
  return {
    type: "CAMPAIGN",
    payload: axios.get('https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaigns/' + objectId)

  }
}




export function createcampaign(data){
  return{

    type:"CREATE_CAMPAIGNS",
    payload: axios({
      method: 'post',
      url: 'https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaigns',
      headers:{
        'Content-Type': 'application/json'

      },
      data: data
    })
    }

  }

  export function createTitle(data,id){
    return{
      type: "CREATE_TITLE",
      payload:axios({
        method:'put',
        url: 'https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaigns/'+id,
        headers:{
          'Content-Type':'application/json'
        },
        data: data
      })
    }
  }

  export function saveCampaign(data,objectId){

    return{

      type: "PUT_DETAIL_CAMPAIGN",
      payload:axios({
        method:"put",
        url: "https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaigns/"+objectId,
        headers:{
          "Content-Type":"application/json"
        },
        data: data
      })
    }
  }

  export function saveThank(data,objectId){

    return{

      type: "PUT_DETAIL_THANK",
      payload:axios({
        method:"put",
        url: "https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaigns/"+objectId,
        headers:{
          "Content-Type":"application/json"
        },
        data: data
      })
    }
  }

  export function removecampaign(Id){
    return{
      type: "REMOVE_CAMPAIGNS",
      payload: axios({
        method:'delete',
        url: 'https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaigns/' +Id,
        headers:{
          'Content-Type': 'application/json'
        },
      })
    }
  }
