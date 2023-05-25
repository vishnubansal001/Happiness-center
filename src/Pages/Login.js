import React, { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'
const Login = () => {
  
  const [loggedIn, setLoggedIn] = useState(false) 
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  React.useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      if(user){
          setLoggedIn(true)
      }
    })
},[])
  function onLogout() {
    const auth = getAuth()
    auth.signOut();
    navigate("/");
  }
  async function onSubmit(e){
            e.preventDefault();
            try {
              const auth = getAuth();
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              if(userCredential.user){
                toast.success("Logged In Successfully");
                toast.info("Checking Authorization!")
                navigate("/")             
              }
              
            } catch (error) {
               toast.error("Bad user Credentials")
            }
  }

  return (
    loggedIn ? (   <section className="w-screen h-screen">
    <div className="pt-32">Logged In</div> 
    <p
                 onClick={onLogout}
                 className="text-white bg-blue-500 p-4 text-xs xs:text-sm hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
               >
                 Sign Out!
               </p>     
   </section>) : (
     <section className='w-screen h-full'>
      <div className="flex items-center justify-center gap-2 w-full h-full flex-col">
        <div className="flex justify-center my-12 w-full h-full items-center flex-wrap px-6 py-12 max-w-6xl mx-auto gap-8">
        <div className="flex justify-center my-12 w-full h-full items-center flex-wrap px-6 py-12 max-w-6xl mx-auto gap-8">  
          <div className="md:w-[67%] lg:w-[50%] flex justify-center items-center p-1">
            <img
              className="rounded-2xl w-full"
              src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              alt="key"
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] flex justify-center gap-2 flex-col p-2">
         <div className="flex items-center justify-start"><h1 className="text-3xl text-start font-bold text-black p-2">Sign In</h1></div>
            <form onSubmit={onSubmit} className="flex  flex-col items-center justify-center gap-6">
            <div className="relative w-full p-2"> <input
                className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded-sm transition ease-in-out"
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={onChange}
                required
              /></div>
              <div className="relative w-full p-2 flex items-center">
              <input
                className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded-sm transition ease-in-out"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={onChange}
                required
              />
              {showPassword ? (<AiFillEyeInvisible className="absolute right-4 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=>!prevState) }/>) : (<AiFillEye className="absolute right-4 text-xl cursor-pointer" onClick={()=>setShowPassword(prevState=>!prevState) }/>)}
              </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-7 py-3 text-sm sm:text-lg font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">Sign In</button>
            </form>
          </div>
          </div>
        </div>
        </div>
      </section>)
  )

}

export default Login