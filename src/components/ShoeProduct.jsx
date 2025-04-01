import React from "react";

export default function ShoeProduct(props) {
  // function clacHandle() {
  //   console.log(props.price);
  //   // return 0
  // }
  return (
    <div>
      <div className="flex w-full justify-around max-lg:flex-wrap max-lg:gap-9">
        <div key={props.id} className="flex w-[300px] gap-4 ">
          <img src={props.image} alt="" className="w-[100px] object-contain" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[16px] text-[#262626]">{props.title}</h2>
            <div className="flex">
              <img className="w-[11px]" src={props.rating} />
              <img className="w-[11px]" src={props.rating} />
              <img className="w-[11px]" src={props.rating} />
              <img className="w-[11px]" src={props.rating} />
              <img
                className="w-[11px]"
                src="./src/assets/icons/star-gray.png"
              />
            </div>
            <div className="flex gap-4">
              <p className="text-[14px] text-red-600 font-semibold">
                ${props.price - 100}
              </p>
              <span className="text-[14px] text-[#878787] line-through">
                ${props.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
