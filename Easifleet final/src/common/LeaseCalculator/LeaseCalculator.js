import React,{useEffect, useState} from 'react';
import {
  CardFlex,
    LeaseCalculatorWrappper,
} from './LeaseCalculatorStyled';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { PrimaryButton } from '../PrimaryButton';
import { Dropdown } from '../FormFields/Dropdown';
import { RangeSlider } from '../FormFields/RangeSlider';
import {LeaseCard}  from "../LeaseCard/LeaseCard";
import { Meter } from '../Meter/Meter';
import { OutlineButton } from '../OutlineButton';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
import { navigate, useLocation } from '@reach/router';
import { connect } from 'react-redux';
import {stateOptions, preSelectVariants} from "../../utils/helpers";
import { getMakes, getModels ,getModelYears, getBodyType,getVariants,getVariant, getQuote} from '../../actions/VehicleActions';
import { Formik, Form} from 'formik';
import { DropdownWrap } from '../FormFields/Dropdown/DropdownStyled';
import {BreakdownSavings} from '../BreakdownSavings';
import $ from 'jquery';



const LeaseCalculatorContainer = ({
  getMakes,
  makesOptions,
  getModels,
  modelOptions,
  getModelYears,
  getBodyType, 
  modelYearOptions, 
  bodyTypeOptions,
  getVariants,
  variantOptions,
  getVariant,
  getQuote,
  list_price_gross,
  saving_per_year,
  cost_per_fortnight,
  photo_url,
  quote,
}) => {
    const [details , setDetails] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', () => {
        var scroll = $(window).scrollTop();
        if (window.innerWidth <= 576) {
          if (scroll >= 850) {
            $(".sticky").addClass("fixedPos");
            }
            else{
                $(".sticky").removeClass("fixedPos");
            }
          }
          else {
            if (scroll >= 1125) {
              $(".sticky").addClass("fixedPos");
              }
              else{
                  $(".sticky").removeClass("fixedPos");
              }
          }
      });
      getMakes();
    },[getMakes]);

    const loc = useLocation();
    const car_price = loc.state ? loc.state.car_price : null;
    // if user enter price then use that price
    list_price_gross = car_price ? car_price : list_price_gross;
    const [Droplist, setDroplist] = useState(false);
    
    const responsive = {
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    
    const handleclick = () =>{
      setDroplist(!Droplist);
     
    }
    const initialValues = {
      vehicle_make:'',
      vehicle_model:'',
      vehicle_size:'',
      year:'',
      body_type:'',
      variants:'',
      salary:80000,
      travelDistance:15000,
      leaseTerm:4,
      state:'VIC',    
    };
    
    return (
      <LeaseCalculatorWrappper>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          
        >
          {(props) => {
                    const {values, setFieldValue} = props; 
                    
          return (
            <Form>
            <section className="Lease-section">
                <Row>
                  <Col className="text-left" sm={8} md={7} lg={7}>
                    <p className="Lease-paragraph">Finance your new car with Easi</p>
                    <h1 className="Lease-heading">Novated Lease Calculator</h1>
                    <div className="Vehicle-size">
                        <img alt="car" src={photo_url ? photo_url : "/Images/Lease-car.png"}/>
                        <p>Your Vehicle</p>
                        <Dropdown
                            label="Vehicle Size"
                            options={preSelectVariants}
                            name="variants"
                            innerLable
                            customHandle={getVariant}
                        />
                        <p onClick={handleclick} className="drop-list">More vehicle options
                        { Droplist ?
                          
                          <span><IoIosArrowUp/></span>:
                          <span><IoIosArrowDown/></span>}</p>
                        { Droplist &&
                          <>
                            <Dropdown
                            label="Vehicle Make"
                            options={makesOptions}
                            name="vehicle_make"
                            innerLable
                            customHandle = {(val)=>{
                              getModels(val);
                              setFieldValue('vehicle_model','');
                              setFieldValue('year','');
                              setFieldValue('body_type','');
                              setFieldValue('variants','');
                            }}
                            value={values.vehicle_make}
                            />
                            <Dropdown
                            label="Vehicle Model"
                            options={modelOptions}
                            name="vehicle_model"
                            innerLable
                            customHandle = {(val)=>{
                              getModelYears(val);
                              setFieldValue('year','');
                              setFieldValue('body_type','');
                              setFieldValue('variants','');
                            }}
                            noOptionsMessage="Please select vehicle make"
                            value={values.vehicle_model}
                            />
                            <Dropdown
                            label="Model Year"
                            options={modelYearOptions}
                            name="year"
                            innerLable
                            customHandle ={(model_year,vehicle_model=values.vehicle_model)=>{
                              getBodyType(model_year,vehicle_model);
                              setFieldValue('body_type','');
                              setFieldValue('variants','');
                            }}
                            noOptionsMessage="Please select vehicle model"
                            value={values.year}
                            />
                            <Dropdown
                            label="Body Type"
                            options={bodyTypeOptions}
                            name="body_type"
                            innerLable
                            customHandle ={(body_type,model_year= values.year,vehicle_model=values.vehicle_model)=>{
                              getVariants(body_type,model_year,vehicle_model);
                              setFieldValue('variants','');
                            }}
                            noOptionsMessage="Please select model year"
                            value={values.body_type}
                            />
                            <Dropdown
                            label="Variant"
                            options={variantOptions}
                            name="variants"
                            innerLable
                            customHandle = {getVariant}
                            noOptionsMessage="Please select body type"
                            value={values.variants}
                            />
                            
                          </>
                        }
                    </div>
                    <DropdownWrap>
                        <Dropdown
                          label="State"
                          options={stateOptions}
                          name="state"
                          value={values.state}
                          innerLable
                          fullWidth
                          />
                    </DropdownWrap>
                    <RangeSlider
                      min={20000}
                      headtext={"What is your annual salary?"}
                      current={values.salary}
                      step={5000}
                      max={300000}
                      before={'$'}
                      name='salary'
                      customHandle ={(annual_salary,lease_period=values.leaseTerm,variant_id=values.variants,approximate_price=list_price_gross,
                        annual_kilometres=values.travelDistance,state=values.state)=>variant_id && getQuote(lease_period,
                          variant_id,approximate_price,annual_kilometres,annual_salary,state)}
                    />
                    <RangeSlider
                      min={5000}
                      headtext={"How far will you travel in a year?"}
                      current={values.travelDistance}
                      step={5000}
                      max={40000}
                      after={"km"}
                      name='travelDistance'
                      customHandle ={(annual_kilometres,lease_period=values.leaseTerm,variant_id=values.variants,approximate_price=list_price_gross,
                        annual_salary=values.salary,state=values.state)=>variant_id && getQuote(lease_period,
                          variant_id,approximate_price,annual_kilometres,annual_salary,state)}
                    />
                    <RangeSlider
                      min={1}
                      headtext={"Preferred length of lease term?"}
                      current={values.leaseTerm}
                      step={1}
                      max={5}
                      after={"Years"}
                      name='leaseTerm'
                      customHandle ={(lease_period,variant_id=values.variants,approximate_price=list_price_gross,
                        annual_kilometres=values.travelDistance,annual_salary=values.salary,state=values.state)=>variant_id && getQuote(lease_period,
                          variant_id,approximate_price,annual_kilometres,annual_salary,state)}
                    />
                    
                  </Col>
                  
                  <Col sm={8} md={5} lg={5}>
                    <div className="Lease-images">
                    <img className="icon2-img" alt="icon" src="/Images/Vector.png"></img>
                    <div className="sticky">
                      <Meter 
                        numbers={Math.round(saving_per_year ?? 0)}
                      />

                    {  saving_per_year!=null &&
                      <div className="Lease-button">
                        <p>
                          Please note this figure is an estimate. For a more detailed breakdown please provide your details to receive a full quote.
                        </p>
                      
                        <PrimaryButton
                          type="button"
                          btnText={"Get Full Quote"}
                          md
                          handleOnclick={()=>navigate('/quote', { state: { leaseData:values,cost_per_fortnight,saving_per_year } })}
                          
                        />                                     
                      <div className="email-button">
                        <PrimaryButton
                          type="button"
                          btnText={`${details ? 'HIDE' : 'VIEW'} FULL SAVINGS BREAKDOWN`}
                          md
                          bg="black"
                          handleOnclick={()=>setDetails(!details)}
                          className="mt-5"
                        /> 
                      </div>
                      </div>
                      }
                    </div>

                      <img className="icon1-img" alt="icon" width="54" height="54" src="/Images/Group.png"></img>                 
                      <img className="icon3-img" alt="icons" src="/Images/Vector2.png"></img>  
                      <img className="icon4-img" alt="icons" width="54" height="54" src="/Images/Group.png"></img>
                      <img className="icon5-img" alt="icons" src="/Images/Vector3.png"></img>  
                   </div>
                  </Col>
                </Row>
                { quote && 
                <>
                <Row>
                  <Col sm={12} lg={8} xl={7}>
                      <h2 className="Include">What’s included {quote.pay_cycle_description} (EX_GST)?</h2>
                      {details && <BreakdownSavings
                        quote={quote}
                      />
                        }
                  </Col>
                </Row>
                      
                <Row>
                  <Col sm={12} lg={8} xl={6}>
                      <CardFlex>
                        <LeaseCard imgUrl="/Images/keys.png" price={quote.fin_per_pay_cycle_net } label="Lease Rental" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/fuel.svg" price={quote.f_per_pay_cycle_net } label="Fuel Card" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/registration.svg" price={quote.reg_per_pay_cycle_net } label="Registration" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/servicemaintenance.svg" price={quote.maint_per_pay_cycle_net } label="Maintaince" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/tyres.svg" price={quote.t_per_pay_cycle_net } label={"Tyres ("+quote.t_notes+")"} className="mr-3"/>
                        <LeaseCard imgUrl="/Images/roadsideassist.svg" price={quote.rsa_per_pay_cycle_net } label="NRMA Roadside Assistance" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/comprehensiveinsurance.svg" price={quote.ins_per_pay_cycle_net } label="Car Insurance" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/management-outline.svg" price={quote.admin_fee } label="Admin fee" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/icon-umbrella.svg" price={"Included"} label="Total Loss Assist" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/icon-lpi.svg" price={"Included"} label="Lease Protection Insurance" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/gap.svg" price={"Included"} label="Extended Warranty" className="mr-3"/>
                      </CardFlex>
                    
                      <Carousel responsive={responsive}
                      centerMode={true} 
                      infinite={true}
                      removeArrowOnDeviceType={"mobile"}
                      itemClass="carousel-item-padding-bottom-40-px"
                      containerClass="set-items"
                      >
                        <LeaseCard imgUrl="/Images/keys.png" price={quote.fin_per_pay_cycle_net } label="Lease Rental" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/fuel.svg" price={quote.f_per_pay_cycle_net } label="Fuel Card" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/registration.svg" price={quote.reg_per_pay_cycle_net } label="Registration" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/servicemaintenance.svg" price={quote.maint_per_pay_cycle_net } label="Maintaince" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/tyres.svg" price={quote.t_per_pay_cycle_net } label={"Tyres ("+quote.t_notes+")"} className="mr-3"/>
                        <LeaseCard imgUrl="/Images/roadsideassist.svg" price={quote.rsa_per_pay_cycle_net } label="NRMA Roadside Assistance" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/comprehensiveinsurance.svg" price={quote.ins_per_pay_cycle_net } label="Car Insurance" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/management-outline.svg" price={quote.admin_fee } label="Admin fee" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/icon-umbrella.svg" price={"Included"} label="Total Loss Assist" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/icon-lpi.svg" price={"Included"} label="Lease Protection Insurance" className="mr-3"/>
                        <LeaseCard imgUrl="/Images/gap.svg" price={"Included"} label="Extended Warranty" className="mr-3"/>
                      </Carousel>
                    <OutlineButton 
                      className="mt-5 px-3"
                      btnText="View Full Quote PDF"
                      danger
                    />
                  </Col>
                </Row>
                </>
                  
                }
            </section>
            </Form>
              );
            }}
          </Formik>
          
      </LeaseCalculatorWrappper>
    
    );
};
const mapStateToProps = (state) => {
  return {
      makesOptions: state.vehicle.make_options,
      modelOptions: state.vehicle.model_options,
      modelYearOptions: state.vehicle.model_years_options,
      bodyTypeOptions: state.vehicle.body_type_options,
      variantOptions: state.vehicle.variant_options,
      list_price_gross: state.vehicle.variant.list_price_gross,
      saving_per_year :state.vehicle.quote ? state.vehicle.quote.advantage_per_year : null,
      cost_per_fortnight :state.vehicle.quote ? state.vehicle.quote.after_tax_effect_per_pay_cycle : null,
      photo_url: state.vehicle.variant ? state.vehicle.variant.photo : null,
      quote : state.vehicle.quote

  };
 };
  
 export const LeaseCalculator = connect(mapStateToProps, { getMakes,getModels, getModelYears, getBodyType, getVariants,getVariant, getQuote})(LeaseCalculatorContainer);