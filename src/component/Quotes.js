import React from 'react'
import axios from 'axios'

export default function Quotes() {
    const [result,setresult] = React.useState("");
    React.useEffect(()=>{
             const fetchData = async () => {
                const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
                    headers: {
                        "X-Api-Key": process.env.REACT_APP_API_KEY,
                        "Content-type": "application/json; charset=UTF-8"
                    }
                 })
                const newData = await response.data[0].quote;
                console.log(response.data)
                setresult(newData);
              };
            fetchData();       
    },[])
  return (
    <React.Fragment>
        
    <div className="w-full h-[36%] flex items-center justify-center text-center text-md sm:text-lg md:text-xl font-zilla p-4">
        {result}</div>
    </React.Fragment>
  )
}
