"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import CheckBox from "@/components/Checkbox";
import { invitationCodes } from "@/constants/invitationCodes";
import { useRouter } from "next/navigation";

const Rsvp = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [inviteName, setInviteName] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [attendance, setAttendance] = useState(false);
  const [willNotAttend, setWillNotAttend] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const script_url =
    "https://script.google.com/macros/s/AKfycbzqnc_NeFqszcKwh6gY1nLGVoD205TqT3xE-xPQW1e69gpokAlC7w4Kiz0jZdP-VkCE/exec";

  function handleChange(e) {
    setInvitationCode(e.target.value);
  }
  function handleNameChange(e) {
    setInviteName(e.target.value);
  }

  function handleWillAttend() {
    setAttendance(!attendance);
    if (attendance) {
      setWillNotAttend(false);
    }
  }
  function handleWillNotAttend(e) {
    setWillNotAttend(!willNotAttend);
    if (willNotAttend) {
      setAttendance(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage(false);
    }, 2000);
  }, [successMessage]);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage;
    }, 3000);
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const inviteCode = parseInt(invitationCode, 10);
    //check if invite code is correct
    const confirmCode = invitationCodes.includes(inviteCode);
    console.log(confirmCode);

    if (confirmCode) {
      const formData = new FormData();
      formData.append("guest", inviteName);
      formData.append("code", invitationCode);
      formData.append("attendance", attendance === true ? "Yes" : "No");

      try {
        await fetch(script_url, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            setLoading(false)
            setSuccessMessage(true);

            setTimeout(() => {
              router.push(`/invite?attendance=${attendance}`)
            }, 3000);
          })
          .catch((error) => {
            console.error("Error: ", error.message), alert(error.message);
          });
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    } else if (confirmCode === false) {
      setErrorMessage(true);
    }
  };

  return (
    <div className="mb-10">
      <div className="relative">
        <img
          srcset="rsvp_banner_lg.jpg 1024w"
          src="./rsvp_banner.jpg"
          alt="rsvp banner"
          className="xs:h-[200px] md:h-[250px] lg:h-[525px] md:w-full blur-[1px]"
        />
        <div className="center">
          <p className="font-lato text-[56px] text-white font-bold">RSVP</p>
        </div>
      </div>

      {/* <div className="z-30">
        <img src="./flower1.svg" className="absolute right-[-100px]" />
      </div> */}

      <div className="md:max-container md:padding-container">
        <div className="relative">
          <div className="bg1 pt-10 pb-10 md:mt-5 px-5">
            <div className="border-none shadow-md p-5 md:p-12 rounded-sm">
              <h1 className="font-serif uppercase flexCenter text-[20px] md:text-4xl blue">
               Dear Guest
              </h1>
              <p className="flexCenter font-loto mt-5 md:mt-8 blue font-normal text-[16px] md:text-[18px] text-justify md:text-center">
              Join us as we celebrate our love! <br />Kindly RSVP by 15th of August to confirm your attendance. We can't wait to share this special day with you!
              </p>
            </div>
          </div>
        </div>

        <div className="relative md:flex mt-10 md:mt-10 md:items-center md:justify-center padding-container bg-green shadow-lg py-10 rounded-md opacity-90">
          <Image
            className="center_flower_three"
            src="./flower3.svg"
            alt=""
            width={200}
            height={200}
          />

          <div className="border-none shadow-lg px-4 md:px-12 py-10 md:py-10 rounded-md bg-white md:bg-white md:h-[550px] md:w-[512px] mt-10 mb-10 md:mt-10">
            {successMessage && (
              <div className="flexCenter rounded-md py-2 px-4 text-black bg-[#f0fdf4] mb-4">
                Thank you! your form is submitted successfully.
              </div>
            )}
            {errorMessage && (
              <div className="flexCenter rounded-md py-2 px-4 text-black bg-red-400 mb-4">
                Invalid invitation code
              </div>
            )}
            <h1 className="font-playwrite text-3xl flexCenter mt-3 md:mt-6 text-black md:text-black flexCenter">
              Will you attend?
            </h1>
            <div className="">
              <form
                name="invite-form"
                method="post"
                action=""
                className="mt-10"
              >
                <label className="block text-md font-medium leading-6 text-black md:text-black">
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="name"
                      name="guest"
                      type="text"
                      placeholder="Enter name"
                      className="block flex-1 border-0 bg-transparent pl-2 py-2 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={handleNameChange}
                      value={inviteName}
                      required
                    />
                  </div>
                </div>
                <label className="mt-2 block text-md font-medium leading-6 text-black md:text-black">
                  Invitation Code
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="invitationCode"
                      name="code"
                      type="text"
                      placeholder="Enter code"
                      className="block flex-1 border-0 bg-transparent pl-2 py-2 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={invitationCode}
                      required
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <div className="space-y-6">
                    <div className="relative flex gap-x-3">
                      {/* <CheckBox
                        index={1}
                        choice={attendance}
                        setter={setAttendance}
                      /> */}
                      <input
                        className="w-[18px] h-[18px]"
                        type="checkbox"
                        name="attendance"
                        value={attendance === true && "Yes, I will"}
                        // checked={attendance}
                        onChange={handleWillAttend}
                      />
                      <div className="text-black md:text-black text-md">
                        Yes, I will be there
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="space-y-6">
                    <div className="relative flex gap-x-3">
                      {/* <CheckBox
                        index={2}
                        choice={willNotAttend}
                        setter={setWillNotAttend}
                      /> */}
                      <input
                        className="w-[18px] h-[18px]"
                        type="checkbox"
                        name="attendance"
                        value={willNotAttend === true && "No"}
                        // checked={willNotAttend}
                        onChange={handleWillNotAttend}
                      />
                      <div className="text-black md:text-black text-md">
                        Sorry, can't make it
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={(attendance === true && willNotAttend === true) || loading}
                  className="font-lato text-sm mt-12 px-7 py-3 rounded-md text-white bg-black w-full md:w-full"
                >
                  {loading ? 'Validating code...' : 'R.S.V.P.'}
                </button>
              </form>
            </div>
          </div>
          <Image
            className="center_flower_two"
            src="./flower2.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div>
          {/* <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc7dQyN6ce1pQq-O8nVUiivbFw0klkc_UPGqBGCYOkj-sytVg/viewform?embedded=true"
            width="640"
            height="635"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
