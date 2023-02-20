import React, { useEffect } from "react";
import apply from "../assets/apply.svg";
import vector7 from "../assets/vector7.svg";
import vector8 from "../assets/Vector8.svg";
import flower from "../assets/flower.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Registration() {

  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    rollno: "",
    year:"",
    contact:"",
    
  });
  const [emailHelper, setEmailHelper] = React.useState("");
  const [phoneHelper, setPhoneHelper] = React.useState("");
  const [nameHelper, setNameHelper] = React.useState("");
  const [rollHelper, setRollHelper] = React.useState("");
  const [yearHelper, setYearHelper] = React.useState("");
  const { name, email, rollno, year, contact } = formData;
  const [pFocus,setPFocus] = React.useState(false);
  const [nFocus,setNFocus] = React.useState(false);
  const [eFocus,setEFocus] = React.useState(false);
  const [yFocus,setYFocus] = React.useState(false);
  const [rFocus,setRFocus] = React.useState(false);
  const [validEmail,setEValid] = React.useState(false);
  const [validName,setNValid] = React.useState(false);
  const [validRoll,setRValid] = React.useState(false);
  const [validYear,setYValid] = React.useState(false);
  const [validPhone,setPValid] = React.useState(false);
  const [isdisabled, setIsDisabled] = React.useState(true)
  const navigate = useNavigate();
  useEffect(()=>{
   
    if(validEmail && validName && validRoll && validPhone && validYear){
      console.log("true")
      setIsDisabled(false)
    }
    else{
      
      console.log( validName, validEmail, validRoll, validYear, validPhone)
      setIsDisabled(true)
    }
  },[validEmail,validRoll,validYear,validPhone,validName])


  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    let valid;

    switch (e.target.id) {
      case "email":    
        valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          e.target.value
        );
        
        if (!valid) {
          setEmailHelper("Invalid Email");
          setEValid(false)
        } else {
          setEmailHelper("");
          setEValid(true)         
        }
        break;
      case "name":
        valid = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/.test(
          e.target.value
          );
         
        if(e.target.value.length <3 || !valid){
          setNameHelper("Invalid Name");
          setNValid(false)
        }else{
          setNameHelper("");
          setNValid(true)
        }
        break;
      case "year":
        if(e.target.value >= 0 && e.target.value <= 5){
            setYearHelper("")
            setYValid(true)
        }
        else{
           setYearHelper("Invalid Year")
           setYValid(false)
        }
       break;
      case "rollno":
        if(e.target.value.length > 0){
          setRollHelper("")
          setRValid(true)
        }else{
          setRollHelper("Invalid Roll No.")
          setRValid(false)
        }
       break;

      case "contact":
        valid = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
          e.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone");
          setPValid(false)
        } else {
          setPhoneHelper("");
          setPValid(true)
          
        }
        break;
      default:
        break;
    }

      // if(validEmail && validName && validRoll && validPhone && validYear){
      //   console.log("true")
      //   setIsDisabled(false)
      // }
      // else{
      //   console.log("bi")
      //   console.log( validName, validEmail, validRoll, validYear, validPhone)
      //   setIsDisabled(true)
      // }
        
    
   
  }

  

  async function onSubmit(e){
    e.preventDefault();
    try {
      const formDataCopy = {
        ...formData,
      };
      const docRef = await addDoc(collection(db, "registration"), formDataCopy);
      
       //add this to success block
    
        toast.success("Successfully Registered");
        navigate(`/`);
     } catch (error) {
       //add this to error block
       toast.error("Something went wrong")
     }
     
   setFormData((prevState) => ({
    ...prevState,
    name: "",
    email: "",
    rollno: "",
    year:"",
    contact:"",
    
  }));
  

  }
  return (
    <section className="h-full w-screen flex relative items-center justify-center font-zilla">
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="h-full w-full  md:w-[65%] lg:w-[60%] xl:w-1/2 flex flex-col items-center justify-center gap-4">
            <form onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-4 my-4 w-full">
            <div className="w-[85%] sm:w-[65%] md:w-[75%] lg:w-[65%] flex flex-col items-center justify-center gap-1">
              <div className="w-full flex items-center justify-start p-2">
                <label className="xxs:text-sm sm:text-md flex justify-start items-start w-3/4 uppercase font-medium">
                  Name
                </label>
              </div>
              <div className="w-full flex items-center justify-center p-1">
                <input
                  type="text"
                  id="name"
                  placeholder="What we will call you?"
                  required
                  onFocus={()=>{
                    setPFocus(false)
                    setEFocus(false)
                    setNFocus(true)
                    setRFocus(false)
                    setYFocus(false)
                    
                  }}
                  className="border-[1px] border-black rounded-[4px] w-full h-12 p-2"
                  value={name}
                  onChange={onChange}
                />
              </div>
              {nFocus ? <div className="flex items-center justify-start text-xs text-red-400 w-full p-1"><p className="text-start w-full p-1 font-semibold">{nameHelper}</p></div> : null}
            </div>
            <div className="w-[85%] sm:w-[65%] md:w-[75%] lg:w-[65%] flex flex-col items-center justify-center gap-1">
              <div className="w-full flex items-center justify-start p-2">
                <label className="xxs:text-sm sm:text-md flex justify-start items-start w-3/4 uppercase font-medium">
                  Email
                </label>
              </div>
              <div className="w-full flex items-center justify-center p-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Where we can reach you?"
                  required
                  onFocus={()=>{
                    setPFocus(false)
                    setEFocus(true)
                    setNFocus(false)
                    setRFocus(false)
                    setYFocus(false)
                    
                  }}
                  className="border-[1px] border-black rounded-[4px] w-full h-12 p-2"
                  value={email}
                  onChange={onChange}
                />
              </div>
             {eFocus ? <div className="flex items-center justify-start text-xs text-red-400 w-full p-1"><p className="text-start w-full p-1 font-semibold">{emailHelper}</p></div> : null}
            </div>
            <div className="w-[85%] sm:w-[65%] md:w-[75%] lg:w-[65%] flex flex-col items-center justify-center gap-1">
              <div className="w-full flex items-center justify-start p-2">
                <label className="xxs:text-sm sm:text-md flex justify-start items-start w-3/4 uppercase font-medium">
                  Roll No.
                </label>
              </div>
              <div className="w-full flex items-center justify-center p-1">
                <input
                  type="text"
                  id="rollno"
                  placeholder="Let your uniqueness describe you!"
                  required
                  className="border-[1px] border-black rounded-[4px] w-full h-12 p-2"
                  value={rollno}
                  onFocus={()=>{
                    setPFocus(false)
                    setEFocus(false)
                    setNFocus(false)
                    setRFocus(true)
                    setYFocus(false)
                    
                  }}
                  onChange={onChange}
                />
              </div>
              {rFocus ? <div className="flex items-center justify-start text-xs text-red-400 w-full p-1"><p className="text-start w-full p-1 font-semibold">{rollHelper}</p></div> : null}
            </div>
            <div className="w-[85%] sm:w-[65%] md:w-[75%] lg:w-[65%] flex flex-col items-center justify-center gap-1">
              <div className="w-full flex items-center justify-start p-2">
                <label className="xxs:text-sm sm:text-md flex justify-start items-start w-3/4 uppercase font-medium">
                  Year of Study
                </label>
              </div>
              <div className="w-full flex items-center justify-center p-1">
                <input
                  type="number"
                  id="year"
                  placeholder="In which year you study?"
                  required
                  onFocus={()=>{
                    setPFocus(false)
                    setEFocus(false)
                    setNFocus(false)
                    setRFocus(false)
                    setYFocus(true)
                    
                  }}
                  className="border-[1px] border-black rounded-[4px] w-full h-12 p-2"
                  value={year}
                  onChange={onChange}
                />
              </div>
              {yFocus ? <div className="flex items-center justify-start text-xs text-red-400 w-full p-1"><p className="text-start w-full p-1 font-semibold">{yearHelper}</p></div> : null}
            </div>
            <div className="w-[85%] sm:w-[65%] md:w-[75%] lg:w-[65%] flex flex-col items-center justify-center gap-1">
              <div className="w-full flex items-center justify-start p-2">
                <label className="xxs:text-sm sm:text-md flex justify-start items-start w-3/4 uppercase font-medium">
                  Contact No.
                </label>
              </div>
              <div className="w-full flex items-center justify-center p-1">
                <input
                  type="number"
                  id="contact"
                  placeholder="Where we can contact you?"
                  required
                  onFocus={()=>{
                    setPFocus(true)
                    setEFocus(false)
                    setNFocus(false)
                    setRFocus(false)
                    setYFocus(false)
                    
                  }}
                  className="border-[1px] border-black rounded-[4px] w-full h-12 p-2"
                  value={contact}
                  onChange={onChange}
                />
              </div>
             {pFocus ?  <div className="flex items-center justify-start text-xs text-red-400 w-full p-1"><p className="text-start w-full p-1 font-semibold">{phoneHelper}</p></div> : null}
            </div>
            <div className="flex relative flex-row items-center justify-center gap-6 p-1 mb-1 font-zilla">
             
             <button disabled={isdisabled} type="submit" className={"flex items-center justify-center uppercase  w-[12rem] h-[2.6rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)] text-sm" +
            (isdisabled ? "cursor-not-allowed bg-slate-400" : " bg-[#FB393F] cursor-pointer")}>
               Submit
             </button>
             <div className="absolute bottom-[-1.8rem] right-[-2rem] rotate-[16deg] flex items-center justify-center z-[-1]">
               <img
                 src={apply}
                 alt="vector library"
                 className="w-[60%] h-[60%]"
               />
             </div>
           </div>
           </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center absolute  bottom-0 left-0 z-[-1]">
          <img src={vector7} alt="vector color art" className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" /> 
        </div>
      <div className="flex items-center justify-center absolute top-0 right-12 md:right-96 z-[-1]">
          <img src={vector8} alt="vector color art" className="w-64 h-64" /> 
        </div>
      <div className="hidden sm:flex items-center justify-center absolute  bottom-0 right-0 z-[-1]">
          <img src={flower} alt="vector color art" className="w-52 h-52 lg:w-56 lg:h-56" /> 
        </div>
    </section>
  );
}
