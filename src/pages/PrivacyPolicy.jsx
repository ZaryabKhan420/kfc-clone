import React from "react";
import { WithAuthProtection } from "../components/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-bgLight dark:bg-black mt-16 md:mt-5 lg:mt-8 py-5 min-h-[100vh]">
      <div className="container py-12 heading">
        <div className="flex justify-between items-start flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="w-7 h-7 rounded-full border-2 border-red flex justify-center items-center hover:bg-red transition-all duration-300 ease-linear"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <div className="opacity-0"></div>
        </div>
        <p className="my-8 text-center font-light">
          KFC CORPORATION PRIVACY POLICY — YOUR PRIVACY RIGHTS <br />
          EFFECTIVE DATE: JUNE 9, 2014
        </p>

        <div className="flex flex-col justify-start items-start">
          <h1 className="text-md font-bold mt-5 mb-2">
            THIS PRIVACY POLICY APPLIES TO THE SITES
          </h1>
          <p>
            This Policy describes how we treat personal information both online
            and offline. This includes on our websites. It also includes in
            phone or email interactions you have with us.
          </p>
          <h1 className="text-md font-bold mt-5 mb-2">
            WE COLLECT INFORMATION FROM AND ABOUT YOU
          </h1>
          <ul className="list-disc ml-8">
            <li>
              Contact information. For example, we might collect your name and
              street address. We might also collect your phone number or email
              address.
            </li>
            <li>
              Payment and billing information. For example, we collect your
              credit card number and zip code when you buy one of our products.
              Information you submit or post. If you post content, apply for a
              job, or respond to a survey, we will collect the information you
              provide to us.
            </li>
            <li>
              Demographic information. We may collect information about our
              services you like or products you buy. We might collect this as
              part of a survey, for example.
            </li>
            <li>
              Other information. If you use our website, we may collect
              information about your computer location or the browser you're
              using. We might look at what site you came from, or what site you
              visit when you leave us.
            </li>
          </ul>
          <h1 className="text-md font-bold mt-5 mb-2">
            WE USE INFORMATION AS DISCLOSED AND DESCRIBED HERE
          </h1>
          <ul className="list-disc ml-8">
            <li>
              We use information to respond to your requests or questions. For
              example, we might use your information to confirm your
              registration for a program or contest, or fulfill prizes or
              premiums in a promotion. We may use your friend's email address if
              you send them features on our site.
            </li>
            <li>
              We use information to improve our products and services. We might
              use your information to customize your experience with us. We may
              use your information to make our website and products better.
            </li>
            <li>
              We use information to look at site trends and customer interests.
              We may use your information to make our website and products
              better. We may combine information we get from you with
              information about you we get from third parties.
            </li>
            <li>
              We use information for security purposes. We may use information
              to protect our company, our customers, or our websites. For
              example, in the event of a breach, we may use your contact
              information to contact you about that incident.
            </li>
            <li>
              We use information for marketing purposes. For example, we might
              send you information about special promotions or offers. We might
              also tell you about new features or products. These might be our
              own offers or products, or third-party offers or products we think
              you might find interesting. To learn about your choices for these
              communications, read the choices section below.
            </li>
            <li>
              We use information to send you transactional communications. For
              example, we might send you emails about a purchase you made with
              us. We might also contact you about this policy or our website
              terms.
            </li>
            <li>We use information as otherwise permitted by law.</li>
          </ul>
          <h1 className="text-md font-bold mt-5 mb-2">
            YOU HAVE CERTAIN CHOICES ABOUT HOW WE USE YOUR INFORMATION
          </h1>
          <ul className="list-disc ml-8">
            <li>
              You can opt out of receiving our marketing emails. To stop
              receiving our promotional emails, send a request to
              customercare@kfcpakistan.com or follow the instructions in any
              promotional message you get from us. It may take about ten (10)
              days to process your request. Don't worry! Even if you opt out of
              getting marketing messages, we will still be sure to send you
              transactional messages. For example, we may still contact you
              about your orders.
            </li>
            <li>
              You can control if we share information with third parties for
              their marketing purposes. To opt out of having us share your
              information with third parties for their promotional purposes,
              click here .
            </li>
          </ul>
          <h1 className="text-md font-bold mt-5 mb-2">
            YOU CAN GET YOUR ACCOUNT INFORMATION UPDATED OR DELETED
          </h1>
          <ul className="list-disc ml-8">
            <li>
              Any information that you want us to change or delete, for
              instance, your email address, can be requested by you. These
              requested changes will be made only after your consent, and we
              will update you regarding them. For any such requests you can
              always contact us on our support email i.e.
              customercare@kfcpakistan.com.
            </li>
            <li>
              If you want to delete your Facebook social login account from KFC
              Web & Apps, you can remove your information by following these
              steps:
            </li>
            <ol className="list-decimal ml-8">
              <li>
                Go to your Facebook Account’s Setting & Privacy. Click
                “Settings”.
              </li>
              <li>
                Look for “Apps and Websites” and you will see all of the apps
                and websites you linked with your Facebook.
              </li>
              <li>Search and Click “KFC” in the search bar.</li>
              <li>Scroll and click “Remove”.</li>
              <li>
                Congratulations, you have successfully removed your app
                activities and data from the KFC platform.
              </li>
            </ol>
            <li>
              Once your account has been deleted after your approval, you will
              lose all the information associated with that account e.g.
              Addresses, Past Orders.
            </li>
          </ul>
          <h1 className="text-md font-bold mt-5 mb-2">
            WE USE INFORMATION AS DISCLOSED AND DESCRIBED HERE
          </h1>
          <ul className="list-disc ml-8">
            <li>
              Our sites are meant for adults. We do not knowingly collect
              personally identifiable information from children under 13 without
              permission from a parent or guardian. If you are a parent or legal
              guardian and think your child under 13 has given us information,
              you can email us here . You can also write to us at the address
              listed at the end of this policy. Please mark your inquiries
              "COPPA Information Request."
            </li>
            <li>
              Parents, you can also learn more about how to protect children's
              privacy online here .
            </li>
          </ul>
          <h1 className="text-md font-bold mt-5 mb-2">
            WE USE INFORMATION AS DISCLOSED AND DESCRIBED HERE
          </h1>
          <p>
            From time to time we may change our privacy practices. We will
            notify you of any material changes to this policy as required by
            law. We will also post an updated copy on our website. Please check
            our site periodically for updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithAuthProtection(PrivacyPolicy, false);
