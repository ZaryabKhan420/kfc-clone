import React from "react";
import { WithAuthProtection } from "../components/index";
const MitaoBhook = () => {
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-16">
      <img
        src="/mitaoBhookCover.png"
        alt="Mitaoo Bhook"
        loading="lazy"
        className="w-full"
      />
      <div className="container my-16">
        <img
          src="/asset 24.png"
          alt="KFC MITAOO BHOOK"
          loading="lazy"
          className="w-full"
        />
        <h1 className="text-3xl font-bold text-center uppercase my-16 sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          Mitao Bhook focuses on three key pillars to create sustainable
          positive ecosystem in <span className="text-green-500">pakistan</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <img
            src="/asset 17.png"
            alt="Education"
            loading="lazy"
            className="w-full"
          />
          <img
            src="/asset 19.png"
            alt="Diversity"
            loading="lazy"
            className="w-full"
          />
          <img
            src="/asset 26.png"
            alt="Inclusion"
            loading="lazy"
            className="w-full"
          />
        </div>
        <img src="/asset 20.png" alt="KFC BUCKET" loading="lazy" />
        <h1 className="font-bold text-2xl uppercase text-center p-2">
          KFC Donates Rs 50 from the sales of every value bucket to mitao
          bhookand has spent over <span className="text-red">$2 Million</span>{" "}
          Towards social effrots in the country TOGETHER, WE’RE CREATIN
        </h1>
      </div>
      <div className="bg-white dark:bg-bgButtonDark py-16">
        <h1 className="text-4xl font-bold text-center uppercase p-2">
          Together, We’re creating impact and changing lives
        </h1>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 sm:my-32">
          <img
            src="/asset 21.png"
            alt="Education"
            loading="lazy"
            className="w-full order-2 md:order-1"
          />
          <div className="flex flex-col justify-center items-start gap-5 ml-5 order-1 md:order-2">
            <h1 className="text-4xl font-bold uppercase text-center lg:text-left w-full">
              Education
            </h1>
            <h2 className="text-2xl lg:w-[65%] text-center lg:text-left ">
              With a commitment to learning, KFC Mitao Bhook has supported the
              education of <span className="text-red"> 6313 students </span>,
              fostering academic growth and development.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 sm:my-32">
          <div className="flex flex-col justify-center items-start gap-5 ml-5 order-1">
            <h1 className="text-4xl font-bold uppercase text-center lg:text-left w-full">
              Diversity
            </h1>
            <h2 className="text-2xl lg:w-[65%] text-center lg:text-left">
              Promoting gender equality, KFC Mitao Bhook boasts a remarkable{" "}
              <span className="text-red">62% female</span> ratio in its
              educational initiatives, creating an inclusive and diverse
              learning environment.
            </h2>
          </div>
          <img
            src="/asset 22.png"
            alt="Education"
            loading="lazy"
            className="w-full order-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 sm:my-32">
          <img
            src="/asset 23.png"
            alt="Education"
            loading="lazy"
            className="w-full order-2 md:order-1"
          />
          <div className=" flex flex-col justify-center items-start gap-5 ml-5 order-1 md:order-2">
            <h1 className="text-4xl font-bold uppercase text-center lg:text-left w-full">
              INCLUSION
            </h1>
            <h2 className="text-2xl lg:w-[65%] text-center lg:text-left ">
              KFC Mitao Bhook is dedicated to educating{" "}
              <span className="text-red"> 2015 persons </span> with
              disabilities, empowering them with knowledge and skills.
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[35rem] sm:h-[30rem] md:h-[25rem] lg:h-[22rem] relative mx-auto">
        <img
          src="/asset 25.png"
          alt="Students"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="container absolute flex flex-col justify-center items-center gap-8 text-white top-0 left-[50%] translate-x-[-50%] w-full h-full text-center">
          <h2 className="text-2xl font-bold sm:w-[80%]">
            {" "}
            KFC SCORE A SCHOLARSHIP PROGRAM READY TO FULFIL YOUR EDUCATION
            DREAMS!
          </h2>
          <h3 className="text-lg font-bold sm:w-[80%]">
            KFC Pakistan’s Mitao Bhook Platform is providing 200+ higher
            education scholarships to deserving students across all HEC
            recognized institutes in Pakistan. This is done in collaboration
            with The Orange Tree foundation, an education advocate working to
            further education in the country. Higher education gives you, the
            Pakistani youth, an opportunity to succeed in today’s global economy
            and KFC Pakistan is excited to enable the dreams of hundreds of
            Pakistani scholars embarking on this journey.
          </h3>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center my-24 container p-2">
        Higher education gives you, the Pakistani Youth, an opportunity to
        succeed in today’s global economy and KFC Pakistan is excited to enable
        the dreams of hundreds of Pakistani scholars embarking on this journey.
      </h1>
    </div>
  );
};

export default WithAuthProtection(MitaoBhook, false);
