import React,{useState} from 'react';
import {
    QuoteWrappper
} from './QuoteStyled';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { PrimaryButton } from '../PrimaryButton';
import { Dropdown } from '../FormFields/Dropdown';
import { OutlineButton } from '../OutlineButton';
import { TextInput } from '../FormFields/TextInput';
import { Formik, Form} from 'formik';
import {sendQuoteEmail} from '../../actions/VehicleActions';
import { useLocation } from '@reach/router';
import {stateOptions,timelineOptions} from "../../utils/helpers";
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { BackButton } from '../BackButton';
export const QuoteContainer = ({makesOptions,modelOptions,bodyTypeOptions,variantOptions}) => {
    const loc = useLocation();
    const data = loc.state ? loc.state.leaseData : {};
    const cost_per_fortnight = loc.state ? loc.state.cost_per_fortnight : {};
    const saving_per_year = loc.state ? loc.state.saving_per_year : {};
    
    const [leasebefore, setleasebefore] = useState(false);
    const initialValues = {
      firstname:'',
      lastname:'',
      email:'',
      employer:'',
      state:'',
      timeline:'',
    };
    const validationSchema = Yup.object({
      firstname: Yup.string().required('This field is required'),
      lastname: Yup.string().required('This field is required'),
      email: Yup.string().email().required('This field is required'),
      employer: Yup.string().required('This field is required'),
      state: Yup.string().required('This field is required'),
      timeline: Yup.string().required('This field is required')
    });

    const handleSubmit =(values,{ setSubmitting }) =>{
      if(JSON.stringify(data) !== JSON.stringify({})){
        var make = getMake(data,makesOptions);
        var variant = getVariant(data,variantOptions);
        var vehicleModel = getModel(data,modelOptions);
        var bodyType = getBody(data,bodyTypeOptions);
      }
      var referrer ="";
      var car_photo="";
      var Cost_Per_Week=cost_per_fortnight;
      var Savings_Over_Term=saving_per_year;
      var Savings_Per_Year=saving_per_year;
      var params={"":""};
      var state= data.state ?? values.state;
      sendQuoteEmail(values,make,variant,vehicleModel,bodyType,data.salary,state,
        data.travelDistance,data.year,data.leaseTerm,referrer,car_photo,Cost_Per_Week,Savings_Over_Term,Savings_Per_Year,params);
      toast.success("Email has been sent.");
      setSubmitting(false);
    }
    

    const getMake=(data,makesOptions)=> {
      var makelabel = makesOptions.find(make => make.value === data.vehicle_make);
      return makelabel.label;
    }
    const getVariant=(data,variantOptions)=> {
      var variantlabel = variantOptions.find(variant => variant.value===data.variants);
      return variantlabel.label;
    }
    const getModel=(data, modelOptions)=> {
      var modellabel = modelOptions.find(model => model.value===data.vehicle_model);
      return modellabel.label;
    }    
    const getBody=(data, bodyTypeOptions)=> {
      var bodylabel = bodyTypeOptions.find(bodyType => bodyType.value===data.body_type);
      return bodylabel.label;
    }
   

    return (
      <QuoteWrappper>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema = {validationSchema}
        >
        {(props) => { 

              const { isSubmitting,handleChange } = props;
          return (
              <Form>
              <section className="quote-section">
                  
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <BackButton className="backbutton" />
                      <p className="quote-paragraph">Finance your new car with Easi</p>
                      <h1 className="quote-heading">Get a full quote</h1>
                      <p>Please answer a few more questions so we can send you a detailed quote.</p>
                      <div className="form-style">                       
                          <TextInput
                            fullWidth
                            placeholder="First Name"
                            name="firstname"
                            handleChange={handleChange}
                          />
                          <TextInput
                            fullWidth
                            name="lastname"
                            placeholder="Last Name"
                            handleChange={handleChange}

                          />
                          <TextInput
                            fullWidth
                            placeholder="Email"
                            name="email"
                            handleChange={handleChange}
                          />
                          <TextInput
                            fullWidth
                            placeholder="Employer Name"
                            name="employer"
                            handleChange={handleChange}

                          />
                          <Dropdown
                          label="State"
                          options={stateOptions}
                          name="state"
                          innerLable
                          placeholder="Select State"
                          fullWidth
                          />
                          <Dropdown
                          label="Will Buy"
                          options={timelineOptions}
                          name="timeline"
                          innerLable
                          placeholder="When are you looking to buy?"
                          fullWidth
                          />
                      </div>
      
                      <div className="quote-button">
                          <p>
                          Have you had a novated lease before?
                          </p>
                        <OutlineButton
                          handleOnclick = {()=>setleasebefore(false)}
                          className="mr-3"
                          btnText= "Yes"
                          isActive = {!leasebefore}
                          type="button"
                          round
                          sm
                        />
                        <OutlineButton
                          handleOnclick = {()=>setleasebefore(true)}
                          isActive = {leasebefore}
                          btnText= "No"
                          type = "button"
                          round
                          sm
                          
                        />    
                        <div className="btn-style">
                          <PrimaryButton
                              type="submit" 
                              isSubmitting={isSubmitting}
                              btnText={"Request Quote"}
                              fullWidth
                            />  
                      </div>                             
                      </div>
                      
                    </Col>
                  </Row>
              </section>
            </Form>
              );
          }}
        </Formik>
      </QuoteWrappper>
    
    );
};

const mapStateToProps = (state) => {
  return {
      makesOptions: state.vehicle.make_options,
      modelOptions: state.vehicle.model_options,
      bodyTypeOptions: state.vehicle.body_type_options,
      variantOptions: state.vehicle.variant_options,

  };
 };
  
 export const Quote = connect(mapStateToProps)(QuoteContainer);
