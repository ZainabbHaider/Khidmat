import React from "react";
import HeroVideo from "./../landing/Video";

const HeroSection = () => {
  return (
    <section className="bg-background dark:bg-darkbackground">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-center">
          {" "}
          {/* Center text here */}
          <a
            href="/"
            target="_blank"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 rounded-full bg-background dark:bg-darksecondary dark:text-darktext hover:bg-highlight dark:hover:bg-darkhighlight"
            role="alert"
          >
          </a>
          <h1 className="py-3 text-gray-800 max-w-2xl mb-4 text-3xl font-roboto font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-darktext">
            <span className="text-primary dark:text-darkprimary">
              On a mission to impact
            </span>{" "}
            <span className="text-text dark:text-darkprimary">
            ONE 
            </span>{" "}
            <span className="text-primary dark:text-darkprimary">
              life 
            </span>{" "}
            <span className="text-text dark:text-darkprimary">
            EVERY 
            </span>{" "}
            <span className="text-primary dark:text-darkprimary">
              day
            </span>
          </h1>
          <p className="pb-3 max-w-2xl mb-6 font-roboto font-light text-body lg:mb-8 md:text-lg lg:text-xl dark:text-darktext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            aliquam, quod tenetur optio dolores architecto repellendus ex illo
            consequuntur distinctio quidem deserunt totam eveniet reprehenderit.
            Ratione, non vitae. Molestiae, voluptatibus.
          </p>
          <a
            href="/"
            className="mr-4 mb-4 bg-secondary dark:bg-darksecondary hover:-translate-y-1 dark:hover:bg-darkhighlight inline-flex items-center justify-center px-5 py-3 text-base font-roboto text-center text-white rounded-lg dark:text-darktext"
          >
            Learn More
          </a>
          <a
            href="/"
            className="bg-primary hover:-translate-y-1 shadow-3xl hover:shadow-darkprimary dark:bg-darkprimary inline-flex items-center justify-center px-5 py-3 text-base font-roboto text-center text-darktext rounded-lg dark:text-darkbackground dark:border-gray-700"
          >
            Contact Us
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex hover:cursor-[url(https://github.com/NotSooShariff/bif-frontend/blob/main/public/cursor.png)]">
          <HeroVideo className="hover:cursor-[url(https://github.com/NotSooShariff/bif-frontend/blob/main/public/cursor.png)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
