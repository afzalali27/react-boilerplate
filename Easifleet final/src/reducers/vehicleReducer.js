import * as constants from '../actions/actionTypes';

const INITIAL_PROFILE_STATE = {
    make_options:[],
    model_options:[],
    model_years_options:[],
    body_type_options:[],
    variant_options:[],
    variant:[],
    quote:null,
};

export const vehicleReducer = (state = INITIAL_PROFILE_STATE, action) => {

    switch (action.type) {
        case constants.GET_MAKES:
           
            return {
                ...state,
                make_options:action.payload
                
            };
        case constants.GET_MODELS:
        
            return {
                ...state,
                model_options:action.payload
                
            };
        case constants.GET_MODEL_YEARS:

            return {
                ...state,
                model_years_options:action.payload
                
            };
        case constants.GET_BODY_TYPE:

            return {
                ...state,
                body_type_options:action.payload
                
            };
        case constants.GET_VARIANTS:

            return {
                ...state,
                variant_options:action.payload
                
            };
        case constants.GET_VARIANT:

            return {
                ...state,
                variant:action.payload
                
            };
        case constants.GET_QUOTE:

            return {
                ...state,
                quote:action.payload
                
            };
        default:
            return state;
    }
};
