import React from "react";
import sideBarStyles from "./sideBarStyles.module.scss";
import { HiMenu } from "react-icons/hi";
import {
  AiOutlineUser,
  AiOutlineProfile,
  AiOutlineCompass,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft, MdEditNote } from "react-icons/md";
import { BsBookmark, BsStar, BsHash } from "react-icons/bs";
export default function SideBar() {
  return (
    <div className={`${sideBarStyles.container}`}>
      <div
        className={`${sideBarStyles.logo} d-flex justify-content-between align-items-center`}
      >
        <span className="fs-3">Mashrooh</span>
        <span>
          <HiMenu />
        </span>
      </div>
      <button className={`${sideBarStyles.add}`}>
        <span>افزودن محتوا</span>
        <span className="ms-2">+</span>
      </button>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span>پیشخوان</span>
        </div>
        <span>
          <AiOutlineUser />
        </span>
      </div>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between ">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span>صفحه شخصی</span>
        </div>

        <span>
          <AiOutlineProfile />
        </span>
      </div>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between align-items-center">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span>شبکه اجتماعی</span>
        </div>
        <span>
          <AiOutlineCompass />
        </span>
      </div>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between align-items-center">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span>بعدا می خوانم</span>
        </div>
        <span>
          <BsBookmark />
        </span>
      </div>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between align-items-center">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span>یادداشت</span>
        </div>
        <span>
          <MdEditNote />
        </span>
      </div>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between align-items-center">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>

          <span>علاقه مندی ها</span>
        </div>
        <span>
          <BsStar />
        </span>
      </div>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between align-items-center">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span>کلید واژه ها</span>
        </div>
        <span>
          <BsHash />
        </span>
      </div>
      <div className="text-secondary w-100 my-3 text-end d-flex justify-content-between align-items-center">
        <div
          className={` ${sideBarStyles.wrapper} d-flex justify-content-between align-items-center`}
        >
          <span>
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span>تنظیمات</span>
        </div>
        <span>
          <FiSettings />
        </span>
      </div>
    </div>
  );
}
