import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import ReactInputVerificationCode from "react-input-verification-code";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Formik, Form as FormikForm, Field } from "formik";
import html2canvas from "html2canvas";

import { mobile } from "../responsive";

import "../css/Form.css";

const Container = styled.div`
  position: relative;
  text-align: center;
  ${mobile({
    padding: '0 3%'
  })}
`;

const Form = () => {
  const history = useHistory();
  const containerRef = useRef();
  const filterRef = useRef();
  const canvasRef = useRef();
  const navbarRef = useRef();
  const aminationRefs = [
    null,
    useRef(),
    useRef(),
    useRef(),
    null,
  ];

  const removeCanvas = () => {
    canvasRef.current.remove();
  };

  useEffect(() => {
    html2canvas(document.body, { allowTaint: true }).then(function(canvas) {
      const cb = (idx = 0, x, y, back) => {
        if (x > rects[idx].right) {
          x = 0;
          ++idx;
        }
        if (rects[idx]) {
          const step = rects[idx].height / 3;
          if (!x) {
              x = rects[idx].left - 10;
              y = rects[idx].top - 21;
          } else if (y > rects[idx].bottom) {
            back = true;
          } else if (y < rects[idx].top - 20) {
            back = false;
          }
          if (back) {
            x += 40 * step / (rects[idx].height + 20);
            y -= step;
          } else {
            y += step;
          }
          context.beginPath();
          context.globalCompositeOperation = 'destination-out';
          context.arc(x, y, 40, 0, Math.PI * 2, false);
          context.fill();
          requestAnimationFrame(function() {
            cb(idx, x, y, back);
          });
        } else {
          containerRef.current.className += ' front';
        }
      };

      if (canvasRef.current) {
        return;
      }
      canvas.className = 'canvas';
      document.body.appendChild(canvas);
      canvasRef.current = canvas;
      
      const context = canvasRef.current.getContext('2d');
      const rects = aminationRefs.map((value, idx) => {
        return (value || navbarRef.current[idx ? 'menu' : 'logo']).current.getBoundingClientRect();
      });

      filterRef.current.className += ' hidden';
      
      setTimeout(() => {
        requestAnimationFrame(function() {
          cb();
        })}, 400);
      });
  });

  return (
    <>
      <Container ref={containerRef}>
        <Navbar onItemClicked={removeCanvas} ref={navbarRef} />
        <h1 ref={aminationRefs[1]} className="h1">White Angels</h1>
        <div>
          <div ref={aminationRefs[2]} className="code">
            <label className="label">Do you have a signal?</label>
            <ReactInputVerificationCode
              onCompleted={(value) => {
                if (value === '9911') {
                  removeCanvas();
                  return history.push("/home");
                }
              }}
              placeholder=""
            />
          </div>
        </div>
        <Formik initialValues={{ email: '' }}>
          <FormikForm ref={aminationRefs[3]} className="login-form">
            <label htmlFor="email" className="label">Enter your email to receive a signal</label>
            <Field type="email" name="email" id="email" className="input email" />
            <button type="submit" className="btn btn-primary btn-submit">Subscribe</button>
          </FormikForm>
        </Formik>
      </Container>
      <div ref={filterRef} className="canvas filter"></div>
    </>
  );
}

export default Form;
