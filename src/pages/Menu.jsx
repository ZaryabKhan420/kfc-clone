import React, { useEffect, useState } from "react";
import {
  WithAuthProtection,
  PrimaryHeading,
  TopDealsComponent,
} from "../components/index";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("section-1");
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });
        if (visibleSection) setActiveSection(visibleSection);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const everyDayData = [
    {
      id: 1,
      title: "Krunch Burger",
      description:
        "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame",
      price: 310,
      img: "/asset 90.png",
    },
    {
      id: 2,
      title: "Zingeratha",
      description:
        "Tender boneless strips, sliced onions, tangy imli chutney, mint",
      price: 390,
      img: "/asset 91.png",
    },
    {
      id: 3,
      title: "Rice & Spice",
      description:
        "Spiced and buttery rice with 6 pcs of Hot Shots topped with our",
      price: 390,
      img: "/asset 92.png",
    },
    {
      id: 4,
      title: "Krunch Burger + Drink",
      description: "1 Krunch burger + 1 Regular drink",
      price: 410,
      img: "/asset 93.png",
    },
    {
      id: 5,
      title: "Boneless Strips",
      description: "3 Chicken strips for a hassle free boneless experience",
      price: 440,
      img: "/asset 94.png",
    },
    {
      id: 6,
      title: "Twister",
      description: "Tender boneless strips, black pepper mayo, diced tomatoes",
      price: 440,
      img: "/asset 35.png",
    },
    {
      id: 7,
      title: "Krunch Combo",
      description: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
      price: 590,
      img: "/asset 36.png",
    },
    {
      id: 8,
      title: "Chicken & Chips",
      description:
        "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll",
      price: 620,
      img: "/asset 37.png",
    },
    {
      id: 9,
      title: "Krunch Chicken Combo",
      description:
        "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 Regular",
      price: 620,
      img: "/asset 38.png",
    },
    {
      id: 10,
      title: "3 Pcs Chicken",
      description: "3 pieces of Hot and Crispy Fried Chicken",
      price: 690,
      img: "/asset 39.png",
    },
    {
      id: 11,
      title: "Twister Combo",
      description: "Twister + 1 Regular fries + 1 Regular drink",
      price: 710,
      img: "/asset 40.png",
    },
  ];
  const alaCarteData = [
    {
      id: 1,
      title: "Zinger Burger",
      description:
        "Our hero- crispy Zinger fillet, signature mayo and lettucee",
      price: 600,
      img: "/asset 41.png",
    },
    {
      id: 2,
      title: "Zinger Stacker",
      description:
        "Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese",
      price: 660,
      img: "/asset 42.png",
    },
    {
      id: 3,
      title: "Kentucky Burger",
      description:
        "OG Zinger fillet layered with beef pepperoni, crispy fried onions,",
      price: 660,
      img: "/asset 43.png",
    },
    {
      id: 4,
      title: "Mighty Zinger",
      description: "Our signature Zinger but Bigger! Double Zinger fillet",
      price: 770,
      img: "/asset 44.png",
    },
    {
      id: 5,
      title: "Zinger Combo",
      description: "Zinger burger + 1 Regular fries+ 1 Regular drink",
      price: 910,
      img: "/asset 45.png",
    },
    {
      id: 6,
      title: "Zinger Stacker Combo",
      description: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
      price: 950,
      img: "/asset 46.png",
    },
    {
      id: 7,
      title: "Kentucky Burger Combo",
      description: "Kentucky burger + 1 Regular fries+ 1 Regular drink",
      price: 950,
      img: "/asset 47.png",
    },
    {
      id: 8,
      title: "Mighty Zinger Combo",
      description: "Mighty Zinger+ 1 Regular fries + 1 Regular drink",
      price: 1050,
      img: "/asset 48.png",
    },
  ];
  const promotionData = [
    {
      id: 1,
      title: "It’s 3rilling!",
      description: "3 Zinger Burgers +3 Chicken Drumsticks+ 1 Fries Bucket",
      price: 1690,
      img: "/asset 49.png",
    },
  ];

  const signatureBoxesData = [
    {
      id: 1,
      title: "Crispy Box",
      description:
        "In mood for something crispy? Get 2 pcs Hot & Crispy Chicken e",
      price: 710,
      img: "/asset 50.png",
    },
    {
      id: 2,
      title: "Boneless Box",
      description: "Hassle free boneless experience with 4 Chicken strips",
      price: 710,
      img: "/asset 51.png",
    },
    {
      id: 3,
      title: "Wow Box",
      description:
        "Feel good with 1 Signature Zinger + 1 pc Hot & Crispy Chicken",
      price: 1050,
      img: "/asset 52.png",
    },
    {
      id: 4,
      title: "Crispy Duo Box",
      description:
        "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large friest",
      price: 1350,
      img: "/asset 53.png",
    },
    {
      id: 5,
      title: "Xtreme Duo Box",
      description: "The irresistible combo of 2 Signature Zingers + 2 pcs ",
      price: 1560,
      img: "/asset 54.png",
    },
  ];

  const sharingData = [
    {
      id: 1,
      title: "Value Bucket",
      description:
        "Our pride and joy: hand-breaded and fried to perfection in house.",
      price: 2050,
      img: "/asset 55.png",
    },
    {
      id: 2,
      title: "Family Festival 1",
      description: "A feel-good meal for the fam. It includes 4 Krunch burgers",
      price: 2190,
      img: "/asset 56.png",
    },
    {
      id: 3,
      title: "Family Festival 2",
      description: "A hearty meal for the fam. It includes 2 Zinger burgers",
      price: 2390,
      img: "/asset 57.png",
    },
    {
      id: 4,
      title: "Family Festival 3",
      description: "An ultimate meal for the fam. It includes 4 Zinger burgers",
      price: 2590,
      img: "/asset 58.png",
    },
  ];
  const snacksData = [
    {
      id: 1,
      title: "Dinner Roll",
      description: "Soft and fluffy, it complements any meal perfectly",
      price: 50,
      img: "/asset 59.png",
    },
    {
      id: 2,
      title: "Mayo Dip",
      description: "Creamy mayo for your dipping needs",
      price: 50,
      img: "/asset 60.png",
    },
    {
      id: 3,
      title: "Vietnamese Dip",
      description: "Our spicy and sour signature sauce. Pair it with our fried",
      price: 50,
      img: "/asset 61.png",
    },
    {
      id: 4,
      title: "Mineral Water 500ml",
      description: "Mineral Water 500ml: Stay hydrated with our refreshing",
      price: 90,
      img: "/asset 62.png",
    },
    {
      id: 5,
      title: "Coleslaw",
      description: "Sliced cabbage and carrots tossed in mayo",
      price: 150,
      img: "/asset 63.png",
    },
    {
      id: 6,
      title: "Pepsi Regular",
      description:
        "Pepsi Regular: Quench your thirst with the classic taste of Pepsi",
      price: 180,
      img: "/asset 64.png",
    },
    {
      id: 7,
      title: "7UP Regular",
      description:
        "7UP Regular: Experience the crisp and refreshing taste of 7UP",
      price: 180,
      img: "/asset 65.png",
    },
    {
      id: 8,
      title: "Mountain Dew Regular",
      description: "Mountain Dew Regular: Energize yourself with the bold",
      price: 180,
      img: "/asset 66.png",
    },
    {
      id: 9,
      title: "1.5 Ltr Drink",
      description:
        "Get a large serving of refreshment with our 1.5 Ltr Drink at KFC",
      price: 250,
      img: "/asset 67.png",
    },
    {
      id: 10,
      title: "Corn On The Cob",
      description: "Boiled sweet corn brushed with butter",
      price: 290,
      img: "/asset 68.png",
    },
    {
      id: 11,
      title: "One Piece Chicken",
      description: "1 piece of Hot & Crispy Fried Chicken",
      price: 320,
      img: "/asset 69.png",
    },
    {
      id: 12,
      title: "Fries",
      description: "Crispy and Golden Fries",
      price: 340,
      img: "/asset 70.png",
    },
    {
      id: 13,
      title: "Masala Fries",
      description: "Masala Crispy and Golden Fries",
      price: 360,
      img: "/asset 71.png",
    },
    {
      id: 14,
      title: "Chicky Meal 1",
      description: "Krunch + Chicky Fries + Drink",
      price: 550,
      img: "/asset 72.png",
    },
    {
      id: 15,
      title: "Chicky Meal 2",
      description: "4 Nuggets + 1 CHICKY FRIES+ Slice",
      price: 550,
      img: "/asset 73.png",
    },
    {
      id: 16,
      title: "Plain Nuggets",
      description:
        "Plain Nuggets: Indulge in 6 pieces of tender and delicious chicken",
      price: 580,
      img: "/asset 74.png",
    },
    {
      id: 17,
      title: "Spicy Nuggets",
      description:
        "Spicy Nuggets: Savor the flavor with 6 pieces of mouthwatering",
      price: 580,
      img: "/asset 75.png",
    },
    {
      id: 18,
      title: "Buffalo Wings",
      description:
        "8 Pcs of Hot Wings coated with a spicy Buffalo sauce, topped",
      price: 640,
      img: "/asset 76.png",
    },
    {
      id: 19,
      title: "Thai Sweet Chili Wings",
      description:
        "8 Pcs of Hot Wings coated with a Sweet Thai Chili sauce, topped",
      price: 640,
      img: "/asset 77.png",
    },
    {
      id: 20,
      title: "Tangy Masala Wings",
      description: "8 pcs of Hot Wings coated in a sweet and tangy sauce,",
      price: 640,
      img: "/asset 78.png",
    },
  ];

  const midNightData = [
    {
      id: 1,
      title: "Midnight Deal 1",
      description: "1 Zinger burger + 1 regular drink",
      price: 520,
      img: "/asset 85.png",
    },
    {
      id: 2,
      title: "Midnight Deal 2",
      description: "2 Krunch burgers + 2 regular drinks",
      price: 610,
      img: "/asset 86.png",
    },
    {
      id: 3,
      title: "Midnight Deal 3",
      description: "Mighty Zinger + Regular drink",
      price: 710,
      img: "/asset 87.png",
    },
  ];

  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5  min-h-[100vh] overflow-y-hidden overflow-x-hidden">
      <div className="w-full">
        {/* Navigation Bar */}
        <div className="sticky top-0 z-10 stickyHeader container">
          <div className="md:flex justify-around flex-wrap p-4 max-w-[1000px] mx-auto hidden">
            {[
              "Everyday Value",
              "Ala-Carte-&-Combos",
              "Promotion",
              "Signature-Boxes",
              "Sharing",
              "Snacks-&-Beverages",
              "Midnight (Start at 12am)",
            ].map((option, index) => (
              <Button
                key={index}
                onClick={() => {
                  const section = document.getElementById(
                    `section-${index + 1}`
                  );
                  const parent = document.querySelector(
                    ".scrollable-container"
                  ); // Adjust selector to match your scrollable container
                  const headerHeight =
                    document.querySelector(".stickyHeader")?.offsetHeight || 0;

                  if (section && parent) {
                    const sectionTop = section.offsetTop; // Position relative to parent
                    const scrollPosition = sectionTop - headerHeight - 10; // Adjust for navbar height and margin

                    // Scroll the parent container
                    parent.scrollTo({
                      top: scrollPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`px-4 mt-3 py-2 rounded ${
                  activeSection === `section-${index + 1}`
                    ? "bg-red text-white"
                    : "bg-white text-black dark:bg-bgButtonDark dark:text-white"
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container ">
          <div className="grid grid-cols-7 gap-4 mt-4 py-5">
            {/* Scrollable Items Section */}
            <div className="col-span-7 xl:col-span-5 overflow-y-auto border-r pr-4 py-5 pb-48 sm:pb-32 mb-12 scrollable-container">
              <div className="scroll-section" id="section-1">
                <PrimaryHeading title="EVERYDAY VALUE" />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full py-8 pb-16">
                  {everyDayData.map((data, index) => (
                    <TopDealsComponent
                      title={data.title}
                      description={data.description}
                      img={data.img}
                      price={data.price}
                      key={data.id}
                      className="w-full sm:w-[17rem] my-3"
                    />
                  ))}
                </div>
              </div>
              <div className="scroll-section" id="section-2">
                <PrimaryHeading title="ALA-CARTE-&-COMBOS" />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full py-8 pb-16">
                  {alaCarteData.map((data, index) => (
                    <TopDealsComponent
                      title={data.title}
                      description={data.description}
                      img={data.img}
                      price={data.price}
                      key={data.id}
                      className="w-full sm:w-[17rem] my-3"
                    />
                  ))}
                </div>
              </div>
              <div className="scroll-section" id="section-3">
                <PrimaryHeading title="PROMOTION" />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full py-8 pb-16">
                  {promotionData.map((data) => (
                    <TopDealsComponent
                      title={data.title}
                      description={data.description}
                      img={data.img}
                      price={data.price}
                      key={data.id}
                      className="w-full sm:w-[17rem] my-3"
                    />
                  ))}
                </div>
              </div>
              <div className="scroll-section" id="section-4">
                <PrimaryHeading title="SIGNATURE-BOXES" />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full py-8 pb-16">
                  {signatureBoxesData.map((data) => (
                    <TopDealsComponent
                      title={data.title}
                      description={data.description}
                      img={data.img}
                      price={data.price}
                      key={data.id}
                      className="w-full sm:w-[17rem] my-3"
                    />
                  ))}
                </div>
              </div>
              <div className="scroll-section" id="section-5">
                <PrimaryHeading title="SHARING" />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full py-8 pb-16">
                  {sharingData.map((data) => (
                    <TopDealsComponent
                      title={data.title}
                      description={data.description}
                      img={data.img}
                      price={data.price}
                      key={data.id}
                      className="w-full sm:w-[17rem] my-3"
                    />
                  ))}
                </div>
              </div>
              <div className="scroll-section" id="section-6">
                <PrimaryHeading title="SNACKS-&-BEVERAGES" />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full py-8 pb-16">
                  {snacksData.map((data) => (
                    <TopDealsComponent
                      title={data.title}
                      description={data.description}
                      img={data.img}
                      price={data.price}
                      key={data.id}
                      className="w-full sm:w-[17rem] my-3"
                    />
                  ))}
                </div>
              </div>
              <div className="scroll-section" id="section-7">
                <PrimaryHeading title="MIDNIGHT (STARTS AT 12AM)" />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-full py-8 pb-16">
                  {midNightData.map((data) => (
                    <TopDealsComponent
                      title={data.title}
                      description={data.description}
                      img={data.img}
                      price={data.price}
                      key={data.id}
                      className="w-full sm:w-[17rem] my-3"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Fixed Cart Section */}
            <div className="col-span-2 sticky top-16 h-[calc(80vh-4rem)] w-full hidden xl:block">
              <div className="relative px-2">
                <div className="bg-white/50 dark:bg-bgButtonDark p-4 rounded-md">
                  <div className="absolute top-0 right-4 flex justify-center items-center gap-2">
                    <div className="w-4 h-5 bg-red"></div>
                    <div className="w-4 h-5 bg-red"></div>
                    <div className="w-4 h-5 bg-red"></div>
                  </div>
                  <div className="flex justify-start items-center gap-2 pb-3 border-b-2 border-b-red text-xl font-semibold">
                    <h1>{0}</h1>
                    <h1>Items Added</h1>
                  </div>
                  <div className="my-5 bg-white dark:bg-bgButtonDark  rounded-md p-4">
                    <div className="w-72  mx-auto ">
                      <img
                        src="/kfc-meal-bucket.png"
                        alt="KFC BUCKET"
                        loading="lazy"
                        className="w-full object-cover"
                      />
                    </div>
                    <h1 className="text-lg text-center font-bold my-3 w-full">
                      You haven’t added any items in bucket yet
                    </h1>
                  </div>
                  <div className="my-5 bg-white dark:bg-bgButtonDark  rounded-md p-4 overflow-y-auto h-[22vh]"></div>
                  <div className="absolute bottom-8 left-0 w-full h-[4rem] bg-red rounded-t-2xl bucket-card">
                    <div className="flex justify-between items-center gap-3 h-full px-4">
                      <div className="flex justify-start items-center gap-2 text-white">
                        <h3 className="text-md">0 Item</h3>
                        <h3 className="text-lg font-bold">
                          <span>|</span> Rs 0
                        </h3>
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <h1 className="text-xl font-bold text-white">
                          View Bucket
                        </h1>
                        <button
                          className="w-8 h-8 rounded-full bg-white flex justify-center items-center"
                          onClick={() => navigate("/bucket")}
                        >
                          <MdKeyboardArrowRight className="text-black text-2xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* phone  */}

              <div className="absolute bottom-8 left-0 w-full h-[4rem] bg-red rounded-t-2xl bucket-card sm:hidden">
                <div className="flex justify-between items-center gap-3 h-full px-4">
                  <div className="flex justify-start items-center gap-2 text-white">
                    <h3 className="text-md">0 Item</h3>
                    <h3 className="text-lg font-bold">
                      <span>|</span> Rs 0
                    </h3>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <h1 className="text-xl font-bold text-white">
                      View Bucket
                    </h1>
                    <button
                      className="w-8 h-8 rounded-full bg-white flex justify-center items-center"
                      onClick={() => navigate("/bucket")}
                    >
                      <MdKeyboardArrowRight className="text-black text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(Menu, false);
