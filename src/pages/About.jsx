import React from "react";
import {
  WithAuthProtection,
  HistoryBucket,
  PakistanFactsCard,
  KFCSponsoredWork,
} from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const historyData = [
    {
      id: 1,
      date: 1890,
      description: "Harland Sanders was born",
    },
    {
      id: 2,
      date: 1930,
      description:
        "Sanders Court & Cafe was opened in front of his gas station in Corbin Kentucky",
    },
    {
      id: 3,
      date: 1940,
      description:
        "Colonel Sanders develops the Original Recipe from 11 secret herbs and spices",
    },
    {
      id: 4,
      date: 1952,
      description:
        "The Colonel begins franchising his business travelling from town to town and cooking for restaurant owners",
    },
    {
      id: 5,
      date: 1957,
      description: "Kentucky Fried Chicken is first sold in buckets",
    },
    {
      id: 6,
      date: 1964,
      description: "More than 600 franchised outlets in the USA, Canda and UK",
    },
    {
      id: 7,
      date: 1974,
      description: "KFC first launches in Kuwait",
    },
    {
      id: 8,
      date: 1980,
      description:
        "Colonel Sanders passes away at the age of 90. His legacy lives on.",
    },
    {
      id: 9,
      date: "Today",
      description:
        "Today we have more than 25,000 KFC restaurants in over 145 countries and territories around the world.",
    },
  ];
  const pakistanFacts = [
    {
      id: 1,
      img: "/asset 5.png",
      title: 1997,
      description:
        "The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.",
    },
    {
      id: 2,
      img: "/asset 6.png",
      title: 128,
      description:
        "Today KFC has grown to over 128 restaurants across the country",
    },
    {
      id: 3,
      img: "/asset 7.png",
      title: 9,
      description:
        "Giving back to the community, KFC runs 9 restaurants operated by deaf, Hearing With Heart team members",
    },
    {
      id: 4,
      img: "/asset 8.png",
      title: "9000+",
      description:
        "Our Finger Lickin’ Chicken is brought to you by the hardwork of a team of 9000+ people across Pakistan",
    },
  ];

  const KfcSponsoredWorks = [
    {
      id: 1,
      img: "/asset 10.png",
      description:
        "Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students",
    },
    {
      id: 2,
      img: "/asset 11.jpeg",
      description:
        "Proudly running the Deaf Reach KFC Campus and providing education and training to 340 deaf students",
    },
    {
      id: 3,
      img: "/asset 12.png",
      description:
        "Sponsoring higher education of 200+ students across HEC recognized universities in Pakistan",
    },
    {
      id: 4,
      img: "/asset 13.png",
      description:
        "Supporting TEGS – KFC Campus to provide quality education to students in Lahore",
    },
  ];
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh] ">
      <div className="container py-12 heading">
        <div className="flex justify-between items-start heading flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:bg-red transition-all duration-300 ease-linear"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold">About Us</h1>
          </div>
          <div className="opacity-0"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-start gap-5 px-8 py-12 rounded-md bg-white dark:bg-bgButtonDark my-12">
          <div className="sm:w-[60%]">
            <h2 className=" font-bold">
              KFC entered Pakistan in 1997 and since then, it’s been a journey
              full of excitement and Finger Lickin’ goodness! The first KFC
              restaurant opened in Pakistan opened in Gulshan Iqbal, Karachi and
              now our Finger Lickin’ Chicken is available in 37 cities with over
              128 restaurants! Being the most loved fast food chain in Pakistan,
              KFC leaves no stone unturned to provide its customers the most
              delicious chicken and an excellent dining experience.
            </h2>
          </div>
          <div className="bg-red flex justify-center items-center rounded-md px-6 py-16 sm:w-[40%]">
            <h2 className="text-white font-bold text-center">
              WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
              INGREDIENTS FROM TRUSTED SUPPLIERS
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 py-12 rounded-md bg-white dark:bg-bgButtonDark my-12">
          <div className="  col-span-1">
            <img
              src="/asset 3.png"
              alt="Founder KFC"
              loading="lazy"
              className="w-full rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2 rounded-md px-5 py-12 col-span-1 md:col-span-2">
            <h1 className="font-bold text-center text-2xl">History</h1>
            <h2>
              It all started with Colonel Harland Sanders, the man who convinced
              the world by saying “We do chicken right!” Sanders took a great
              deal of time perfecting his iconic secret recipe of 11 herbs and
              spices, a legacy he’s brought to the world through KFC’s 10,000+
              restaurants. Starting from outside of his gas station in Korbin,
              Kentucky to being a globally recognized face, we owe our success
              to the Colonel’s hard work and passion for sharing his love for
              chicken with the world!
            </h2>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            The Story of World’s Best Chicken
          </h1>
          <div className="flex justify-center items-center my-5 mt-10 flex-wrap">
            {historyData.map((data) => {
              return (
                <HistoryBucket
                  Key={data.id}
                  date={data.date}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-bgButtonDark py-12">
        <div className="container">
          <h1 className="text-3xl font-bold ">Fast Facts about KFC Pakistan</h1>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10">
            {pakistanFacts.map((data) => {
              return (
                <PakistanFactsCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  img={data.img}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container my-10">
        <div className="flex flex-col justify-center items-center gap-5 p-12 bg-white dark:bg-bgButtonDark rounded-md">
          <img
            src="/asset 9.png"
            alt="KFC Mitao Bhook"
            loading="lazy"
            className="w-[28rem]"
          />
          <p className="text-center sm:w-[90%]">
            is KFC’s pledge to give back to society. Over the years we have made
            it our mission to spread the message of hope, bringing positive
            change in the lives of people and providing better living standards.
            Mitao Bhook strengthens the community on the pillars of Education,
            Inclusion & Diversity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-16 gap-6">
          {KfcSponsoredWorks.map((data) => {
            return (
              <KFCSponsoredWork
                key={data.id}
                id={data.id}
                img={data.img}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(About, false);
