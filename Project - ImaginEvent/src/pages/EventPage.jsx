import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/EventPage/Banner";
import Location from "../components/EventPage/Location";
import HostDetails from "../components/EventPage/HostDetails";
import AboutComponent from "../components/EventPage/AboutComponent";
// import RegisterComponent from "../components/EventPage/RegisterComponent";
import { useMainDashContext } from "../context/AppContext";
import { FaXmark } from "react-icons/fa6";
import { toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";
// import QRCode from "react-qr-code";
import { IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import QRCode from "qrcode";

const EventPage = () => {
  const { RegisterClick, setRegisterClick } = useMainDashContext();
  const [event, setEvent] = useState({});
  const [questions, setQuestions] = useState([]);
  const [registerCheck, setRegisterCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const [qrHash, setQrHash] = useState("");
  const { id } = useParams();
  const cookie = Cookies.get("user");
  // console.log(cookie);
  const user = JSON.parse(cookie);
  // console.log(user.decodedjwt.userId);
  // console.log(user.decodedjwt.decode.userId);
  const _id = user.decodedjwt.decode.userId;
  const _umail = user.decodedjwt.decode.email;
  const modifiedEmail = _umail.split("@")[0];
  const [isUserEvent, setIsUserEvent] = useState(false);
  // console.log(id);

  let qrCodeRef = React.createRef();

  // useEffect(() => {
  //   const trackEventView = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://re-event-backend.onrender.com/events/trackEventPageView/`
  //       );
  //     } catch (error) {
  //       console.error('Error tracking event view:', error);
  //     }
  //   };

  //   trackEventView();
  // }, [id]);
  useEffect(() => {
    const getuserEvents = async () => {
      try {
        const response = await axios.get(
          `https://re-event-backend.onrender.com/events/geteventsbyuserid/${_umail}`
        );
        const userEvents = response.data.createdEvents;
        const isthis = userEvents.some((event) => event === id);
        setIsUserEvent(isthis);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getuserEvents();
  }, []);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axios.get(
          `https://re-event-backend.onrender.com/events/geteventbyid/${id}`
        );

        const eventData = response.data;
        setEvent(eventData);
        console.log(eventData);
        setQuestions(eventData.questions);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to fetch event");
      }
    };

    getEvent();
  }, [id]);
  const handleApiEventCall = async () => {
    try {
      // Start loading
      const loadingPromise = toast.promise(
        new Promise((resolve, reject) => {
          axios
            .post(`https://re-event-backend.onrender.com/events/neweventAddUser/${id}`, {
              _uid: _id,
              email: _umail,
            })
            .then((response) => {
              if (response.status === 200) {
                resolve("Registered for the event successfully");
              } else if (response.status === 205) {
                reject(new Error("You are already registered for this event"));
              }
              setQrHash(response.data.hashedQRCode);
            })
            .catch((error) => {
              reject(error);
            });
        }),
        {
          loading: "Loading...",
          success: (data) => data,
          error: (error) => error.message || "Error",
          duration: 5000,
        }
      );
  
      // Wait for the loadingPromise to resolve
      await loadingPromise;
  
    } catch (error) {
      // Handle error if needed
      console.error("Error:", error);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://re-event-backend.onrender.com/events/checkuserev/${id}/${_id}`
        );

        if (response.status === 200) {
          console.log(response.data.qrUniqueCode);
          setQrHash(response.data.qrUniqueCode);
          setRegisterCheck(true);
          console.log("You are already registered for this event");
          // toast.success("You are already registered for this event");
        } else if (response.status === 205) {
          setRegisterCheck(false);
          console.log("You are not registered for this event");
          // toast.error("You are not registered for this event");
        }
      } catch (error) {
        console.error("Error checking user registration:", error);
        // toast.error("Failed to check user registration");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [qrHash]);

  const handleSubmit = () => {
    setRegisterClick(!RegisterClick);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <>
      <div className="w-full flex justify-center">
        <div
          className={
            RegisterClick
              ? `w-full mt-10 flex  items-center justify-center p-10 bg-[#1e1f20]/90  backdrop-blur-lg fixed`
              : `w-full mt-10 flex max-w-[1600px] items-center justify-center p-10`
          }
        >
          {/* <Toaster /> */}
          <div className="w-full md:w-2/3 ">
            <Banner
              img={event.eventbanner}
              location={event.eventlocation}
              time={event.eventtime}
              date={event.eventdate}
              eventname={event.eventname}
              organiser={event.eventcreatedby}
            />
            <div className="w-full flex flex-col md:flex-row gap-4 py-5">
              <div className="md:w-1/3 w-full flex flex-col gap-4">
                <Location location={event.eventlocation} />
                <HostDetails host={event.eventcreatedby} />
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-4">
                <>
                  <div className="w-full flex flex-col items-center rounded-2xl bg-zinc-800 border border-zinc-700">
                    <h1 className="text-lg font-medium flex items-center gap-2 bg-zinc-700 py-2 w-full rounded-t-2xl px-4">
                      <IoTicketOutline /> Register for the event
                    </h1>
                    <div className="w-full px-8 py-4">
                      <h1 className="text-gray-200/80 items-center flex flex-row gap-2">
                        <img
                          src="https://picsum.photos/200"
                          alt="car"
                          className="w-10 h-10 object-cover rounded-full"
                        />
                        <span className="flex flex-col">
                          You are signed in as{" "}
                          <span className="font-semibold">
                            <span className="text-sm md:text-lg text-white/80">
                              {" "}
                              {_umail}{" "}
                            </span>
                          </span>
                        </span>
                      </h1>
                    </div>
                    <hr className="w-[95%] opacity-50 bg-yellow-200" />
                    <div className="w-full items-center flex justify-center px-8 py-4">
                      {loading ? (
                        <div>Loading...</div>
                      ) : registerCheck ? (
                        isUserEvent ? (
                          <Link
                            to={`/manage/${id}`}
                            className="bg-zinc-100 rounded-lg text-center text-lg py-2 font-semibold tracking-wide hover:scale-105 transition-all shadow-lg shadow-zinc-100/10 w-[100%] text-black/80"
                          >
                            Manage Your Event
                          </Link>
                        ) : (
                          <button className="bg-zinc-100 rounded-lg text-lg py-2 font-semibold tracking-wide hover:scale-105 transition-all shadow-lg shadow-zinc-100/10 w-[100%] text-black/80">
                            Download Your RSVP
                          </button>
                        )
                      ) : isUserEvent ? (
                        <Link
                          to={`/manage/${id}`}
                          className="bg-zinc-100 rounded-lg text-center text-lg py-2 font-semibold tracking-wide hover:scale-105 transition-all shadow-lg shadow-zinc-100/10 w-[100%] text-black/80"
                        >
                          Manage Your Event
                        </Link>
                      ) : (
                        <button
                          className="bg-zinc-100 rounded-lg text-lg py-2 font-semibold tracking-wide hover:scale-105 transition-all shadow-lg shadow-zinc-100/10 w-[100%] text-black/80"
                          onClick={handleSubmit}
                        >
                          Click to Register
                        </button>
                      )}
                    
                    </div>
                  </div>
                </>

                <AboutComponent description={event.description} />
                {/* <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={qrHash}
                  viewBox={`0 0 256 256`}

                /> */}
                <button
                  className="bg-white text-black"
                  onClick={async () => {
                    const response = await QRCode.toDataURL(qrHash);
                    const a = document.createElement("a");
                    a.href = response;
                    a.download = `${event.eventname}_EventPass.png`;
                    a.click();
                  }}
                >
                  Download QR Code
                </button>
              </div>
            </div>
            {/* <RegisterQuestionComponent /> */}
          </div>
        </div>
        {RegisterClick && (
          <div className="w-full absolute h-[100vh] z-[1000] bg-[#1e1f20]/90  backdrop-blur-lg">
            <div className="flex items-center mt-[5%] flex-col justify-center">
              <div className=" flex flex-col gap-3">
                <h1 className=" mt-5 text-2xl">Register Your Self</h1>
                <div className="flex items-center  gap-2">
                  <img
                    src="
               https://picsum.photos/200"
                    alt="car"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h1 className="text-xl">{modifiedEmail}</h1>
                    <h2 className="text-sm text-white/50">{_umail}</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5 mt-5">
                  {questions.map((question) => {
                    return (
                      <div className=" flex  justify-center gap-1  flex-col">
                        <h1 className="text-sm ml-2  text-white/80">
                          {question.question}
                        </h1>
                        <input
                          type={question.field}
                          placeholder="Enter your answer here"
                          className="w-[25rem] rounded-lg   select-none border-none active:border-zinc-600 p-3
                bg-[#161719] text-white/80"
                          required={question.required}
                        />
                      </div>
                    );
                  })}
                  <div
                    className=" flex  justify-center gap-1  mt-5  flex-col"
                    onClick={() => {
                      setRegisterClick(!RegisterClick);
                      handleApiEventCall();
                    }}
                  >
                    <button
                      className="w-[25rem] rounded-lg  select-none border-none active:border-zinc-600 p-2
               bg-white text-black/90 "
                    >
                      Request to register
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <FaXmark
              className="bg-[#1e1f20] hover:cursor-pointer  text-3xl absolute top-0 right-0  mt-5 mr-5  "
              onClick={() => setRegisterClick(!RegisterClick)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default EventPage;
