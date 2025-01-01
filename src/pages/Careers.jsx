import React, { useState } from "react";
import {
  WithAuthProtection,
  ValuesCard,
  Input,
  Select,
} from "../components/index";
import { BsPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { PiBagFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, Controller } from "react-hook-form";

const Careers = () => {
  const valuesData = [
    {
      id: 1,
      img: "/asset 27.png",
      title: "Believe in All People",
      description:
        "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do.",
    },
    {
      id: 2,
      img: "/asset 28.png",
      title: "Recognize",
      description:
        "We look for ways to recognize our people for their courage and celebrate all achievements – big and small. We never forget to have fun doing it!",
    },
    {
      id: 3,
      img: "/asset 29.png",
      title: "Run Great Restaurants",
      description:
        "We are passionate about our food and take pride in creating a great experience for our guests. We do things the right way, even when no one is looking.",
    },
    {
      id: 4,
      img: "/asset 30.png",
      title: "Go for Breakthrough",
      description:
        "We always strive to do and be our best. We work with a sense of urgency and ownership in our brand. We take smart risks to achieve amazing results!",
    },
    {
      id: 5,
      img: "/asset 31.png",
      title: "Build Know How",
      description:
        "We always seek to learn more and share our know how with others. Everyone can grow here.",
    },
    {
      id: 6,
      img: "/asset 32.png",
      title: "Work as a Team",
      description:
        "We help and support each other to grow and achieve more. We benefit from healthy debate to get the best outcomes. We win together as the KFC family!",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    control,
    reset,
  } = useForm();

  const handleCareerSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    if (value.length < 10) {
      setError("phone", {
        type: "Length Error",
        message: "Phone Number must be exactly 10 digits",
      });
    }
    if (value.length === 10) {
      clearErrors("phone");
    }
    e.target.value = value;
  };

  return (
    <form
      className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-16 min-h-[100vh]"
      onSubmit={handleSubmit(handleCareerSubmit)}
    >
      <div className="container">
        <div className="w-full bg-red">
          <video src="/kfc_video.mp4" controls className="w-full"></video>
        </div>
        <h1 className="text-4xl font-bold text-center mt-16">Our Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6">
          {valuesData.map((data) => {
            return (
              <ValuesCard
                key={data.id}
                img={data.img}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
        <h1 className="text-3xl font-bold text-center">Careers</h1>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            <BsPersonFill /> Personnel Info
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Input
              type="text"
              title="FULL NAME"
              label="FULL NAME"
              placeholder=""
              required={true}
              {...register("fullName", {
                required: "Full Name must be required",
              })}
            />
            <Input
              type="date"
              title="Date of Birth"
              label="Date of Birth"
              placeholder=""
              required={true}
              isDateInput="true"
              {...register("dateOfBirth", {
                required: "Date of Birth must be required",
              })}
            />
            <Input
              type="text"
              title="Country of Birth"
              label="Country of Birth"
              placeholder=""
              required={true}
              {...register("countryOfBirth", {
                required: "Country of Birth must be required",
              })}
            />
            <Input
              type="text"
              title="City of Birth"
              label="City of Birth"
              placeholder=""
              required={true}
              {...register("cityOfBirth", {
                required: "City of Birth must be required",
              })}
            />
            <Input
              type="number"
              title="CNIC"
              label="CNIC"
              placeholder=""
              required={true}
              {...register("cnic", {
                required: "CNIC must be required",
              })}
            />
            <Input
              type="date"
              title="CNIC Expiry Date"
              label="CNIC Expiry Date"
              placeholder=""
              required={true}
              isDateInput="true"
              {...register("date", {
                required: "Date must be required",
              })}
            />
            <Controller
              name="maritalStatus"
              control={control}
              defaultValue=""
              rules={{ required: "Marital Status must be required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  title="Marital Status"
                  required={true}
                  options={["Married", "Un married"]}
                />
              )}
            />

            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  title="Gender"
                  required={false}
                  options={["Male", "Female", "Others"]}
                />
              )}
            />
            <Input
              type="text"
              title="Religion"
              label="Religion"
              placeholder=""
              required={true}
              {...register("religion", {
                required: "Religion must be required",
              })}
            />
            <Input
              type="text"
              title="Disability"
              label="Disability"
              placeholder=""
              required={true}
              {...register("disability", {
                required: "Disability must be required",
              })}
            />
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            <HiLocationMarker /> Address
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Input
              type="tel"
              title="Phone Number (3xxxxxxxxx)*"
              label="Phone Number (3xxxxxxxxx)*"
              placeholder=""
              required={true}
              isPhoneInput="true"
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone Number must be exactly 10 digits",
                },
                onChange: (e) => {
                  handlePhoneChange(e);
                },
              })}
            />
            <Input
              type="text"
              title="Address"
              label="Address"
              placeholder=""
              required={true}
              {...register("address", {
                required: "Address must be required",
              })}
            />
            <Input
              type="text"
              title="Country"
              label="Country"
              placeholder=""
              required={true}
              {...register("country", {
                required: "Country must be required",
              })}
            />
            <Input
              type="text"
              title="State/Province"
              label="State/Province"
              placeholder=""
              required={true}
              {...register("state/province", {
                required: "State/Province must be required",
              })}
            />
            <Input
              type="text"
              title="City"
              label="City"
              placeholder=""
              required={true}
              {...register("city", {
                required: "City must be required",
              })}
            />
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            <PiBagFill /> Job Posting
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Input
              type="text"
              title="How were you refered to us?"
              label="How were you refered to us?"
              placeholder=""
              required={true}
              {...register("How were you refered to us?", {
                required: "This Question must be required",
              })}
            />
            <Input
              type="text"
              title="City Applying For"
              label="City Applying For"
              placeholder=""
              required={true}
              {...register("City Applying For", {
                required: "This Question must be required",
              })}
            />
            <Input
              type="text"
              title="Position You are Applying For"
              label="Position You are Applying For"
              placeholder=""
              required={true}
              {...register("Position You are Applying For", {
                required: "This Question must be required",
              })}
            />
            <Input
              type="text"
              title="Type of Shift (Only for instore)"
              label="Type of Shift (Only for instore)"
              placeholder=""
              required={true}
              {...register("Type of Shift (Only for instore)", {
                required: "This Question must be required",
              })}
            />
            <Input
              type="text"
              title="Type of Employement (Only for instore)"
              label="Type of Employement (Only for instore)"
              placeholder=""
              required={true}
              {...register("Type of Employement (Only for instore)", {
                required: "This Question must be required",
              })}
            />
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            Qualification
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Input
              type="text"
              title="Degree"
              label="Degree"
              placeholder=""
              required={true}
              {...register("degree", {
                required: "Degree must be required",
              })}
            />
            <Input
              type="text"
              title="Majors"
              label="Majors"
              placeholder=""
              required={true}
              {...register("majors", {
                required: "Majors must be required",
              })}
            />
            <Input
              type="text"
              title="Qualification Year"
              label="Qualification Year"
              placeholder=""
              required={true}
              {...register("qualificationYear", {
                required: "Qualification Year must be required",
              })}
            />
            <Input
              type="text"
              title="Place of Tuition"
              label="Place of Tuition"
              placeholder=""
              required={true}
              {...register("placeOfTuition", {
                required: "Place of Tuition must be required",
              })}
            />
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            <IoIosStar /> Experience
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Input
              type="text"
              title="Total Years of Experience"
              label="Total Years of Experience"
              placeholder=""
              required={true}
              {...register("totalYearsOfExperience", {
                required: "Total Years of Experience must be required",
              })}
            />
            <Input
              type="text"
              title="Recent Position"
              label="Recent Position"
              placeholder=""
              required={true}
              {...register("recentPosition", {
                required: "Recent Position must be required",
              })}
            />
            <Input
              type="text"
              title="Recent Company"
              label="Recent Company"
              placeholder=""
              required={true}
              {...register("recentCompany", {
                required: "Recent Company must be required",
              })}
            />
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12 flex flex-col justify-start items-start gap-8">
          <h1 className="text-3xl font-bold text-center w-full">
            Applicant agreement
          </h1>
          <p>
            I certify that all information provided in this application is true
            and complete. I understand that any false information or omission
            may disqualify me from further consideration for employment and may
            result in my dismissal If discovered at a later date. I authorize
            and agree to cooperate in a thorough investigation of all statements
            made herein and other matters relating to my background and
            qualification. I understand that any investigation conducted may
            include a request for employment, educational and criminal history.
            I authorize any person, school, current and former employer,
            consumer reporting agency and any other organization or agency to
            provide information relevant to such investigation and I hereby
            release all persons and corporations requesting or supplying
            information pursuant to such investigation from all liability or
            responsibility to me for doing so. I understand that I have the
            right to make a written request within a reasonable period of time
            for complete disclosure of the nature and scope of any
            investigation. I further authorize any physician or hospital to
            release any information which may be necessary to determine my
            ability to perform the job for which I am being considered or any
            future job in the event that I am hired. I UNDERSTAND THAT THIS
            APPLICATION OR SUBSEQUENT EMPLOYMENT DOES NOT CREATE A CONTRACT OF
            EMPLOYMENT NOR GUARANTEE EMPLOYMENT FOR ANY DEFINITE PERIOD OF TIME.
          </p>
          <div className="flex justify-start items-center gap-2">
            <Checkbox className="rounded-lg" />
            <p className="text-sm">
              Sign up now to avail exclusive rewards & discounts
            </p>
          </div>
          <Button
            className="w-full md:w-[50%] mx-auto bg-red text-white"
            type="submit"
          >
            Apply
          </Button>
        </div>
      </div>
    </form>
  );
};

export default WithAuthProtection(Careers, false);
