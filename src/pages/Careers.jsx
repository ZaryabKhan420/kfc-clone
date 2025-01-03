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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Careers = () => {
  const schema = z.object({
    fullName: z
      .string()
      .min(1, "FullName is required")
      .max(20, "FullName should not be more than 20 characters"),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    countryOfBirth: z
      .string()
      .min(1, "Country Of Birth is required")
      .max(20, "Country Of Birth should not be more than 20 characters"),
    cityOfBirth: z
      .string()
      .min(1, "City Of Birth is required")
      .max(20, "City Of Birth should not be more than 20 characters"),
    cnic: z
      .string()
      .min(1, "CNIC is required")
      .refine((value) => value.length === 13, {
        message: "CNIC Should exactly 13 digits.",
      }),
    cnicExpiryDate: z.string().min(1, "CNIC Expiry Date is required"),
    maritalStatus: z.string().min(1, "Marital Status is required"),
    gender: z.string(),
    religion: z
      .string()
      .min(1, "Religion must be required")
      .max(20, "Religion should not be more than 20 characters"),
    disability: z
      .string()
      .min(1, "Disability Status must be required")
      .max(20, "Disability Status should not be more than 20 characters"),
    phone: z
      .string()
      .min(1, "Phone must be required")
      .max(10, "Phone must be exactly 10 digits."),

    address: z
      .string()
      .min(1, "Address must be required")
      .max(50, "Address should not be more than 50 characters"),

    country: z
      .string()
      .min(1, "Country must be required")
      .max(15, "Country should not be more than 15 characters"),
    stateProvince: z
      .string()
      .min(1, "State/Province must be required")
      .max(15, "State/Province should not be more than 15 characters"),
    city: z
      .string()
      .min(1, "City must be required")
      .max(10, "City should not be more than 10 characters"),

    howWereYouReferedToUs: z
      .string()
      .min(1, "This Question must be required")
      .max(20, "This Question should not be more than 20 characters"),
    cityApplyingFor: z
      .string()
      .min(1, "This Question must be required")
      .max(15, "This Question should not be more than 15 characters"),
    positionYouAreApplyingFor: z
      .string()
      .min(1, "This Question must be required")
      .max(20, "This Question should not be more than 20 characters"),

    typeOfShift: z
      .string()
      .min(1, "This Question must be required")
      .max(20, "This Question should not be more than 20 characters"),

    typeOfEmployement: z
      .string()
      .min(1, "This Question must be required")
      .max(20, "This Question should not be more than 20 characters"),

    degree: z
      .string()
      .min(1, "This Question must be required")
      .max(30, "This Question should not be more than 30 characters"),

    majors: z
      .string()
      .min(1, "This Question must be required")
      .max(50, "This Question should not be more than 50 characters"),
    qualificationYear: z
      .string()
      .min(1, "This Question must be required")
      .max(10, "This Question should not be more than 10 characters"),
    placeOfTuition: z
      .string()
      .min(1, "This Question must be required")
      .max(20, "This Question should not be more than 20 characters"),

    totalYearsOfExperience: z
      .string()
      .min(1, "This Question must be required")
      .max(15, "This Question should not be more than 15 characters"),

    recentPosition: z
      .string()
      .min(1, "This Question must be required")
      .max(20, "This Question should not be more than 20 characters"),

    recentCompany: z
      .string()
      .min(1, "This Question must be required")
      .max(20, "This Question should not be more than 20 characters"),
  });

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
    formState: { errors, isValid },
    setError,
    clearErrors,
    control,
    reset,
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });

  const handleCareerSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (!value.startsWith("3")) {
      value = "3" + value; // Ensure the first digit is always "3"
    }
    if (value.length > 10) {
      value = value.slice(0, 10); // Limit to 10 digits
    }

    if (value.length < 10) {
      setError("phone", {
        type: "Length Error",
        message: "Phone Number must be exactly 10 digits",
      });
    } else {
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
            <div className="full">
              <Input
                type="text"
                title="FULL NAME"
                label="FULL NAME"
                placeholder=""
                required={true}
                {...register("fullName")}
              />
              {errors?.fullName && (
                <p className="text-red text-sm">{errors?.fullName?.message}</p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.dateOfBirth && (
                <p className="text-red text-sm">
                  {errors?.dateOfBirth?.message}
                </p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.countryOfBirth && (
                <p className="text-red text-sm">
                  {errors?.countryOfBirth?.message}
                </p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.cityOfBirth && (
                <p className="text-red text-sm">
                  {errors?.cityOfBirth?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="number"
                title="CNIC"
                label="CNIC"
                placeholder=""
                defaultValue={0}
                required={true}
                {...register("cnic", {
                  required: "CNIC must be required",
                })}
              />
              {errors?.cnic && (
                <p className="text-red text-sm">{errors?.cnic?.message}</p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="date"
                title="CNIC Expiry Date"
                label="CNIC Expiry Date"
                placeholder=""
                required={true}
                isDateInput="true"
                {...register("cnicExpiryDate", {
                  required: "CNIC Expiry Date must be required",
                })}
              />
              {errors?.cnicExpiryDate && (
                <p className="text-red text-sm">
                  {errors?.cnicExpiryDate?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Controller
                name="maritalStatus"
                control={control}
                defaultValue="Married"
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
              {errors?.maritalStatus && (
                <p className="text-red text-sm">
                  {errors?.maritalStatus?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Controller
                name="gender"
                control={control}
                defaultValue="Male"
                render={({ field }) => (
                  <Select
                    {...field}
                    title="Gender"
                    required={false}
                    options={["Male", "Female", "Others"]}
                  />
                )}
              />
              {errors?.gender && (
                <p className="text-red text-sm">{errors?.gender?.message}</p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.religion && (
                <p className="text-red text-sm">{errors?.religion?.message}</p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.disability && (
                <p className="text-red text-sm">
                  {errors?.disability?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            <HiLocationMarker /> Address
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="w-full">
              <Input
                type="tel"
                title="Phone Number (3xxxxxxxxx)"
                label="Phone Number (3xxxxxxxxx)"
                placeholder=""
                required={true}
                defaultValue={3}
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
              {errors?.phone && (
                <p className="text-red text-sm">{errors?.phone?.message}</p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.address && (
                <p className="text-red text-sm">{errors?.address?.message}</p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.country && (
                <p className="text-red text-sm">{errors?.country?.message}</p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="text"
                title="State/Province"
                label="State/Province"
                placeholder=""
                required={true}
                {...register("stateProvince", {
                  required: "State/Province must be required",
                })}
              />
              {errors?.stateProvince && (
                <p className="text-red text-sm">
                  {errors?.stateProvince?.message}
                </p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.city && (
                <p className="text-red text-sm">{errors?.city?.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            <PiBagFill /> Job Posting
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="w-full">
              <Input
                type="text"
                title="How were you refered to us?"
                label="How were you refered to us?"
                placeholder=""
                required={true}
                {...register("howWereYouReferedToUs", {
                  required: "This Question must be required",
                })}
              />
              {errors?.howWereYouReferedToUs && (
                <p className="text-red text-sm">
                  {errors?.howWereYouReferedToUs?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="text"
                title="City Applying For"
                label="City Applying For"
                placeholder=""
                required={true}
                {...register("cityApplyingFor", {
                  required: "This Question must be required",
                })}
              />
              {errors?.cityApplyingFor && (
                <p className="text-red text-sm">
                  {errors?.cityApplyingFor?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="text"
                title="Position You are Applying For"
                label="Position You are Applying For"
                placeholder=""
                required={true}
                {...register("positionYouAreApplyingFor", {
                  required: "This Question must be required",
                })}
              />
              {errors?.positionYouAreApplyingFor && (
                <p className="text-red text-sm">
                  {errors?.positionYouAreApplyingFor?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="text"
                title="Type of Shift (Only for instore)"
                label="Type of Shift (Only for instore)"
                placeholder=""
                required={true}
                {...register("typeOfShift", {
                  required: "This Question must be required",
                })}
              />
              {errors?.typeOfShift && (
                <p className="text-red text-sm">
                  {errors?.typeOfShift?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="text"
                title="Type of Employement (Only for instore)"
                label="Type of Employement (Only for instore)"
                placeholder=""
                required={true}
                {...register("typeOfEmployement", {
                  required: "This Question must be required",
                })}
              />
              {errors?.typeOfEmployement && (
                <p className="text-red text-sm">
                  {errors?.typeOfEmployement?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            Qualification
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="w-full">
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
              {errors?.degree && (
                <p className="text-red text-sm">{errors?.degree?.message}</p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.majors && (
                <p className="text-red text-sm">{errors?.majors?.message}</p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.qualificationYear && (
                <p className="text-red text-sm">
                  {errors?.qualificationYear?.message}
                </p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.placeOfTuition && (
                <p className="text-red text-sm">
                  {errors?.placeOfTuition?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto my-12">
          <h1 className="font-bold text-2xl flex justify-start items-center gap-2">
            <IoIosStar /> Experience
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="w-full">
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
              {errors?.totalYearsOfExperience && (
                <p className="text-red text-sm">
                  {errors?.totalYearsOfExperience?.message}
                </p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.recentPosition && (
                <p className="text-red text-sm">
                  {errors?.recentPosition?.message}
                </p>
              )}
            </div>
            <div className="w-full">
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
              {errors?.recentCompany && (
                <p className="text-red text-sm">
                  {errors?.recentCompany?.message}
                </p>
              )}
            </div>
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
            <Checkbox />
            <p className="text-sm">
              Sign up now to avail exclusive rewards & discounts
            </p>
          </div>
          <Button
            className="w-full md:w-[50%] mx-auto bg-red text-white"
            type="submit"
            disabled={!isValid}
          >
            APPLY
          </Button>
        </div>
      </div>
    </form>
  );
};

export default WithAuthProtection(Careers, false);
