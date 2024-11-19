import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  md:px-20 px-4">
        <div className="mt-28  items-center  text-center justify-center ">
          <h1 className="text-2xl   md:text-4xl">
            We're delighted to have{" "}
            <span className=" text-pink-500">Here! :)</span>
          </h1>

          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            a cum suscipit saepe vero omnis quisquam sed tempore molestias
            dicta. Itaque suscipit nihil voluptas tempora praesentium odio.
            Laborum, quae! Cumque? Sint harum voluptatibus voluptas numquam,
            aliquid dicta accusamus fugiat nam reiciendis, laborum quas vero
            consectetur deleniti qui illum a ipsam aut rerum odit quo quia
            distinctio nostrum doloremque. Tempora, aut? Fugit incidunt ullam
            beatae.
          </p>
          <Link to="/">
            <button className="  mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12  grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
