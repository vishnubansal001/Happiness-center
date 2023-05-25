import React, { useEffect, useState } from 'react'
import { collection,orderBy,
	query,
	limit,
	getDocs,
	startAfter, } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import Spinner from '../component/Spinner';

export default function Archive() {
  const params = useParams();
  const [images, setImages] = useState(null);
  const [loading,setLoading] = useState(true);
  const [lastFetchListing, setLastFetchListing] = useState(null);
  useEffect(()=>{
    
    async function fetchListings(){
      try{
        const archiveRef = collection(db, "archiveListing");
  const q = query(
    archiveRef,
    orderBy("timestamp", "desc"),
    limit(12)
    );
        const querySnap = await getDocs(q);
  const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const images = [];
        querySnap.forEach((doc) => {
          return images.push({
            id: doc.id,
            data: doc.data().imgUrls[0],
          });
        });
        setImages(images);
        sessionStorage.setItem("archiveListing",JSON.stringify(images))
        setLoading(false)
      }catch(error){
          toast.error(error.message)
      }
    }
    if(images===null&&sessionStorage.getItem("archiveListing")===null){
    fetchListings()}
    else if(sessionStorage.getItem("archiveListing")!==null){
      setImages(JSON.parse(sessionStorage.getItem("archiveListing")))
      setLoading(false)
    }
    
},[])


async function onFetchMoreListing(){
try {
  const archiveRef = collection(db, "archiveListing");
  const q = query(
    archiveRef,
    orderBy("timestamp", "desc"),
    startAfter(lastFetchListing),
    limit(10)
  );
  const querySnap = await getDocs(q);
  const lastVisible = querySnap.docs[querySnap.docs.length - 1];
  setLastFetchListing(lastVisible);
  const images = [];
  querySnap.forEach((doc) => {
    return images.push({
      id: doc.id,
      data: doc.data().imgUrls[0],
    });
  });
  setImages((prevState)=>[...prevState, ...images]);
  const arr = JSON.parse(sessionStorage.getItem('archiveListing'));
  const data = [...arr, ...images];
  sessionStorage.setItem("archiveListing",JSON.stringify(data));
  setLoading(false);
} catch (error) {
  toast.error("Could not fetch listing");
}
}

  return (
    <section className="w-screen h-full flex items-center justify-center flex-col">
      <h1 className='font-monts font-bold flex items-center justify-center gap-2  text-xl sm:text-4xl p-1 uppercase text-[#F6991A]'>Archives</h1>
      <div className="max-w-[90rem] w-full flex-col flex items-center justify-center  p-2" id="gallery">
		{loading ? (
          <Spinner/>
        ) : images && images.length > 0 ? (
          <>
            <div className="w-full mt-4 grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-2 p-2">
			{images.map((image) => (
                  <div key={image.id} className="flex grid-cols-1 p-2 items-center justify-center bg-white"><img style={{width:"19rem",height:"26rem"}} className="object-fill" src={image.data} alt="images"/></div>
                ))}
            </div>
            {lastFetchListing && (
              <div className="flex justify-center w-full items-center flex-row mt-3 mb-3">
                <button onClick={onFetchMoreListing} className="bg-[#1758E8] p-3 text-gray-100 border border-gray-300 hover:border-slate-600 rounded transition duration-150 ease-in-out text-xs">
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-xl text-center w-full mt-6 p-1 font-normal text-gray-700">
            There are no current Images.
          </p>
        )}
			
		</div>
    </section>
  )
}
