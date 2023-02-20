import React from "react";
import EmailForm from "./EmailForm";
import heroImage from "../images/heroImage.svg";

export default function LandingPage() {
  return (
    <>
      <div
        id="hero section"
        className=" bg-altbackground w-[100vw] h-60 lg:h-[65vh] flex items-center justify-center"
      >
        <div id="hero" className="lg:w-[50vw]">
          <h1 className="font-headerFont text-white text-xl lg:text-7xl mb-2 lg:mb-5">
            Your interests, your inbox
          </h1>
          <h2 className="font-bodyFont text-primarytext text-sm lg:text-2xl lg:mb-3">
            Optimize your mornings with a free personalized newsletter on the
            content you care about
          </h2>
          <EmailForm></EmailForm>
          <h3 className="font-bodyFont text-primarytext text-sm lg:text-xl">
            Provide your email to join our waitlist.
          </h3>
        </div>
        <div
          id="heroImgHolder"
          className="w-[50vw] hidden lg:flex items-end justify-center h-[65vh]"
        >
          <img src={heroImage} alt="happy reader" className="h-[60vh]"></img>
        </div>
      </div>
      <div id="about us" className="mb-20">
        <div className="flex items-center justify-center w-[100vw]">
          <div className="w-[90vw] lg:w-[60vw] bg-primarytext p-5 rounded-lg mt-10">
            <h1 className="font-headerFont text-secondary text-2xl lg:text-7xl mb-2 lg:mb-10">
              About YouLetter
            </h1>
            <p className="font-bodyFont text-md lg:text-xl">
              "Welcome to our personalized newsletter, powered by AI! Every
              week, we bring you the most relevant and engaging content,
              tailored specifically to your interests. Whether you're interested
              in science and technology, business and finance, or just want to
              stay up-to-date on the latest trends, our AI algorithms ensure
              that you'll receive a newsletter that's truly personalized to you.
              But that's not all - our AI technology also analyzes your reading
              habits and suggests articles and resources that we think you'll
              love. With our personalized newsletter, you'll never have to wade
              through irrelevant content again. So why wait? Sign up now and
              start receiving a newsletter that's truly tailored to your
              interests and preferences. We can't wait to share all the amazing
              content we have in store for you!"
            </p>
          </div>
        </div>
      </div>
      <div
        id="3ColDescriptions"
        className="mb-20 w-[100vw] flex items-center justify-center"
      >
        <div className="flex justify-around flex-wrap w-[90vw] lg:w-[70vw]">
          <div className="flex flex-col w-[90vw] lg:w-96 bg-primarytext p-5 mb-5 xlg:mb-0 rounded-lg">
            <img src={heroImage} alt="happy reader" className="h-[15vh]"></img>
            <h1 className="font-headerFont text-secondary text-2xl mb-2">
              Perk Title
            </h1>
            <p className="font-bodyFont text-md lg:text-xl">
              "Welcome to our personalized newsletter, powered by AI! Every
              week, we bring you the most relevant and engaging content,
              tailored specifically to your interests. Whether you're interested
              in science and technology, business and finance, or just want to
              stay up-to-date on the latest trends, our AI algorithms ensure
              that you'll receive a newsletter that's truly personalized to you.
              But that's not all - our AI technology also analyzes your reading
              habits and suggests articles and resources that we think you'll
              love. With our personalized newsletter, you'll never have to wade
              through irrelevant content again. So why wait? Sign up now and
              start receiving a newsletter that's truly tailored to your
              interests and preferences. We can't wait to share all the amazing
              content we have in store for you!"
            </p>
          </div>
          <div className="flex flex-col w-[90vw] lg:w-96 bg-primarytext p-5 mb-5 xlg:mb-0 rounded-lg">
            <img src={heroImage} alt="happy reader" className="h-[15vh]"></img>
            <h1 className="font-headerFont text-secondary text-2xl mb-2">
              Perk Title
            </h1>
            <p className="font-bodyFont text-md lg:text-xl">
              "Welcome to our personalized newsletter, powered by AI! Every
              week, we bring you the most relevant and engaging content,
              tailored specifically to your interests. Whether you're interested
              in science and technology, business and finance, or just want to
              stay up-to-date on the latest trends, our AI algorithms ensure
              that you'll receive a newsletter that's truly personalized to you.
              But that's not all - our AI technology also analyzes your reading
              habits and suggests articles and resources that we think you'll
              love. With our personalized newsletter, you'll never have to wade
              through irrelevant content again. So why wait? Sign up now and
              start receiving a newsletter that's truly tailored to your
              interests and preferences. We can't wait to share all the amazing
              content we have in store for you!"
            </p>
          </div>
          <div className="flex flex-col w-[90vw] lg:w-96 bg-primarytext p-5 mb-5 xlg:mb-0 rounded-lg">
            <img src={heroImage} alt="happy reader" className="h-[15vh]"></img>
            <h1 className="font-headerFont text-secondary text-2xl mb-2">
              Perk Title
            </h1>
            <p className="font-bodyFont text-md lg:text-xl">
              "Welcome to our personalized newsletter, powered by AI! Every
              week, we bring you the most relevant and engaging content,
              tailored specifically to your interests. Whether you're interested
              in science and technology, business and finance, or just want to
              stay up-to-date on the latest trends, our AI algorithms ensure
              that you'll receive a newsletter that's truly personalized to you.
              But that's not all - our AI technology also analyzes your reading
              habits and suggests articles and resources that we think you'll
              love. With our personalized newsletter, you'll never have to wade
              through irrelevant content again. So why wait? Sign up now and
              start receiving a newsletter that's truly tailored to your
              interests and preferences. We can't wait to share all the amazing
              content we have in store for you!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
