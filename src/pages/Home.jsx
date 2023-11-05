// import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import TextAnim from "../anim/TextAnim";
import ImageAnim from "../anim/ImageAnim";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  const saludo = "Hola, soy Elkin Portillo";

  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-4 text-3xl font-extrabold md:text-4xl xl:text-5xl text-[#592DD1]">
            <TextAnim saludo={saludo} />
          </p>
          <p className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl ">
            Desarrollador de Software -Web- -Mobile- -Desktop-
          </p>
          <SocialMedia />
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#592DD1] border border-[#592DD1] rounded-lg hover:bg-white  "
          >
            Descargar CV
            <FontAwesomeIcon
              icon={faCircleDown}
              className=" px-2 text-[#592DD1] "
            />
          </Link>

        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex ">
          <ImageAnim />
        </div>
      </div>
    </section>
  );
};

export default Home;
