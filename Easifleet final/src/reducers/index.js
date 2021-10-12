import { combineReducers } from 'redux';

import { vehicleReducer } from './vehicleReducer';

const rootReducer = combineReducers({
    vehicle: vehicleReducer,
});

export default rootReducer;
