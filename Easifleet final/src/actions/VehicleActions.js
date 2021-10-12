import axios from 'axios';
import * as constants from './actionTypes';

const Base_Url = 'https://calculator.easifleet.com.au/api.php?';
export const getMakes = () => {
    return async (dispatch) => {
        (async () => {
            var vehicle_makes=[];
            const makes = await axios.get(Base_Url+'endpoint=getMakes').then(res => {
                const response = res.data.makes;
                return Object.values(response);
              })
              vehicle_makes = makes.map((elements) => {
                return { value: elements.make_id, label: elements.name }
                    }
                )
            await dispatch({ type: constants.GET_MAKES, payload: vehicle_makes });
        })();
    };
};


export const getModels = (make_id) => {
    return async (dispatch) => {
        (async () => {
            var vehicle_models=[];
            const models = await axios.get(Base_Url+'endpoint=getModels&make_id='+make_id).then(res => {
                const response = res.data.models;
                return Object.values(response);
              })
                vehicle_models = models.map((elements) => {
                return { value: elements.model_id, label: elements.name }
                    }
                )
                await dispatch({ type: constants.GET_MODELS, payload: vehicle_models });
            })();
        };

};

export const getModelYears = (model_id) => {
    return async (dispatch) => {
        (async () => {
            var vehicle_model_years=[];
            const years = await axios.get(Base_Url+'endpoint=getModelYears&model_id='+model_id).then(res => {
                const response = res.data.model_years;
                    return Object.values(response);
                })
                vehicle_model_years = years.map((elements) => {
                    return { value: elements.model_year, label: elements.model_year}
                });
                vehicle_model_years.sort((a,b)=> (a.value > b.value) ? -1 : ((b.value > a.value) ? 1 : 0));
                await dispatch({ type: constants.GET_MODEL_YEARS, payload: vehicle_model_years });
            })();
        };

};

export const getBodyType = (model_year,model_id) => {
    return async (dispatch) => {
        (async () => {
            var vehicle_body_type=[];
            const body_type = await axios.get(Base_Url+'endpoint=getBodyTypes&model_id='+model_id+'&model_year='+model_year).then(res => {

                const response = res.data.body_types;
                return Object.values(response);
              })
              vehicle_body_type = body_type.map((elements) => {
                return { value: elements.body_type_id, label: elements.body_type}
                    }
                )
                await dispatch({ type: constants.GET_BODY_TYPE, payload: vehicle_body_type });
            })();
        };

};

export const getVariants = (body_type_id,model_year,model_id) => {
    return async (dispatch) => {
        (async () => {
            var vehicle_variants=[];
            const variants = await axios.get(Base_Url+'endpoint=getVariants&model_id='+model_id+'&model_year='+model_year+'&body_type_id='+body_type_id).then(res => {
                const response = res.data.variants;
                return Object.values(response);
              })
              vehicle_variants = variants.map((elements) => {
                return { value: elements.variant_id, label: elements.description}
                    }
                )
                await dispatch({ type: constants.GET_VARIANTS, payload: vehicle_variants });
            })();
        };

};

export const getVariant = (variant_id) => {
    return async (dispatch) => {
        (async () => {
            const variant = await axios.get(Base_Url+'endpoint=getVariant&variant_id='+variant_id).then(res => {
                return res.data.variant;
              })
                await dispatch({ type: constants.GET_VARIANT, payload: variant });
            })();
        };

};

export const getQuote = (lease_period,variant_id,approximate_price,annual_kilometres,annual_salary,state) => {
    return async (dispatch) => {
        (async () => {
            const reg_ctp_flag = lease_period < 24 ? 'no' : 'yes';
            const quote = await axios.get(Base_Url+'contract=MNL&endpoint=getQuote&variant_id='+variant_id+'&approximate_price='+approximate_price+'&state_registered='+state+'&annual_kilometres='+annual_kilometres+'&lease_period='+lease_period*12+'&annual_salary='+annual_salary+'&maintenance_service_flag=yes&insurance_flag=yes&reg_ctp_flag='+reg_ctp_flag+'&tyres_flag=no&fuel_flag=yes&dealer_delivery_net=0&optional_equipment_deselect_flag=yes').then(res => {
                return res.data.quote;
              })
                await dispatch({ type: constants.GET_QUOTE, payload: quote });
            })();
        };

};


export const sendQuoteEmail = (data,make,variant,vehicleModel,bodyType,salary,state,travelDistance,year,leaseTerm,referrer,car_photo,Cost_Per_Week,Savings_Over_Term,Savings_Per_Year,params) => {
    (async () => {
        axios.post(Base_Url+'handler=form',
        {
            sandbox:true,
            data,
            make,
            variant,
            vehicleModel,
            bodyType,
            salary,
            state,
            travelDistance,
            year,
            leaseTerm,
            referrer,
            car_photo,
            'Result: Cost Per Week':Cost_Per_Week,
            'Result: Savings Over Term':Savings_Over_Term,
            'Result: Savings Per Year':Savings_Per_Year,
            params
            },{ headers: { "Content-Type": "multipart/form-data" }})
            .then(res => {
                return true;
            })
            .catch(err=>{
                return false;
            })
        })();
}