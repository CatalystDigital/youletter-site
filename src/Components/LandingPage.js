import React from "react";
import EmailForm from "./EmailForm";
import heroImage from "../images/heroImage.svg";
import iphoneMock from "../images/iphoneMock.svg";
import arrow from "../images/arrow.svg";
import articleSample from "../images/articleSample.svg";
import content from "../images/content.svg";
import onlineArticles from "../images/onlineArticles.svg";
import controlPanel from "../images/controlPanel.svg";
import techcrunchLogo from "../images/techcrunchLogo.svg";
import nytLogo from "../images/nytLogo.svg";
import washingtonpostLogo from "../images/washingtonpostLogo.svg";
import bbcLogo from "../images/bbcLogo.svg";

export default function LandingPage() {
  return (
    <>
      <div className=" bg-gradient-to-r from-YLBlueDark to-YLBlueLight w-screen h-60 lg:h-[80vh] flex items-center justify-center">
        <div
          id="hero section"
          className="w-screen max-w-[1536px] flex items-center justify-center"
        >
          <div
            id="hero"
            className="lg:w-1/2 flex flex-col items-center justify-center"
          >
            <h1 className="font-headerFont text-[#ffffff] text-2xl lg:text-5xl xl:text-6xl mb-2 lg:mb-3 lg:w-5/6">
              Your interests, your inbox
            </h1>
            <h2 className="font-bodyFont text-primarytext text-sm lg:text-xl xl:text-2xl lg:mb-1 w-[80%] lg:w-[85%] 2xl:w-[100%]">
              Optimize your mornings with a free personalized newsletter on the
              content you care about
            </h2>
            <EmailForm></EmailForm>
          </div>
          <div
            id="heroImgHolder"
            className="w-1/2 hidden lg:flex items-end justify-center h-[80vh]"
          >
            <img src={heroImage} alt="happy reader" className="h-4/6"></img>
          </div>
        </div>
      </div>

      <div
        id="Transition from site to newsletter section"
        className="flex flex-col items-center w-screen mt-3 md:mt-6"
      >
        <div className="flex flex-col items-center w-screen max-w-[1240px]">
          <h1 className="font-headerFont w-4/5 max-w-[1100px] text-2xl lg:text-5xl xl:text-6xl mt-1 lg:mt-7">
            {" "}
            Daily Summarized Articles Straight to your Email{" "}
          </h1>
          <div className=" flex justify-center px-5 mb-3 xl:mb-5 ">
            <div className="w-3/6 flex flex-col justify-center items-center px-4 mb-3 xl:mb-5">
              <img src={articleSample} alt="Sample article from medium"></img>
            </div>
            <div className="w-1/6 flex flex-col justify-center items-center px-4 mb-3 xl:mb-5 ">
              <img className="" src={arrow} alt="image of an arrow"></img>
            </div>
            <div className="w-2/6 flex flex-col justify-center items-center px-4 xl:mb-5">
              <img className="h-5/6" src={iphoneMock} alt="mock of "></img>
            </div>
          </div>
        </div>
      </div>

      <div
        id="The New Newsletter"
        className="flex flex-col items-center w-screen my-5 lg:my-16"
      >
        <div className="flex flex-col items-center w-screen max-w-[1240px]">
          <div className=" max-w-[1240px] w-[90vw] rounded-xl flex flex-col sm:flex-row items-center p-8 pt-5">
            <div className="sm:w-1/2 sm:mr-5">
              <h1 className="font-headerFont sm:text-left text-2xl lg:text-3xl xl:text-4xl mb-1 lg:mb-2">
                The New Newsletter
              </h1>
              <p className="sm:text-left text-md lg:text-xl xl:text-2xl font-bodyFont mb-8 sm:mb-0">
                Let’s be honest, you don't really care about half the articles
                old school newsletters send. We believe your morning newsletter
                should be as unique as you are. That’s why at Youletter we
                create a personalized newsletter based on your actual interests{" "}
              </p>
            </div>
            <div className="w-5/6 sm:w-1/2 sm:ml-5 flex flex-col items-center">
              <img src={onlineArticles} alt="happy reader" className=""></img>
            </div>
          </div>
        </div>
      </div>

      <div
        id="AI Powered Summeries"
        className="flex flex-col items-center w-screen my-5 lg:my-16"
      >
        <div className="flex flex-col items-center w-screen max-w-[1240px]">
          <div className=" max-w-[1240px] w-[90vw] rounded-xl flex flex-col-reverse sm:flex-row items-center p-8 pt-5">
            <div className="w-5/6 sm:w-1/2 sm:mr-5 flex flex-col items-center">
              <img src={content} alt="happy reader" className=""></img>
            </div>
            <div className="sm:w-1/2 sm:ml-5">
              <h1 className="font-headerFont sm:text-left text-2xl lg:text-3xl xl:text-4xl mb-1 lg:mb-2">
                AI Powered Summaries
              </h1>
              <p className="sm:text-left text-md lg:text-xl xl:text-2xl font-bodyFont mb-1">
                We utilize the newest AI Models to deliver bite-sized updates on
                the topics you care about from the sources you love.
              </p>
              <p className="sm:text-left text-md lg:text-xl xl:text-2xl font-bodyFont mb-8 sm:mb-0">
                Does a topic really catch your interest? Just click “Read More”
                - We will take you to the full article so that you can enjoy it
                in depth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Curate Your News"
        className="flex flex-col items-center w-screen my-5 lg:my-16"
      >
        <div className="flex flex-col items-center w-screen max-w-[1240px]">
          <div className=" max-w-[1240px] w-[90vw] rounded-xl flex flex-col sm:flex-row items-center p-8 pt-5">
            <div className=" sm:w-1/2 sm:mr-5">
              <h1 className="font-headerFont sm:text-left text-2xl lg:text-3xl xl:text-4xl mb-1 lg:mb-2">
                Curate your news
              </h1>
              <p className="sm:text-left text-md lg:text-xl xl:text-2xl font-bodyFont mb-8 sm:mb-0">
                Tailor your newsletter just how you like it. Simply sign in to
                your personalized dashboard to select the topics and sites you
                want to see articles from. We are constantly adding more sources
                and sites so be sure to check back often.
              </p>
            </div>
            <div className="w-5/6 sm:w-1/2 sm:ml-5 flex flex-col items-center">
              <img src={controlPanel} alt="happy reader" className=""></img>
            </div>
          </div>
        </div>
      </div>

      <div
        id="beta Notice"
        className="flex flex-col items-center my-6 w-screen mb-12 lg:mb-20"
      >
        <div className="flex flex-col items-center w-screen max-w-[1240px]">
          <div className=" border-4  border-[#FFBD13] max-w-[1240px] w-[90vw] rounded-xl flex flex-col items-center p-8 pt-5">
            <h1 className="font-headerFont text-2xl lg:text-3xl xl:text-4xl">
              BETA ROADMAP
            </h1>
            <p className="w-5/6 text-md lg:text-xl xl:text-2xl font-bodyFont mt-2">
              You may have noticed that we are currently only integrating with
              Medium. Do not fear! - We will be rolling out intigrations with
              many of the top news and social media sources around. Please take
              a look at the short list of intigrations already underway:{" "}
            </p>
            <div className="flex items-center flex-wrap justify-between sm:w-2/3 mt-4">
              <img
                src={techcrunchLogo}
                alt="happy reader"
                className="w-12 mb-2 mx-1 sm:mx-0 rounded-full"
              ></img>
              <img
                src={nytLogo}
                alt="happy reader"
                className="w-12 mb-2 mx-1 sm:mx-0 rounded-full"
              ></img>
              <img
                src={washingtonpostLogo}
                alt="happy reader"
                className="w-12 mb-2 mx-1 sm:mx-0 rounded-full"
              ></img>
              <img
                src={bbcLogo}
                alt="happy reader"
                className="w-12 mb-2 mx-1 sm:mx-0 rounded-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
