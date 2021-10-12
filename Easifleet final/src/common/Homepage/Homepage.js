import React, { useState } from 'react';
import { navigate } from '@reach/router';
import {
  HomepageWrappper
} from './HomepageStyled';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { OutlineButton } from '../OutlineButton';
import { PrimaryButton } from '../PrimaryButton';
import { TextInput } from '../FormFields/TextInput';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

export const Homepage = ({menuCollapse}) => {
    const [usedCar, setUsedCar] = useState(false);
  
    const handleSubmit = (values)=>{
      navigate('/lease-calculator', { state: (usedCar && values && values.car_price) ? { car_price:values.car_price} : null});
    }
    return (
      <HomepageWrappper  menuCollapse={menuCollapse}>
            <section className="Homepage-section">
                <Row>
                  <Col className="text-left" sm={6} md={6} lg={5}>
                    <div>
                        <h1 className="home-heading">Finance your car with Easi,<span className= "heading-color"> it’s Easi!</span></h1>
                        <h4 className="home-heading2"> Calculate how much a novated lease could save you each year. </h4>
                        <p>What are you looking for?</p>
                        <OutlineButton
                          handleOnclick = {()=>setUsedCar(false)}
                          className="mr-3"
                          btnText= "A New Car"
                          isActive = {!usedCar}
                          round
                          sm
                          
                        />
                        <OutlineButton
                          handleOnclick = {()=>setUsedCar(true)}
                          isActive = {usedCar}
                          btnText= "A Used Car"
                          round
                          sm
                        />
                        {usedCar &&
                          <p className="p-color">To speed up the process, visit carsales.com and enter the Approximate Price of your vehicle (optional)</p>}

                      <Formik
                        initialValues={{'car_price':0}}
                        onSubmit={handleSubmit}
                        validationSchema={Yup.object({
                          car_price: Yup.number('Invalid price').typeError('invalid price')
                        })}
                      >
                        {(props)=>{
                          const {handleChange } = props;
                          return (
                            <Form>
                              {usedCar && 
                              <TextInput
                                name='car_price'
                                placeholder="Enter approximate price"
                                handleChange={handleChange}
                              />}
                              <PrimaryButton
                                margin="45px"
                                btnText= "Get Started"
                                type="submit"
                                lg
                              />
                          </Form>
                          );
                        }}
                      </Formik>
                    </div>
                  </Col>
                  
                  <Col sm={6}  md={6} lg={{offset:1 , span:6}}>
                   <div className="Homepage-images">
                      <img className="icon1-img" width="54" height="54" alt="icons" src="/Images/Group.png"></img>
                      <img className="icon2-img" alt="icons" src="/Images/Vector.png"></img>
                      <img className="icon3-img" alt="icons" src="/Images/Vector2.png"></img>  
                      <img className="icon4-img" alt="icons" width="54" height="54" src="/Images/Group.png"></img>
                   </div>
                  </Col>
                </Row>
            </section>
          <div className="bottom-banner">
            <img className="img-fluid" alt="b-banner" src= "/Images/easi-scene.png"></img>
          </div>
          
         
      </HomepageWrappper>
    
    );
};
