import React from "react";
import cardStyles from "./cardStyles.module.scss";
import { AiOutlineRetweet } from "react-icons/ai";
import { CgArrowRightR } from "react-icons/cg";
import { BsClock } from "react-icons/bs";
export default function Card() {
  return (
    <div className={`${cardStyles.container} my-4`}>
      <div className={`${cardStyles.cardContainer}`}>
        <div className={`${cardStyles.imgContainer}`}></div>

        <p className="text-primary">عنوان نتیجه جستجو</p>
        <p>
          <span className="text-secondary fs-6">ترجمه این صفحه</span>
          <span className="ms-2 text-success fs-6">www.address.com</span>
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-evenly " >
            <span id="clock" className="fs-6">2 ساعت قبل </span>

            <BsClock className="ms-1"/>
          </div>
          <div className="d-flex align-items-center w-25 justify-content-evenly">
            <AiOutlineRetweet />
            <CgArrowRightR />
          </div>
        </div>
        <div className="mt-3 d-flex">
          <div id="second" className="text-danger">
            20%
          </div>
          <div id="first" className="text-success">
            80%
          </div>
        </div>
      </div>
    </div>
  );
}
