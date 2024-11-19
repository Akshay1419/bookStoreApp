import React from "react";

const Cards = ({ item }) => {
  console.log("item", item);

  return (
    <>
      <div className="mt-4 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl  hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border  ">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline  hover:bg-pink-500 p-3  rounded-full duration-200  hover:text-white  cursor-pointer  border-[2px] ">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
