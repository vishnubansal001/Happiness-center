import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc} from 'firebase/firestore';
import React, {useState} from 'react'
import { useEffect } from 'react'
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function useAuthStatus() {
  const [userUid, setUserUid] = React.useState("");
  const [userEmail,setUserEmail] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false)
  const navigate = useNavigate()
  
    const getEventName=()=>{
      const auth = getAuth()
      onAuthStateChanged(auth,async (user)=>{
       try {
         const docRef = doc(db, "admin", process.env.REACT_APP_DOCUMENT_ID);
         const docSnap = await getDoc(docRef);
         setUserUid(docSnap.data().userRef);
         setUserEmail(docSnap.data().email);
         setIsAdmin(docSnap.data().isAdmin);
         }
        catch (error) {
          setCheckingStatus(false)
          setLoggedIn(false)
          if(user){
            if(user.uid!==userUid){
               setTimeout(() => {toast.error("Not Authorised Signing Out in 5 sec!")},2000)
               
               setTimeout(() => {
                auth.signOut();
                navigate("/")
                toast.info("Signed Out")
               },5000)              
            }
          }     
        }})}

        
   
  const [loggedIn, setLoggedIn] = useState(false) 
  const [checkingStatus, setCheckingStatus] = useState(true) 

  useEffect(() => {
      getEventName();
      const auth = getAuth()
      if(userEmail !== "" || userUid !== "" ){
       
      onAuthStateChanged(auth, (user)=>{
       
        if(user && user.uid === userUid && user.email === userEmail && isAdmin === true){
            setLoggedIn(true)
            
        }
        setCheckingStatus(false)
      })}else{
        setLoggedIn(false)
      }
        
     
  },[userEmail,userUid,isAdmin])
  return {loggedIn, checkingStatus};
}








// export function useAuthStatus() {
//   const navigate = useNavigate()
//   const [loggedIn, setLoggedIn] = useState(false) 
//   const [checkingStatus, setCheckingStatus] = useState(true) 

//   useEffect(() => {
//       const auth = getAuth()
//       onAuthStateChanged(auth, (user)=>{
        
//         if(user && user.uid === process.env.REACT_APP_ADMIN_UID && user.email === process.env.REACT_APP_ADMIN_MAIL){
//             setLoggedIn(true)
//         }else{
//           toast.error("You are not authorized to access this page!")
//           navigate("/")
//         }
        
//         setCheckingStatus(false)
//       })
//   },[])
//   return {loggedIn, checkingStatus};
// }
