import React from "react";
import hero from "../assets/hero.svg";
import arrow from "../assets/arrow.svg";
import library from "../assets/library.svg";
import meditation from "../assets/meditation.svg";
import counseling from "../assets/counseling.svg";
import speaker from "../assets/speaker.svg";
import library2 from "../assets/library2.svg";
import meditation2 from "../assets/meditation2.svg";
import counseling2 from "../assets/counseling2.svg";
import speaker2 from "../assets/speaker2.svg";
import apply from "../assets/apply.svg";
import manav from "../assets/manav.jpg";
import line from "../assets/line.svg";
import event from "../assets/event.svg";
import cep from "../assets/cep.svg";
import frame from "../assets/frame.svg";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import Quotes from "../component/Quotes";
import mobile from "../assets/mobile.svg";
import achievements from "../assets/achivements.svg";
import achievements2 from "../assets/achivements2.svg";
import { Link, NavLink } from "react-router-dom";
import vector1 from "../assets/Vector1.svg";
import vector2 from "../assets/Vector2.svg";
import vector3 from "../assets/Vector3.svg";
import vector4 from "../assets/Vector4.svg";
import vector5 from "../assets/Vector5.svg";
import vector6 from "../assets/Vector6.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Spinner from "../component/Spinner";
import { useRef } from "react";
import Typed from "typed.js";
import harshit from "../assets/harshit.jpg";
import garvit from "../assets/garvit.jpg";
import vanshika from "../assets/vanshika.jpg";
import yuvika from "../assets/yuvika.jpg";
import himani from "../assets/himani.jpg";
import gunjan from "../assets/gunjan.jpg";
import rashim from "../assets/rashim.jpg";
import amandeep from "../assets/amandeep.jpg";
import anupama from "../assets/anupama.jpg";
import ashutosh from "../assets/ashutosh.jpg";
import atul from "../assets/atul.jpg";
import dhiresh from "../assets/dhiresh.jpg";
import gitanjali from "../assets/gitanjali.jpg";
import gopal from "../assets/gopal.jpg";
import isha from "../assets/isha.jpg";
import jyoti from "../assets/jyoti.jpg";
import onkar from "../assets/onkar.jpg";
import rashmi from "../assets/rashmi.jpg";
import sandhir from "../assets/sandhir.jpg";
import shivani from "../assets/shivani.jpg";
import sidharth from "../assets/sidhath.jpg";
import sonia from "../assets/sonia.jpg";
import sumit from "../assets/sumit.jpg";
import vijay from '../assets/vijay.jpeg';
import ajay from '../assets/ajay.jpeg';
import sovia from '../assets/sovia.jpeg';
import sonika from '../assets/sonika.jpeg';
import sanjay from '../assets/sanjay.jpeg';
import neeti from '../assets/neeti.jpeg';
import harmeet from '../assets/harmeet.jpeg';
import deepak from '../assets/deepak.jpeg';
import amit from '../assets/amit.jpeg';

export default function LandingPage() {
  const ambassadors = [
    {
      name: "Dr. Praveen Kumar Khosla",
      position: "Pro Vice Chancellor",
      description:
        "Happiness is not something ready-made. It comes from your own actions.",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Monit Kapoor",
      position: "Dean",
      description:
        "The happiness of your life depends upon the quality of your thoughts.",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Deepak Thakur",
      position: "Head (Academic Operations)",
      description:
        "The happiest people don't have the best of everything, they just make the best of everything.",
      img: deepak,
    },
    {
      name: "Dr. Shivani Malhotra",
      position: "ECE Department",
      description:
        "Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
      img: shivani,
    },
    {
      name: "Dr. Isha",
      position: "ECE Department",
      description:
        "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
      img: isha,
    },
    {
      name: "Dr. Vijay Kumar Jadon",
      position: "Dean (Academic Affairs)",
      description:
        "Happiness is not a station you arrive at, but a manner of traveling",
      img: vijay,
    },
    {
      name: "Dr. Ajay Goyal",
      position: "Dean",
      description:
        "Happiness is not a station you arrive at, but a manner of traveling",
      img: ajay,
    },
    {
      name: "Dr. Sandhir Sharma",
      position: "Pro Vice Chancellor",
      description:
        "Happiness is not a station you arrive at, but a manner of traveling",
      img: sandhir,
    },
    {
      name: "Dr. Dhiresh Kulsherstha",
      position: "Dean (Economics)",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
      img: dhiresh,
    },
    {
      name: "Dr. Rashmi Aggarwal",
      position: "Dean (Commerce)",
      description:
        "Happiness is not the absence of problems, it's the ability to deal with them.",
      img: rashmi,
    },
    {
      name: "Dr. Ashutosh Mishra",
      position: "Dean",
      description:
        "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
      img: ashutosh,
    },
    {
      name: "Dr. Gitanjali Kalia",
      position: "Assistant Professor",
      description:
        "The happiness of your life depends upon the quality of your relationships.",
      img: gitanjali,
    },
    {
      name: "Prof. Atul Dutta",
      position: "Dean (Interior Design)",
      description:
        "The greatest happiness you can have is knowing that you are loved for who you are.",
      img: atul,
    },
    {
      name: "Dr. Sumit Wadhera",
      position: "Dean Academic",
      description:
        "The secret of happiness is not in doing what one likes, but in liking what one does.",
      img: sumit,
    },
    {
      name: "Dr. Anupama",
      position: "HOD",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: anupama,
    },
    {
      name: "Dr. Jyoti",
      position: "Assistant Professor",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: jyoti,
    },
    {
      name: "Dr. Sovia R J Singh",
      position: "Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: sovia,
    },
    {
      name: "Ms. Aarti Joshi",
      position: "Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Neeti Sethi",
      position: "Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: neeti,
    },
    {
      name: "Dr. Onkar Bedi",
      position: "Assistant Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: onkar,
    },
    {
      name: "Dr. Sonia Dhiman",
      position: "Assistant Dean",
      description:
        "Happiness is not a possession to be prized, it is a quality of thought, a state of mind",
      img: sonia,
    },
    {
      name: "Mr. Gopal Meena",
      position: "Vise President",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: gopal,
    },
    {
      name: "Mr. Sanjay Jangid",
      position: "Dean (Animation)",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: sanjay,
    },
    {
      name: "Dr. Vaibhavi Pruthviraj Ranavaade",
      position: "Dean (Fashion Design)",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Jasneet Kaur",
      position: "Associate Professor",
      description:
        "Happiness is when what you think, what you say, and what you do are in harmony",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Sonika Bakshi",
      position: "Dean",
      description:
        "Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
      img: sonika,
    },
    {
      name: "Dr. Amandeep Singh",
      position: "Principal (Physiotherapy)",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: amandeep,
    },
    {
      name: "Dr. Harmeet Kaur",
      position: "Principal",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: harmeet,
    },
    {
      name: "Dr. Renu Ranjit Thakur",
      position: "HOD",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: "https://avatars.githubusercontent.com/u/92084737?s=400&u=b72cd8c67b041952cc4145ca1f19926b41729833&v=4",
    },
    {
      name: "Dr. Sidarth Bedi",
      position: "Assistant Professor",
      description:
        "Happiness is a state of mind. It's just according to the way you look at things",
      img: sidharth,
    },
    {
      name: "Mr. Amit Gupta",
      position: "Professor",
      description:
        "The greatest happiness you can have is knowing that you do not necessarily require happiness",
      img: amit,
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Vanshika",
      img: vanshika,
      txt: "My experience with happiness centre was sooo amazing it was wonderful! Nd I really feel grateful to be a part of happiness family....from there I came to learn about so many things...like we should be grateful for everything we have bcz those things can be need of someone.",
    },
    {
      id: 2,
      name: "Rashim Bindal",
      img: rashim,
      txt: "I wanted to share with you my incredible experience after joining the Chitkara Happiness Centre. It has truly been a life-changing journey, and I couldn't be more grateful for the positive impact it has had on my life.",
    },
    {
      id: 3,
      name: "Yuvika",
      img: yuvika,
      txt: "After joining happiness centre I felt positivity in me and I got to know how to be grateful for small things also. It also helped me in gaining confidence and leadership skills. Secondly in career it helped in setting up my goals and fulfilling them with enthusiasm and confidence. ",
    },
    {
      id: 4,
      name: "Harshit Bhargave",
      img: harshit,
      txt: "After joining the center there are many changes inside me. firstly I got confidence and secondly I learned how  to create  network with people earlier I could not talk to people now I can talk to anyone comfortably and After boosting the confidence, I can speak on stage very comfortably.",
    },
    {
      id: 5,
      name: "Gunjan",
      img: gunjan,
      txt: "This Happiness Centre has empowered me to concentrate more on my goals. Prior to joining, I often found myself easily distracted and struggled to maintain focus on my ambitions. However, with the support and guidance provided by the Manav Sir and All other Members of Happiness Centre.",
    },
    {
      id: 6,
      name: "Himani",
      img: himani,
      txt: "Happiness centre is best platform for me I get the chance to get explore the most  and got so many opportunity to work over here I got family like environment over there I donot even feel I am far away from my home  I got opportunity to express my self",
    },
    {
      id: 7,
      name: "Garvit",
      img: garvit,
      txt: "One of the most noticeable changes I've felt since becoming a part of this center is a significant boost in my confidence. Previously, I used to struggle with connecting with people. However, through the various activities offered at the centre, I have gained the ability to easily connect with individuals.",
    },
  ];

  const [notices, setNotices] = useState(null);
  const [rewards, setRewards] = useState(null);
  const [leaderBoard, setleaderBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eventsT, setEventsT] = useState(110);

  useEffect(() => {
    async function fetchListings() {
      try {
        const noticeRef = collection(db, "notice");
        const querySnap = await getDocs(noticeRef);

        const notices = [];
        querySnap.forEach((doc) => {
          return notices.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setNotices(notices);
        sessionStorage.setItem("notices", JSON.stringify(notices));
        setLoading(false);
      } catch (error) {
        toast.error("Something Went Wrong! Network Issue");
      }
    }
    if (notices === null && sessionStorage.getItem("notices") === null) {
      fetchListings();
    } else if (sessionStorage.getItem("notices") !== null) {
      setNotices(JSON.parse(sessionStorage.getItem("notices")));
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    async function fetchListings() {
      try {
        const rewardRef = collection(db, "rewards");
        const querySnap = await getDocs(rewardRef);

        const rewards = [];
        querySnap.forEach((doc) => {
          return rewards.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRewards(rewards);
        sessionStorage.setItem("rewards", JSON.stringify(rewards));
        setLoading(false);
      } catch (error) {
        toast.error("Something Went Wrong! Network Issue");
      }
    }
    if (rewards === null && sessionStorage.getItem("rewards") === null) {
      fetchListings();
    } else if (sessionStorage.getItem("rewards") !== null) {
      setRewards(JSON.parse(sessionStorage.getItem("rewards")));
      console.log(rewards);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    async function fetchListings() {
      try {
        const leaderRef = collection(db, "leaderboard");
        const querySnap = await getDocs(leaderRef);

        const leaders = [];
        querySnap.forEach((doc) => {
          return leaders.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setleaderBoard(leaders);
        sessionStorage.setItem("leaders", JSON.stringify(leaders));
        setLoading(false);
      } catch (error) {
        toast.error("Something Went Wrong! Network Issue");
      }
    }
    if (leaderBoard === null && sessionStorage.getItem("leaders") === null) {
      fetchListings();
    } else if (sessionStorage.getItem("leaders") !== null) {
      setleaderBoard(JSON.parse(sessionStorage.getItem("leaders")));
      console.log(leaderBoard);
      setLoading(false);
    }
  }, []);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const targetRef = useRef(null);
  const [isCounted, setIsCounted] = useState(true);

  useEffect(() => {
    const targetNumber = eventsT; // Replace with your desired target number
    let typed;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isCounted) {
          typed = new Typed(targetRef.current, {
            strings: ["0", targetNumber.toString()],
            startDelay: 1000, // Delay before counting starts (in milliseconds)
            typeSpeed: 50, // Speed of counting (in milliseconds)
            onComplete: () => {
              console.log("Counting complete!");
            },
          });

          setIsCounted(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
      if (typed) {
        typed.destroy();
      }
    };
  }, [isCounted]);
  return (
    <div className="flex flex-col items-center font-monts gap-6">
      <section className="h-full w-screen flex flex-col items-center justify-center gap-6 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:mb-8 md:mt-2 my-0 mb-2 max-w-[90rem]">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full h-full md:w-1/2 justify-center">
            <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-6 lg:ml-8 xl:ml-12 p-6 sm:p-8 md:p-0 text-center md:text-start mt-2 cursor-default select-none">
              There is only one <span className="text-[#F3A140]">passion</span>,
              the passion for <span className="text-[#EF1C22]">happiness.</span>
            </h1>
            {/* <NavLink to="/counseling">
              <div className="flex relative flex-row items-center justify-center gap-6  ml-0 md:ml-6 lg:ml-8 xl:ml-12 p-1 mb-1 font-zilla">
                <div className="flex items-center justify-center bg-[#FB393F] w-[12rem] h-[2.6rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)]">
                  <p className="text-sm">Register For Counselling</p>
                </div>
                <div className="absolute bottom-[-1.8rem] right-[-2rem] rotate-[16deg] flex items-center justify-center">
                  <img
                    src={apply}
                    alt="vector library"
                    className="w-[60%] h-[60%]"
                  />
                </div>
              </div>
            </NavLink> */}
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <img
              src={hero}
              alt="herosvg"
              className="w-[100%] h-[100%] xs:w-[80%] xs:h-[80%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] lg:w-[90%] lg:h-[90%]"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-6 sm:p-4 md:p-6 xl:p-10 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 xl:gap-8 justify-around p-2 xs:p-6 sm:p-0 md:p-4 lg:p-1">
            <div className="relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative bg-[#F45B49] h-full w-full justify-center gap-6 p-4 transition-all duration-300 ease-in-out shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black hover:shadow-none hover:border-none hover:border-transparent">
                <div className="flex flex-row justify-start items-center  mt-4">
                  <img src={library} alt="arrow next" className="w-12 h-12" />
                </div>
                <h1 className="font-bold">Library</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    Any book that helps a child to form a habit of reading, to
                    make reading one of his deep and continuing needs, is good
                    for him. So we have chosen more than 50 books in the
                    Happiness library that give new ideas and lessons by adding
                    some flavor and essence to our life.
                  </p>
                </div>
                <NavLink to="/library" className="cursor-default">
                  <div className="flex flex-row justify-end items-center">
                    <img
                      src={arrow}
                      alt="arrow next"
                      className="w-10 h-10 cursor-pointer"
                    />
                  </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={library2}
                    alt="vector library"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative bg-[#FCDA69] h-full w-full justify-center gap-6 p-4 transition-all duration-300 ease-in-out shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black hover:shadow-none hover:border-none hover:border-transparent">
                <div className="flex flex-row justify-start items-center  mt-4">
                  <img
                    src={meditation}
                    alt="arrow next"
                    className="w-12 h-12"
                  />
                </div>
                <h1 className="font-bold">Meditation</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    Happiness Centre offers the following meditations in the
                    Meditation room:- Mindful Breathing Meditation, Guided
                    Meditation, Silence Meditation. Meditation doesn’t only make
                    us more peaceful; it also helps students to be more
                    successful in all life endeavors.
                  </p>
                </div>
                <NavLink to="/meditation" className="cursor-default">
                  <div className="flex flex-row justify-end items-center ">
                    <img
                      src={arrow}
                      alt="arrow next"
                      className="w-10 h-10 cursor-pointer"
                    />
                  </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={meditation2}
                    alt="vector library"
                    className="w-7 h-7"
                  />
                </div>
              </div>
            </div>
            {/* <div className="grid-cols-1   relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative h-full w-full bg-[#C6FCDB]  justify-center gap-6 p-4 shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img
                    src={counseling}
                    alt="arrow next"
                    className="w-12 h-12"
                  />
                </div>
                <h1 className="font-bold">Counseling</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    Counselling sessions are being taken by Chief Happiness
                    Officer, Manav Bansal where students get a chance to express
                    themselves. In One-To-One Counselling, a student gets an
                    opportunity to receive support and experience growth during
                    challenging times of life.
                  </p>
                </div>
                <NavLink to="/counseling">
                  <div className="flex flex-row justify-end items-center ">
                    <img src={arrow} alt="arrow next" className="w-10 h-10" />
                  </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={counseling2}
                    alt="vector library"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div> */}
            <div className="relative w-full h-full p-0 xs:p-4 sm:p-2 md:p-6 lg:p-0">
              <div className="flex flex-col relative bg-[#FEC2D9] w-full h-full justify-center gap-6 p-4 transition-all duration-300 ease-in-out shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black hover:shadow-none hover:border-none hover:border-transparent">
                <div className="flex flex-row justify-start items-center h-full w-full mt-4">
                  <img src={speaker} alt="arrow next" className="w-12 h-12" />
                </div>
                <h1 className="font-bold">Speaker Session</h1>
                <div className="flex items-center">
                  <p className="text-sm md:text-base font-zilla">
                    A motivational speaker has mastered the art of igniting in
                    others the intrinsic drive for growth and change toward a
                    better future. A motivational speaker encourages individuals
                    to participate. The team's vote of duty and commitment will
                    be strengthened via the use of specialized approaches.
                  </p>
                </div>
                <NavLink to="/speaker" className="cursor-default">
                  <div className="flex flex-row justify-end items-center">
                    <img
                      src={arrow}
                      alt="arrow next"
                      className="w-10 h-10 cursor-pointer"
                    />
                  </div>
                </NavLink>
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <img
                    src={speaker2}
                    alt="vector library"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 z-[-1]">
          <img
            src={vector1}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
        <div className="flex items-center justify-center absolute top-4 right-0 z-[-1]">
          <img
            src={vector2}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
      </section>
      <section className="h-full w-screen relative flex flex-col justify-center mt-4">
        <div className="flex flex-col items-center justify-center h-full w-full p-1 mt-2">
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 h-full w-full">
            <div className="flex flex-col gap-4 items-center justify-center h-full w-full md:w-[46%] p-6 mb-4  md:my-8">
              <div className="flex items-center justify-center p-4 relative">
                <img
                  src={manav}
                  alt="manavjpg"
                  className="w-[90%] z-[10] h-[90%] sm:w-[50%] sm:h-[50%] md:w-[100%] md:h-[100%] lg:w-[75%] lg:h-[75%] xl:w-[60%] xl:h-[60%] object-scale-down"
                />
                <img
                  src={frame}
                  alt="frame"
                  className="w-[100%] absolute h-[100%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] left-4 top-4 sm:left-10 sm:top-4"
                />
                <img
                  src={frame1}
                  alt="frame1"
                  className="w-[100%] absolute h-[100%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] bottom-2 right-2 sm:bottom-4 sm:right-4"
                />
                <img
                  src={frame2}
                  alt="frame2"
                  className="w-[100%] absolute h-[100%] sm:w-[60%] sm:h-[60%] md:w-[100%] md:h-[100%] right-4 sm:right-6"
                />
              </div>
              <h2 className="font-medium font-zilla">MR. MANAV BANSAL</h2>
            </div>
            <div className="flex flex-col items-center md:items-start md:gap-6 w-full h-full md:w-[54%] justify-center mb-4  md:my-8">
              <div className="flex items-center justify-center">
                <h1 className="font-extrabold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-0 md:ml-2 lg:ml-4 xl:ml-6 p-4 sm:p-6 md:p-2 lg:p-1 text-center md:text-start select-none cursor-pointer">
                  A <span className="text-[#F3A140]">smile</span>, is always the
                  best form of{" "}
                  <span className="text-[#EF1C22]">introduction.</span>
                </h1>
              </div>

              <div className="flex items-center justify-center font-zilla">
                <p className="lg:w-[92%] text-xs sm:text-sm md:text-base lg:text-lg  ml-0 md:ml-1 lg:ml-0  p-4 sm:p-6 md:p-2 lg:p-0 text-center md:text-start ">
                  He graduated from BTech(CSE), then pursued LLB, he did MBA in
                  HR .He has an experience of 16 years of HR at companies like
                  Emaar,Max. Lastly he was a director HR at Shoolini University
                  ,then he chose his passion to spread happiness and now he is
                  Chief Happiness Officer at Chitkara University.He is on this
                  journey of happiness from last 20 years dating back to earlier
                  college days.He is currently doing PhD in Happiness.
                </p>
              </div>
              <div className="flex items-center justify-center font-zilla">
                <p className="lg:w-[92%] text-xs  sm:text-sm md:text-base lg:text-lg  ml-0 md:ml-1 lg:ml-0 p-4 sm:p-6 md:p-2 lg:p-0 text-center md:text-start ">
                  Expertise in taking Sessions for elevating Student
                  Inspiration, Motivation, and Development on Different topics
                  like Time Management, Communication Skills, Healthy Lifestyle,
                  Balanced Life, Meditation – Art of Inner Management, Goal
                  Setting, IKIGAI for Happiness, How to figure out true talent,
                  etc.
                </p>
              </div>
              <NavLink to="/team">
                <div className="flex relative flex-row items-center justify-center gap-6 my-2  ml-0 md:ml-2 lg:ml-6 xl:ml-10 p-1 font-zilla">
                  <div className="flex items-center justify-center bg-[#FCDA69] w-[11rem] h-[2.5rem] p-2 shadow-[4px_4px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-none">
                    <p className="text-xs">MEET THE TEAM</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <h1 className="font-monts font-bold flex items-center justify-center gap-2  text-xl sm:text-4xl p-1 uppercase select-none cursor-pointer">
                OUR <span className="text-[#EF1C22]"> AMBASSADORS</span>
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex justify-center w-screen p-2">
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
                  {ambassadors.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex w-full h-full items-center justify-center flex-col bg-white rounded-md border border-gray-500 p-4">
                        <div className="w-full items-center flex justify-start">
                          <div className="rounded-full p-1 border-2 border-red-600">
                            <img
                              src={item.img}
                              alt="images"
                              className="w-16 h-16 rounded-full"
                            />
                          </div>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start p-2">
                          <h1 className="font-bold font-monts">{item.name}</h1>
                          <p className="font-zilla text-base">
                            {item.position}
                          </p>
                        </div>
                        <div className="p-2 flex flex-1 items-start justify-center w-full">
                          <p className="font-zilla flex-1 text-start w-full">
                            {item.description}
                          </p>
                        </div>{" "}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 z-[-1]">
          <img
            src={vector3}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
      </section>
      <section className="w-screen relative h-full  md:h-screen flex items-center justify-center">
        <div className="flex h-full w-full flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full h-full md:w-[40%] justify-center my-6 md:my-0">
            <div className="flex items-center justify-center relative ml-0 md:ml-5 lg:ml-7 xl:ml-11 p-1 mt-2">
              <h1 className="font-extrabold text-4xl xs:text-5xl sm:text-5xl md:text-[2.5rem] lg:text-5xl xl:text-7xl  sm:p-4 md:p-0 text-center md:text-start p-1 select-none cursor-pointer">
                WEEKLY
                <span className="text-[#F3A140]">
                  <br />
                  SCHEDULE
                </span>
              </h1>
              <div className="flex items-center justify-center absolute right-[2rem] top-[1rem]">
                <img
                  src={line}
                  alt="line svg"
                  className="rotate-[120deg] h-14 w-14"
                />
              </div>
            </div>
            <div className="flex relative flex-row items-center justify-center gap-3 sm:gap-6  ml-0 md:ml-5 lg:ml-7 xl:ml-11 p-1 mb-1 font-zilla">
              <NavLink to="/events">
                <div className="flex items-center justify-center bg-[#FB393F] w-[8rem] h-[2.6rem] md:w-[7rem] md:h-[2.5rem] lg:w-[8rem] lg:h-[2.6rem] p-2 hover:shadow-none transition-all duration-300 ease-in-out shadow-[4px_4px_rgba(0,0,0,1)]">
                  <p className="text-sm">PAST EVENT</p>
                </div>
              </NavLink>
              <NavLink to="/events">
                <div className="flex items-center justify-center bg-[#FCDA69]  w-[8rem] h-[2.6rem]  md:w-[7rem] md:h-[2.5rem] lg:w-[8rem] lg:h-[2.6rem] p-2 hover:shadow-none transition-all duration-300 ease-in-out shadow-[4px_4px_rgba(0,0,0,1)]">
                  <p className="text-sm">UPCOMING</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full md:w-[60%] my-8 md:m-0">
            <div className="flex flex-col sm:flex-row h-full w-full items-center justify-center gap-4 p-4 md:gap-4 md:p-2 lg:gap-4 lg:p-4 xl:gap-6 xl:p-6">
              <div className="flex flex-col h-[70%] lg:h-[75%] bg-white xl:h-[80%] w-4/5 md:w-1/2 items-center justify-center hover:shadow-none transition-all duration-300 ease-in-out shadow-[5px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="h-[25%] w-full p-1">
                  <div className="flex items-center justify-start p-1 w-full h-full">
                    <img
                      src={event}
                      alt="event"
                      className="w-16 h-16 ml-2 m-1"
                    />
                  </div>
                </div>
                <div className="h-[25%] w-full bg-[#FB393F] flex items-center justify-center md:justify-start p-1 border-t-[1px] border-black">
                  <h1 className="text-2xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl md:ml-2 p-4 md:p-0 font-semibold select-none cursor-pointer">
                    EVENTS
                  </h1>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6 border-t-[1px] border-b-[1px] border-black p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        20
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6  p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p
                        ref={targetRef}
                        className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl"
                      >
                        {eventsT}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[70%] bg-white lg:h-[75%] xl:h-[80%] w-4/5 md:w-1/2 items-center justify-center hover:shadow-none transition-all duration-300 ease-in-out shadow-[5px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="h-[25%] w-full p-1">
                  <div className="flex items-center justify-start p-1 w-full h-full">
                    <img src={cep} alt="cep" className="w-16 h-16 ml-2 m-1" />
                  </div>
                </div>
                <div className="h-[25%] w-full bg-[#FCDA69] flex items-center justify-center md:justify-start p-1  border-t-[1px] border-black">
                  <h1 className="text-2xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl md:ml-2 p-4 md:p-0 font-semibold select-none cursor-pointer">
                    CEP/CLASSES
                  </h1>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6 border-t-[1px] border-b-[1px] border-black p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        20
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[25%] w-full flex flex-row items-center justify-around gap-6  p-4 md:p-1 font-zilla">
                  <div className="h-full w-full flex flex-row items-center justify-between p-2">
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        TOTAL NO.
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-1">
                      <p className="font-normal text-base xs:text-lg sm:text-xl lg:text-2xl">
                        20
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 z-[-1]">
          <img
            src={vector2}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
        <div className="flex items-center justify-center absolute  bottom-4 right-0 z-[-1]">
          <img
            src={vector4}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
      </section>
      <section className="w-screen h-full relative flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-1 my-1">
            <div className="flex flex-col items-center justify-center w-full  my-2 h-[24rem] p-1">
              <div className="flex flex-col items-center justify-center w-full h-[25%] p-4">
                <h1 className="font-monts font-bold flex items-center justify-center gap-2  text-3xl p-1 select-none cursor-pointer">
                  Happiness <span className="text-[#FB393F]"> Quotes</span>
                </h1>
              </div>
              <Quotes />
              <div className="flex items-center justify-end w-full  p-2 h-[36%]">
                <img src={mobile} alt="mobile" className="w-36 h-36" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full my-2 h-[24rem] p-1 overflow-scroll">
              <div className="flex flex-col items-center justify-center w-full h-[25%] p-4">
                <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-3xl p-1 w-full h-full select-none cursor-pointer">
                  Notice <span className="text-[#FC762B]">Board</span>
                </h1>
              </div>
              {loading ? (
                <Spinner />
              ) : notices && notices.length > 0 ? (
                notices.map((item, index) => (
                  <>
                    <a
                      href={item?.data?.noticeLink}
                      key={index}
                      className="flex flex-1 flex-col items-center justify-center w-full h-[18%]"
                    >
                      <div className="flex flex-col items-center justify-start w-full h-full p-2">
                        <p className="font-zilla font-normal flex items-center text-center text-blue-800 justify-center gap-2 text-xl p-1">
                          {item?.data?.noticeName}
                        </p>
                      </div>
                    </a>
                  </>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-[18%] p-2">
                  <p className="font-zilla font-normal flex items-center text-center text-gray-800 justify-center gap-2 text-xl p-1">
                    NO NOTICE TILL NOW PLEASE WAIT!
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <h1 className="font-monts font-bold flex items-center justify-center gap-2  text-3xl sm:text-4xl p-1 uppercase text-[#FC762B] select-none cursor-pointer">
                Testimonials
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex justify-center w-screen p-2">
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
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex items-center w-full h-full justify-center flex-col bg-white rounded-md border border-gray-500 p-4">
                        <div className="w-full  items-center flex justify-start">
                          <div className="rounded-full p-1 border-2 border-red-600">
                            <img
                              src={item.img}
                              alt="images"
                              className="w-20 h-20 rounded-full"
                            />
                          </div>
                        </div>
                        <div className="w-full flex justify-between items-center flex-1 p-2">
                          <h1 className="font-bold font-monts">{item.name}</h1>
                        </div>
                        <div className="p-2 h-full flex items-start flex-1 justify-center w-full">
                          <p className="font-zilla flex-1 text-start w-full">
                            {item.txt}
                          </p>
                        </div>{" "}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-0 left-0 z-[-1]">
          <img
            src={vector5}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
      </section>
      <section
        className="w-screen h-full relative flex items-center justify-center mb-4"
        id="rewards"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center flex-col justify-center w-full h-full gap-1">
            <div className="flex flex-col items-center justify-center  p-4 my-1">
              <h1 className="font-monts font-bold flex items-center justify-center gap-2 text-lg xs:text-xl sm:text-4xl p-1 uppercase select-none cursor-pointer ">
                Rewards&<span className="text-[#F55C4A]">Achievements</span>
              </h1>
            </div>
            <div className="flex flex-row  justify-center w-full sm:w-[75%] h-full p-4 gap-4">
              {loading ? (
                <Spinner />
              ) : rewards && rewards.length > 0 ? (
                rewards.map((item, index) => (
                  <div className="w-1/2 bg-white h-full flex flex-col items-center justify-center gap-2 hover:shadow-none transition-all duration-300 ease-in-out shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] p-1 border-black">
                    <div className="p-1 mt-4">
                      <img
                        src={item.data?.imgUrls[0]}
                        alt="avatar"
                        className="w-20 h-20 sm:w-24 rounded-full sm:h-24"
                      />
                    </div>
                    <div className="p-1">
                      {" "}
                      <h1 className="my-1 text-base md:text-lg font-zilla capitalize">
                        {item.data?.name}
                      </h1>
                    </div>
                    <div className="p-1">
                      {" "}
                      <p className="mb-2 text-base md:text-lg font-zilla">
                        {item.data?.position}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>NO WINNERS TILL NOW!</p>
              )}
            </div>
            <div className="flex items-center justify-center w-full h-full p-4">
              <div className="flex flex-col bg-white items-center justify-center w-[90%] sm:w-[75%] h-full hover:shadow-none transition-all duration-300 ease-in-out shadow-[6px_6px_rgba(0,0,0,1)] border-[1px] border-black">
                <div className="p-1 mt-4">
                  <h1 className="my-1 text-base md:text-lg font-monts uppercase hover:underline font-semibold select-none cursor-pointer">
                    LeaderBoard
                  </h1>
                </div>
                <div className="flex items-center flex-col justify-center w-full h-full p-4">
                  {loading ? (
                    <Spinner />
                  ) : leaderBoard && leaderBoard.length > 0 ? (
                    leaderBoard.map((item, index) => (
                      <>
                        <div className="flex items-center justify-around w-full h-full p-4">
                          <p className="text-xl font-zilla capitalize">
                            {index + 1}. {item?.data?.leaderName}{" "}
                          </p>
                          <p className="text-xl font-zilla capitalize">
                            {item?.data?.leaderPosition}
                          </p>
                        </div>
                      </>
                    ))
                  ) : (
                    <div className="flex items-center justify-around w-full h-full p-4">
                      <p className="text-xl font-zilla">
                        NO WINNERS WILL SEE IN FUTURE
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute  bottom-[-16px]  right-0 z-[-1]">
          <img
            src={vector6}
            alt="vector color art"
            className="w-96 h-96 md:w-128 md:h-128"
          />
        </div>
      </section>
    </div>
  );
}
