"use client";
import React, { useState } from "react";
import { RiTeamLine } from "react-icons/ri";
import { PiStudentBold, PiChalkboardTeacher } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const StatisticsSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  const handleScrollEnter = () => {
    setCounterOn(true);
  };

  const handleScrollExit = () => {
    setCounterOn(false);
  };
  return (
    <section className="bg-background px-4 lg:px-36 dark:bg-darkbackground">
      <div className="container px-5 py-24 mx-auto">
        <section className="bg-background dark:bg-darkbackground">
          <div className="py-8 px-4 mx-60 max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-black">
              <h2 className="text-center mb-4 text-4xl tracking-tight font-roboto font-bold text-primary dark:text-darkprimary">
                We have inspired & helped over{" "}
                <span className="font-roboto font-extrabold">10,000+</span> people
              </h2>
              <p className="text-center mb-4 font-roboto font-light text-body dark:text-darktext dark:opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci laborum ipsam a alias ut dolorem atque rem, fugiat at
                porro praesentium ullam ipsum veritatis nostrum possimus quaerat
                voluptas accusantium quia?
              </p>
              <p className="text-center mb-4 font-roboto font-extrabold text-body dark:text-darktext dark:opacity-90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae aliquam quidem, odit quis, molestias possimus odio
                praesentium hic harum enim ad repudiandae optio necessitatibus
                ipsa corporis quae exercitationem architecto iste!
              </p>
            </div>
          </div>
        </section>

        <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover">
              <div className="bg-secondary dark:bg-darksecondary px-4 py-6 rounded-lg">
                <RiTeamLine className="text-purple-700 dark:text-blue-700 text-navytext dark:text-darkprimary w-12 h-12 mb-3 inline-block" />

                <h2 className="title-font font-bold font-roboto text-3xl text-black dark:text-darktext">
                  {counterOn && (
                    <CountUp start={0} end={200} duration={2} delay={0} />
                  )}
                  +
                </h2>

                <p className="leading-relaxed text-black opacity-75 font-bold font-roboto text-navytext dark:text-darkprimary">
                  Members
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover">
              <div className="bg-secondary dark:bg-darksecondary px-4 py-6 rounded-lg">
                <PiStudentBold className="text-navytext dark:text-darkprimary w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-bold font-roboto text-3xl text-black dark:text-darktext">
                  {counterOn && (
                    <CountUp start={0} end={10.3} duration={2} delay={0} />
                  )}
                  K+
                </h2>
                <p className="leading-relaxed text-black opacity-75 font-bold font-roboto text-navytext dark:text-darkprimary">
                  Students
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover">
              <div className="bg-secondary dark:bg-darksecondary px-4 py-6 rounded-lg">
                <PiChalkboardTeacher className="text-purple-700 dark:text-blue-700 text-navytext dark:text-darkprimary w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-bold font-roboto text-3xl text-black dark:text-darktext">
                  {counterOn && (
                    <CountUp start={0} end={350} duration={2} delay={0} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed text-black opacity-75 font-bold font-roboto text-navytext dark:text-darkprimary ">
                  Sessions
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-500 cursor-pointer object-cover">
              <div className="bg-secondary dark:bg-darksecondary px-4 py-6 rounded-lg">
                <LuSchool className="text-purple-700 dark:text-blue-700 text-navytext dark:text-darkprimary w-12 h-12 mb-3 inline-block" />
                <h2 className="title-font font-bold font-roboto text-3xl text-black dark:text-darktext">
                  {counterOn && (
                    <CountUp start={0} end={15} duration={2} delay={0} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed text-black opacity-75 font-bold font-roboto text-navytext dark:text-darkprimary">
                  Institutions
                </p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default StatisticsSection;
