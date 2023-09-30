import React, { useEffect, useState } from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import { initialValuesSignin, validationSchemaSignin } from "../util/ValidationSchema";
import ChildComponent from "../util/ErrorMsg";
import "../Style/Signup.css";
import { useNavigate } from "react-router-dom";


const page = () => {
  const [visibale, setIsVisibale] = useState(false);
  const router = useNavigate();

  const handleSubmit = (e) => {
  
    
    localStorage.setItem('myArray', JSON.stringify(e));
    router("/Sign_in")
  };

  useEffect(()=>{
    var retrievedObject = JSON.parse(localStorage.getItem("myArray"));
   if(retrievedObject?.isLogin){
    router("/")
   }
  },[])
  
  return (
    <div className="sm:mx-[10px] md:mx-[20px]  lg:mx-[100px] mt-4">
      <div className="mt-24">
        <p className="text-4xl text-center font-semibold">Signup</p>
        <div>
          <div className="text-center mx-auto mt-2">
            <button onClick={() => router("/Sign_in")} className=" text-purple-700 cursor-pointer">
              Already Have an Account?
            </button>
          </div>
          <Formik
            initialValues={initialValuesSignin}
            validationSchema={validationSchemaSignin}
            onSubmit={handleSubmit}
          >
            <Form className="p-3 pt-0 text-center space-y-4 my-7">
              <div className="form-group ">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2 mr-64">
                  Full Name*
                </p>
                <Field
                  name="name"
                  type="text"
                  className="form-control text-lg py-1 px-4 w-[350px]  rounded-md ring-1 ring-black/25 outline-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="name" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="form-group ">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2 mr-72">
                  Email*
                </p>
                <Field
                  name="email"
                  type="text"
                  className="form-control text-lg py-1 px-4 w-[350px]  rounded-md ring-1 ring-black/25 outline-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="email" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="form-group ">
                <p htmlFor="exampleInputEmail1" className="text-[#333] text-lg mb-2 mr-64">
                  Password*
                </p>
                <div className="passVisibale w-[350px] mx-auto">
                  <Field
                    name="password"
                    type={`${visibale ? "text" : "password"}`}
                    className="form-control text-lg py-1 px-4 w-[350px]  rounded-md ring-1 ring-black/25 outline-none"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <span onClick={() => setIsVisibale(!visibale)} className="view">
                    view
                  </span>
                </div>

                <ErrorMessage name="password" component={ChildComponent}></ErrorMessage>
              </div>

              <div className="text-center">
                <button className="bg-[#007E85] mx-auto text-white py-2 px-10 w-44 rounded-md  " type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default page;
