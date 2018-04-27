import { combineReducers } from 'redux';

import nav from './nav';
import campaignsReducer from './campaigns';
import templateReducer from './template';

const appReducer = combineReducers({
  nav: nav,
  campaignsReducer: campaignsReducer,
  templateReducer: templateReducer
});

export default appReducer;
