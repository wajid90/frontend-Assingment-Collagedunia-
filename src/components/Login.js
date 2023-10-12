import Card from '../components/Card';
import Card2 from '../components/Card2';
import InputComponent from '../components/InputComponent';
import { ImUser } from 'react-icons/im';
import { MdEmail, MdPhone } from 'react-icons/md';
import InputSelectCity from '../components/InputSelectCity';
import CourceInterestedInput from '../components/CourceInterestedInput';
import Brochure from "../images/clipboard.png";
import Fee from "../images/education-funds.png";
import Apply from "../images/apply.png";
import Counselling from "../images/financial-advisor.png";
import Scholership from "../images/degree.png";
import DeadLine from "../images/schedule.png";

const Login = () => {
  return (
    <div className="max-w-screen bg-white flex flex-col md:flex-row">
      <div className='md:w-1/3 w-[100%] bg-gray-100'>
        <h1 className='mx-5 mt-3 mb-1 font-bold text-gray-500 leading-5 w-[60%]'>How Collagedunia helps you in Adminssion</h1>
        <div className='grid grid-cols-12 mx-2'>
          <Card image={Brochure} title={"Brochure Details"}/>
          <Card image={Fee} title={"Check Detailed Fee"}/> 
          <Card image={Apply} title={"Shortlist & Apply"}/>
          <Card image={Counselling} title={"24/7 Counselling"}/> 
          <Card image={Scholership} title={"Scholarship"}/>
          <Card image={DeadLine} title={"Application DeadLine"}/>  
        </div>

        <h2 className='mx-5 text-gray-500 font-bold'>What people say</h2>
       <div className='w-full mx-5 my-1'>
           <Card2/>
             
       </div>
      </div>
       <div className='md:w-2/3 w-full bg-white'>
         <div className='flex my-5 mx-5 items-center'>
              <div className='w-[100px] h-[100px] shadow-md rounded-full'>
                <img className='w-full h-full p-4 object-cover rounded-full' src="https://img.freepik.com/free-vector/flat-man-checking-giant-check-list-background_23-2148091572.jpg?w=740&t=st=1697101145~exp=1697101745~hmac=dce27f31ddb632e8886e7ec4b92a9f54ed694dca3c147581f4ed4af26190f094"/>
              </div>
              <div className='mx-3'>
                 <h1 className='font-bold text-red-500 leading-7 text-[20px]'>Register Now To Apply</h1>
                 <h6 className='text-gray-500 font-bold leading-5 text-[18px] mt-2'>Get details and latest updates</h6>
              </div>
         </div>
         <hr className='mx-5'/>
         <div className='grid grid-cols-12 mx-2'>
         <InputComponent icon={<ImUser/>} name="Full Name" type={"text"}/>
         <InputComponent icon={<MdEmail/>}  name="Email Address" type="email"/>
         <InputComponent icon={<MdPhone/>}  name="Mobile Number" type="phone"/>
        <InputSelectCity/>
        <CourceInterestedInput/>
         </div>
         <p className='font-bold mx-5 text-gray-600 text-[12px]'>By submitting this form, you accept and agree to our <span className='text-blue-700'> Terms of Use.</span></p>

        <div className='mx-5 flex justify-between items-center mt-3'>
           <div> <a href="/login" className='text-orange-400 outline-1'>Already Registered? Click Here To Login.</a></div>
            <button className='text-white bg-orange-400 py-3 px-5 rounded' type="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login