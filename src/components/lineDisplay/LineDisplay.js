import React from "react";
import lineStyles from "./lineStyles.module.scss";
import { AiOutlineRetweet } from "react-icons/ai";
import { CgArrowRightR } from "react-icons/cg";
import { BsClock } from "react-icons/bs";
export default function LineDisplay() {
  return (
    <div className={`${lineStyles.container}  my-4 mx-3`}>
      <div className={`${lineStyles.cardContainer}`}>
        <div className={`${lineStyles.imgContainer}`}></div>
        <p className="text-primary">عنوان نتیجه جستجو</p>
        <p>
          <span className="text-secondary">ترجمه این صفحه</span>
          <span className="ms-2 text-success">www.address.com</span>
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center w-25 justify-content-evenly ">
            <span id="clock">2 ساعت قبل </span>

            <BsClock />
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
