import axios from 'axios'

export function allTemplate(){
  return {
    type: "ALL_TEMPLATE",
    payload: axios.get('https://api.backendless.com/A6110560-CDDC-FAFA-FF85-39A2C5B42B00/67F86092-AD36-2C4D-FFF6-C252CFA86800/data/campaign_template')

  }
}
