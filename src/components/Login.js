import Card from "../components/Card";
import Card2 from "../components/Card2";
import InputComponent from "../components/InputComponent";
import { ImLocation, ImUser } from "react-icons/im";
import { MdCastForEducation, MdEmail, MdPhone } from "react-icons/md";
import InputSelectCity from "../components/InputSelectCity";
import CourceInterestedInput from "../components/CourceInterestedInput";
import Brochure from "../images/clipboard.png";
import Fee from "../images/education-funds.png";
import Apply from "../images/apply.png";
import Counselling from "../images/financial-advisor.png";
import Scholership from "../images/degree.png";
import DeadLine from "../images/schedule.png";
import { Formik } from "formik";

import * as Yup from "yup";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({setShowModal}) => {
  const signUpSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Provide the Valid Name")
      .required("This field is required"),
    mobile: Yup.string()
      .matches(/^\d{3}-\d{3}-\d{4}$/)
      .required()
      .required("This field is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    city: Yup.string().required("This field is required"),
    cource: Yup.string().required("This field is required"),
  });

  const data = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  return (
    <div className="max-w-screen bg-white flex flex-col md:flex-row">
      <div className="md:w-1/3 w-[100%] bg-gray-100">
        <h1 className="mx-5 mt-1 mb-1 font-bold text-gray-500 leading-5 w-[60%]">
          How Collagedunia helps you in Adminssion
        </h1>
        <div className="grid grid-cols-12 mx-2">
          <Card image={Brochure} title={"Brochure Details"} />
          <Card image={Fee} title={"Check Detailed Fee"} />
          <Card image={Apply} title={"Shortlist & Apply"} />
          <Card image={Counselling} title={"24/7 Counselling"} />
          <Card image={Scholership} title={"Scholarship"} />
          <Card image={DeadLine} title={"Application DeadLine"} />
        </div>

        <h2 className="mx-5 text-gray-500 font-bold">What people say</h2>
        <div className="w-full mx-5 my-1">
          <Card2 />
        </div>
      </div>
      <div className="md:w-2/3 w-full bg-white">
        <div className="flex my-1 mx-5 items-center">
          <div className="w-[100px] h-[100px] shadow-md rounded-full">
            <img
              className="w-full h-full p-4 object-cover rounded-full"
              src="https://img.freepik.com/free-vector/flat-man-checking-giant-check-list-background_23-2148091572.jpg?w=740&t=st=1697101145~exp=1697101745~hmac=dce27f31ddb632e8886e7ec4b92a9f54ed694dca3c147581f4ed4af26190f094"
            />
          </div>
          <div className="mx-3">
            <h1 className="font-bold text-red-500 leading-7 text-[20px]">
              Register Now To Apply
            </h1>
            <h6 className="text-gray-500 font-bold leading-5 text-[18px] mt-2">
              Get details and latest updates
            </h6>
          </div>
        </div>
        <hr className="mx-5" />
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            mobile: "",
            city: "",
            cource: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values, { resetForm }) => {  
            axios.post(`http://localhost:5000/user/register`,values,{
                headers:{
                    "Content-Type":"Application/json"
                },
                withCredentials:true
            })
              .then(res => {
                toast.success("Application Submitted SuccessFully ....")
                setShowModal(false);
             })
             .catch(err => {
                toast.error(err?.message);
                setShowModal(false);
            }) 
            setTimeout(() => {
              resetForm();
            }, 2000);
          }}
          className="flex flex-column gap-15"
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldTouched,
            isValid,
            /* and other goodies */
          }) => (
            <>
              <div className="grid grid-cols-12 mx-2">
                <InputComponent
                  icon={<ImUser size={25} />}
                  name="Full Name"
                  fullName="fullName"
                  type={"text"}
                  onFocus={() => setFieldTouched("fullName")}
                  value={values.fullName}
                  onChange={handleChange("fullName")}
                  onBlur={() => setFieldTouched("fullName", "")}
                  touched={touched.fullName}
                  errors={errors.fullName}
                />
                <InputComponent
                  icon={<MdEmail size={25} />}
                  name="Email Address"
                  fullName="email"
                  type="email"
                  onFocus={() => setFieldTouched("email")}
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={() => setFieldTouched("email", "")}
                  touched={touched.email}
                  errors={errors.email}
                />
                <InputComponent
                  icon={<MdPhone size={25} />}
                  name="Mobile Number"
                  fullName="mobile"
                  type="phone"
                  onFocus={() => setFieldTouched("mobile")}
                  value={values.mobile}
                  onChange={handleChange("mobile")}
                  onBlur={() => setFieldTouched("mobile", "")}
                  touched={touched.mobile}
                  errors={errors.mobile}
                />
                <div className="col-span-12 md:col-span-6  p-2 bg-white m-3">
                  <div className="flex items-center gap-2 ">
                    <div className="shadow p-4">
                        <ImLocation size={25}/>
                    </div>
                    <FormControl className="w-full">
                      <InputLabel id="demo-simple-select-helper-label">
                        City
                      </InputLabel>
                      <Select
                        //  helperText={touched.city ? errors.city :"" }
                         error={touched.city && Boolean(errors.city)}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        name="city"
                        value={values.city}
                        label="City"
                        onFocus={() => setFieldTouched("city")}
                        onChange={handleChange("city","")}
                        onBlur={() => setFieldTouched("city")}
                        touched={touched.city}
                 
                        className="w-[95%] "
                      >
                       
                        {data?.map((index, val) => (
                          <MenuItem key={index} value={index}>{index}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <FormHelperText ><span className="text-red-500">{ (errors.city && touched.city) && errors.city}</span></FormHelperText>

                </div>

                <div className="col-span-12 md:col-span-6  p-2 bg-white mx-3">
                  <div className="flex items-center gap-2 ">
                    <div className="shadow p-4 ">
                        <MdCastForEducation size={25}/>
                    </div>
                    <FormControl className="w-full">
                      <InputLabel id="demo-simple-select-helper-label">
                        Course
                      </InputLabel>
                      <Select
                         helperText={touched.cource ? errors.cource :"" }
                         error={touched.cource && Boolean(errors.cource)}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        name="cource"
                        value={values.cource}
                        label="Cource"
                        onFocus={() => setFieldTouched("cource")}
                        onChange={handleChange("cource","")}
                        onBlur={() => setFieldTouched("cource")}
                        touched={touched.cource}
                 
                        className="w-[95%] "
                      >
                       
                        {data?.map((index, val) => (
                          <MenuItem key={index} value={index}>{index}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <FormHelperText ><span className="text-red-500">{ (errors.cource && touched.cource) && errors.cource}</span></FormHelperText>

                </div>
              </div>
              <p className="font-bold mx-5 text-gray-600 text-[12px]">
                By submitting this form, you accept and agree to our{" "}
                <span className="text-blue-700"> Terms of Use.</span>
              </p>

              <div className="mx-5 flex justify-between items-center mt-1">
                <div>
                  {" "}
                  <a href="/login" className="text-orange-400 outline-1">
                    Already Registered? Click Here To Login.
                  </a>
                </div>
                <button
                onClick={handleSubmit}
                disabled={!isValid}
                  className="text-white bg-orange-400 py-3 px-5 rounded"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
