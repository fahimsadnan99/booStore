import *  as Yup from "yup"





export const initialValuesSignin = {
  name : '',
  email : '',
  password : '',
 
}


export const validationSchemaSignin = Yup.object({
  name : Yup.string().required(" Name is required"),
  email : Yup.string().email("invalid Email").required("Email is required"),
  password : Yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	

})




export const initialValues = {
    email : '',
    password : '',
   
  }
  
  
  export const validationSchema = Yup.object({
    
    email : Yup.string().email("invalid Email").required("Email is required"),
    password : Yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	
  
  })