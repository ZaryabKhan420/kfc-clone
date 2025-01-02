import React from "react";
import { WithAuthProtection, Input, Select } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    control,
    reset,
  } = useForm();

  const navigate = useNavigate();
  const kfcLocations = [
    "KFC Karachi (Shahrah-e-Faisal)",
    "KFC Karachi (DHA Phase 6)",
    "KFC Lahore (Ferozepur Road)",
    "KFC Lahore (DHA Phase 5)",
    "KFC Islamabad (Blue Area)",
    "KFC Islamabad (F-10 Markaz)",
    "KFC Rawalpindi (Murree Road)",
    "KFC Rawalpindi (The Mall Road)",
    "KFC Faisalabad (Satyana Road)",
    "KFC Faisalabad (Millat Road)",
    "KFC Multan (Bohar Gate)",
    "KFC Multan (City Road)",
    "KFC Sialkot (Kachehri Road)",
    "KFC Sialkot (Rangpura Road)",
    "KFC Gujranwala (Gulshan-e-Iqbal)",
    "KFC Gujranwala (Nishtar Road)",
    "KFC Peshawar (University Road)",
    "KFC Peshawar (Fazal Town)",
    "KFC Quetta (Jinnah Road)",
    "KFC Quetta (Hazara Town)",
    "KFC Hyderabad (Main Road)",
    "KFC Hyderabad (Latifabad)",
    "KFC Sargodha (College Road)",
    "KFC Sargodha (Circular Road)",
    "KFC Sukkur (Boys School Road)",
    "KFC Sukkur (Sikandarabad)",
    "KFC Bahawalpur (Dera Adda)",
    "KFC Bahawalpur (New Shaheen Bazaar)",
    "KFC Mardan (Saddar Bazaar)",
    "KFC Abbottabad (Mansehra Road)",
    "KFC Mirpur (Chak Road)",
    "KFC Gujrat (Kacheri Chowk)",
    "KFC Gujrat (G.T. Road)",
    "KFC Jhelum (City Centre)",
    "KFC Dera Ghazi Khan (Ameer Road)",
    "KFC Chiniot (Circular Road)",
    "KFC Kasur (Dina Road)",
    "KFC Okara (Railway Road)",
    "KFC Mianwali (Mianwali Road)",
    "KFC Nowshera (Main Bazaar)",
    "KFC Chakwal (Lala Rukh Chowk)",
    "KFC Attock (Hussain Chowk)",
    "KFC Khushab (Bhaiwala)",
    "KFC Toba Tek Singh (Sargodha Road)",
    "KFC Sahiwal (Bazar Hakeem)",
    "KFC Narowal (Main Bazar)",
    "KFC Bhakkar (Hafeez Road)",
    "KFC Larkana (Gulshan-e-Iqbal)",
    "KFC Jacobabad (Saddar)",
    "KFC Khairpur (Taluka Road)",
    "KFC Nawabshah (Sherwani Chowk)",
    "KFC Mirpur Khas (Hussainabad)",
    "KFC Thatta (National Highway)",
    "KFC Badin (M.R. Road)",
    "KFC Dadu (Latifabad)",
    "KFC Shikarpur (Islamabad Road)",
    "KFC Ghotki (National Highway)",
    "KFC Mithi (Mithi Bazaar)",
    "KFC Umerkot (Umerkot Fort)",
    "KFC Jhang (Circular Road)",
    "KFC Mianwali (Saddar Bazaar)",
    "KFC Bhakkar (City Centre)",
    "KFC Sargodha (Shaheen Chowk)",
    "KFC Khushab (Chak 17)",
    "KFC Attock (Shahbaz Chowk)",
    "KFC Chakwal (Chakwal Bazar)",
    "KFC Nowshera (College Road)",
    "KFC Swabi (Namak Mandi)",
    "KFC Charsadda (Karachi Bazar)",
    "KFC Kohat (Dheri Road)",
    "KFC Hangu (Main Bazar)",
    "KFC Bannu (Main Road)",
    "KFC Dera Ismail Khan (Khan Road)",
    "KFC Tank (Main Market)",
    "KFC Lakki Marwat (Bazaar Chowk)",
    "KFC Kohlu (Town Center)",
    "KFC Sibi (Bahria Town)",
    "KFC Zhob (Jinnah Road)",
    "KFC Loralai (Qazi Market)",
    "KFC Dera Bugti (Laiqabad)",
    "KFC Jhal Magsi (Magsi Road)",
    "KFC Kech (Kech Town)",
    "KFC Awaran (Main Market)",
    "KFC Kalat (Balochistan Bazaar)",
    "KFC Lasbela (Lasbela Mall)",
    "KFC Kohistan (Gulab Road)",
    "KFC Shangla (Shangla Bazaar)",
    "KFC Buner (Buner Road)",
    "KFC Lower Dir (Dir Chowk)",
    "KFC Upper Dir (Gandigar Road)",
    "KFC Chitral (Chitral Bazaar)",
    "KFC Swat (Saidu Sharif)",
    "KFC Malakand (Mingora)",
    "KFC Kohistan (Dawar Road)",
    "KFC Shangla (Kohistan Road)",
    "KFC Buner (Main Street)",
    "KFC Lower Dir (Fazal Road)",
    "KFC Upper Dir (Dir Chowk)",
    "KFC Chitral (Chitral Main Road)",
    "KFC Swat (Mingora Bazaar)",
    "KFC Malakand (Malam Jabba Road)",
    "KFC Kohistan (Dawar Town)",
    "KFC Shangla (Shangla Road)",
    "KFC Buner (Buner Chowk)",
    "KFC Lower Dir (Main Market)",
    "KFC Upper Dir (Dir Bazaar)",
    "KFC Chitral (Kalim Gali)",
    "KFC Swat (Saidu Sharif Road)",
    "KFC Malakand (Mingora Road)",
  ];

  const handleFeedbackSubmit = (data) => {
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
      className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh] "
      onSubmit={handleSubmit(handleFeedbackSubmit)}
    >
      <div className="container py-12 heading">
        <div className="flex justify-between items-start heading flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:bg-red transition-all duration-300 ease-linear"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl font-bold">Have Some Feedback To Share?</h1>
            <h2 className="text-2xl text-red">
              Well, you’ve come to the right place!
            </h2>
            <p className="md:w-[55%] text-center text-md">
              Fill in the sections below and we'll be in touch soon, or if you
              want to contact a specific store, visit our locations page for
              store contact details. * indicates a required answer
            </p>
          </div>
          <div className="opacity-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8">
          <div className="bg-white dark:bg-bgButtonDark p-5 rounded-md flex flex-col justify-start items-start gap-3">
            <h1 className="text-2xl font-bold">Contact Details</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5">
              <div className="w-full">
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
                {errors?.fullName && (
                  <p className="text-red text-sm">
                    {errors?.fullName?.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  title="Phone Number (3xxxxxxxxx)"
                  label="Phone Number (3xxxxxxxxx)"
                  required={true}
                  placeholder=""
                  isPhoneInput={true}
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
            </div>
            <div className="w-full">
              <Input
                type="email"
                title="Email"
                label="Email"
                required={true}
                placeholder=""
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors?.email && (
                <p className="text-red text-sm">{errors?.email?.message}</p>
              )}
            </div>
            <div className="w-full">
              <Input
                type="text"
                title="Order ID"
                label="Order ID"
                placeholder=""
                required={true}
                {...register("orderId", {
                  required: "Order ID is required",
                })}
              />
              {errors?.orderId && (
                <p className="text-red text-sm">{errors?.orderId?.message}</p>
              )}
            </div>
            <div className="w-full">
              <Controller
                name="feedbackChannel"
                control={control}
                defaultValue="Dine In"
                rules={{ required: "Feedback Channel must be required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    title="FEEDBACK CHANNEL"
                    required={true}
                    options={[
                      "Dine In",
                      "Take Away",
                      "Delivery",
                      "Pickup",
                      "Drive Thru",
                    ]}
                  />
                )}
              />
              {errors?.feedbackChannel && (
                <p className="text-red text-sm">
                  {errors?.feedbackChannel?.message}
                </p>
              )}
            </div>
          </div>
          <div className="bg-white dark:bg-bgButtonDark p-5 rounded-md flex flex-col justify-start items-start gap-3">
            <h1 className="text-2xl font-bold">About Your Visit</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5">
              <div className="w-full">
                <Controller
                  name="store"
                  control={control}
                  defaultValue={kfcLocations[0]}
                  rules={{ required: "Store must be required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      title="SELECT STORE"
                      required={true}
                      options={kfcLocations}
                    />
                  )}
                />
                {errors?.store && (
                  <p className="text-red text-sm">{errors?.store?.message}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  type="date"
                  title="DATE"
                  label="DATE"
                  placeholder=""
                  required={true}
                  isDateInput="true"
                  {...register("date", {
                    required: "Date must be required",
                  })}
                />
                {errors?.date && (
                  <p className="text-red text-sm">{errors?.date?.message}</p>
                )}
              </div>
            </div>
            <div className="w-full">
              <Controller
                name="feedbackType"
                control={control}
                defaultValue="Comments"
                rules={{ required: "Feedback Type must be required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    title="FEEDBACK TYPE"
                    required={true}
                    options={["Comments", "Suggestions", "Questions"]}
                  />
                )}
              />
              {errors?.feedbackType && (
                <p className="text-red text-sm">
                  {errors?.feedbackType?.message}
                </p>
              )}
            </div>
            <div className="w-full h-full">
              <Controller
                name="feedbackMessage"
                control={control}
                defaultValue=""
                rules={{ required: "Feedback Message is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="feedback-message"
                    className="w-full h-full bg-[#C2C3C5] dark:bg-[#242120] rounded-md p-2 outline-blue-300 text-md"
                    placeholder="FEEDBACK MESSAGE"
                  ></textarea>
                )}
              />
              {errors?.feedbackMessage && (
                <p className="text-red text-sm">
                  {errors?.feedbackMessage?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            className="bg-red text-white w-full md:w-[30%] lg:w-[20%] py-6"
            disabled={false}
            type="submit"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </form>
  );
};

export default WithAuthProtection(Feedback, false);
