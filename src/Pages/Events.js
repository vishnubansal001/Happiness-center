import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Spinner from "../component/Spinner";

export default function Events() {
  // const pastEvents = [
  //   {
  //     img: image
  //   }
  // ]
  const [images, setImages] = useState(null);
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      try {
        const pastEventRef = collection(db, "pastevents");
        const querySnap = await getDocs(pastEventRef);
        const images = [];
        querySnap.forEach((doc) => {
          return images.push({
            id: doc.id,
            data: doc.data().imgUrls[0],
          });
        });
        setImages(images);
        sessionStorage.setItem("pastEvents", JSON.stringify(images));
        setLoading(false);
      } catch (error) {
        toast.error("Something Went Wrong! Network Issue");
      }
    }
    if (images === null && sessionStorage.getItem("pastEvents") === null) {
      fetchListings();
    } else if (sessionStorage.getItem("pastEvents") !== null) {
      setImages(JSON.parse(sessionStorage.getItem("pastEvents")));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    async function fetchListings() {
      try {
        const eventRef = collection(db, "events");
        const querySnap = await getDocs(eventRef);
        const events = [];
        querySnap.forEach((doc) => {
          return events.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setEvents(events);
        sessionStorage.setItem("upcomingEvents", JSON.stringify(events));
        setLoading(false);
      } catch (error) {
        toast.error(error);
      }
    }
    if (events === null && sessionStorage.getItem("upcomingEvents") === null) {
      fetchListings();
    } else if (sessionStorage.getItem("upcomingEvents") !== null) {
      setEvents(JSON.parse(sessionStorage.getItem("upcomingEvents")));
      setLoading(false);
    }
  }, []);

  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <section className="flex items-center justify-center gap-2 flex-col">
        <div className="w-screen p-1 h-full my-6">
          <h1 className="font-monts font-bold flex items-center justify-start ml-4 sm:ml-6 md:ml-12 gap-2 text-xl md:text-4xl p-1 uppercase text-black">
            Upcoming<span className="text-[#EF1C22]"> Events</span>
          </h1>
          {loading ? (
            <Spinner />
          ) : events && events.length > 0 ? (
            events?.map((event, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-center gap-1 h-full w-full"
                >
                  <div className="flex flex-col gap-4 items-center justify-center h-full w-full md:w-[46%] p-6 mb-4  md:my-8">
                    <div className="flex items-center justify-center p-4 relative">
                      <img
                        src={event?.data.imgUrls[0]}
                        alt="images"
                        className="w-[90%] z-[10] h-[90%] sm:w-[50%] sm:h-[50%] md:w-[100%] md:h-[90%] lg:w-[75%] lg:h-[75%] xl:w-[60%] xl:h-[60%] object-scale-down"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start md:gap-6 w-full h-full md:w-[54%] justify-center mb-4  md:my-8">
                    <div className="flex items-center justify-center">
                      <h1 className="font-bold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-2 lg:ml-4 xl:ml-6 p-4 sm:p-6 md:p-2 lg:p-1 text-center md:text-start select-none">
                        {event?.data.eventName}
                      </h1>
                    </div>
                    <div className="flex items-center justify-center font-zilla">
                      <p className="lg:w-[92%] text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg  ml-0 md:ml-1 lg:ml-0  p-4 sm:p-6 md:p-2 lg:p-0 text-center md:text-start select-none">
                        {event?.data.eventDescription}
                      </p>
                    </div>
                    <Link to={`/events/${event.id}/registration`}>
                      {" "}
                      <div className="flex items-center justify-center bg-[#FB393F] w-[12rem] h-[2.6rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)]">
                        <p className="text-sm">Register Now!</p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-2xl py-8 md:text-4xl text-gray-700 text-center">
              No Upcoming Events!
            </h1>
          )}
        </div>
      </section>
      <section className="flex items-center justify-center gap-2 flex-col">
        <div className="w-screen p-1 h-full my-6">
          <h1 className="font-monts font-bold flex items-center justify-start ml-4 sm:ml-6 md:ml-12 gap-2 text-xl md:text-4xl p-1 uppercase text-black">
            Past<span className="text-[#EF1C22]"> Events</span>
          </h1>
          <div className="flex flex-row items-center justify-center w-full py-8 h-full">
            <div className="flex items-center justify-center w-screen p-2">
              <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                slidesPerView={5}
                spaceBetween={50}
                autoplay={{ delay: 2500 }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
              >
                {loading ? (
                  <Spinner />
                ) : images && images.length > 0 ? (
                  images?.map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="flex items-center w-full h-full justify-center flex-col bg-white  p-4">
                          <div className="w-full h-full p-1 items-center flex justify-center">
                            <div className="h-full">
                              <img
                                src={image.data}
                                alt="images"
                                className="h-[400px] w-[400px] object-fill rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                ) : (
                  <p>NO PAST EVENTS! COME BACK LATER</p>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
