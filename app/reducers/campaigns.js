const initialState = {
  id:'',
  campaigns: [],
  detail_campaign:{},
  button_content_campaign:'',
  content_campaign:'',
  title_campaign:'',
  isLoading: false,
  isSaved: false,
  isError: false,
  isSuccess:false,
  uri:'',
  name:'',
  img_background_campaign:''
}


const campaignsReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ALL_CAMPAIGNS_PENDING":
      return {...state, isLoading: true}
    case "ALL_CAMPAIGNS_FULFILLED":
      return {...state, campaigns: action.payload.data,isLoading: false}
    case "CAMPAIGN_PENDING":
      return {...state, isLoading: true}
    case "CAMPAIGN_FULFILLED":
      return {...state, detail_campaign: action.payload.data,isLoading: false}
    case "CREATE_CAMPAIGNS_PENDING":
      return {...state, isLoading: true}
    case "CREATE_CAMPAIGNS_FULFILLED":
      return {...state, isSaved: true}
    case "CREATE_CAMPAIGNS_REJECTED":
      return {...state, isError: true}
    case "CREATE_TITLE_PENDING":
      return {...state,isLoading: true}
    case "CREATE_TITLE_FULFILLED":
      return {...state, isSaved:true}
    case "CREATE_TITLE_REJECTED":
      return{...state,isError:true}
    case "PUT_DETAIL_CAMPAIGNS_PENDING":
      return {...state, isLoading: true}
    case "PUT_DETAIL_CAMPAIGNS_FULFILLED":
      return {...state, isSaved: true}
    case "PUT_DETAIL_CAMPAIGNS_REJECTED":
      return {...state, isError: true}
    case "REMOVE_CAMPAIGNS_SUCCESS":
      return{...state,isSuccess:true}
    case "REMOVE_CAMPAIGNS_ERROR":
      return{...state,isError:true}
      break;
    case "PUT_DETAIL_THANK_PENDING":
      return {...state, isLoading: true}
    case "PUT_DETAIL_THANK_FULFILLED":
      return {...state, isSaved: true}
    case "PUT_DETAIL_THANK_REJECTED":
      return {...state, isError: true}
    default:
      return state
  }
}

export default campaignsReducer
