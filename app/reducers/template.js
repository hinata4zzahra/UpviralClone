const initialState = {
  isLoading: false,
  campaign_template:[]
}

const templateReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ALL_TEMPLATE_PENDING":
      return {...state, isLoading: true}
    case "ALL_TEMPLATE_FULFILLED":
      return {...state, campaign_template: action.payload.data,isLoading: false}
    default:
      return state
  }
}


export default templateReducer
