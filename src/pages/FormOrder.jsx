import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FormikStepper, FormikStep, InputField } from "formik-stepper";

import DatePickerField from "../components/DatePickerField";
import CarCarousel from "../components/CarCarousel";
import Step6 from "../components/Step6";

import { mobile } from "../responsive";
import "../css/FormOrder.css";

const Image = styled.img`
  position: absolute;
  top: -6vh;
  right: -13.5%;
  width: 49%;
  ${mobile({
    top: '56vh',
    right: '-24%',
    width: '98%'
  })}
`;

function FormOrder(props) {
  const { id, img } = props;

  const history = useHistory();
  const location = useLocation();
  const baseURL = "http://188.40.180.193:5000/api";

  const name = useRef(null);
  const address = useRef(null);
  
  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function postData() {
    const postData = {
      name: name.current.value,
      address: address.current.value,
      productId: id.id
    };

    try {
      const res = await fetch(`${baseURL}/orders`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      
      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }
  
  const clearPostOutput = () => {
    setPostResult(null);
  }

  const onSubmit = async ( values, { setSubmitting } ) => {
    console.log(values);
    setSubmitting(false);
    history.push('/success');
  }  
  
  return (
    <div className="form">
      <FormikStepper
        onSubmit={onSubmit}
        initialValues={{
          gift: '',
          occasion: '',
          name: name.current?.value,
          tel: '',
          receiverName: '',
          receiverTel: '',
          receiverInstagram: '',
          city: 'Kyiv',
          address: address.current?.value,
          date: '',
          time: '',
          car: '',
        }}
        nextBtnLabel="Next"
        prevBtnLabel="Back"
        submitBtnLabel="Accept"
      >
        <FormikStep>
          <Image src={img} />
          <h2 className="h2 gift">Tell us what gift you want to give and in honor of what</h2>
          <InputField name="gift" className="input" placeholder="Write what you want to give" />
          <InputField name="occasion" className="input" placeholder="Write what reason" />
        </FormikStep>
        <FormikStep>
          <Image src={img} />
          <h2 className="h2">Leave your contacts so that we can contact you and clarify the details</h2>
          <InputField name="name" className="input" placeholder="Name" />
          <InputField name="tel" className="input" placeholder="+38 (___) ___ __ __" />
        </FormikStep>
        <FormikStep>
          <Image src={img} />
          <h2 className="h2">Leave the contacts of the person to whom you want to make a surprise gift!</h2>
          <InputField name="receiverName" className="input" placeholder="Name" />
          <InputField name="receiverTel" className="input" placeholder="+38 (___) ___ __ __" />
          <InputField name="receiverInstagram" className="input" placeholder="Instagram account" />
        </FormikStep>
        <FormikStep>
          <Image src={img} />
          <h2 className="h2 gift">Where and when do we need to bring your gift?</h2>
          <div className="w-100">
            <InputField name="city" className="input" />
            <InputField name="address" className="input" placeholder="Address" />
            <DatePickerField name="date" className="input" placeholderText="Choose a date" />
            <div className="time">
              <InputField name="time" className="input" placeholder="Choose the time" />
            </div>
          </div>
        </FormikStep>
        <FormikStep>
          <CarCarousel />
          <div className="car">
            <h2 className="h2 car-h2">Choose the car we will drive to bring you gift!</h2>
            <InputField name="car" className="input" placeholder="Car" />
          </div>
        </FormikStep>
        <FormikStep>
          <Image src={img} />
          <h2 className="h2">Your order:</h2>
          <Step6 />
        </FormikStep>
      </FormikStepper>
    </div>
  );
}

export default FormOrder;