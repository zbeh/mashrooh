import React, { useState, useEffect } from "react";
import SideBar from "../sideBar/SideBar";
import CardDisplay from "../cardDisplay/CardDisplay";
import mainStyles from "./mainStyles.module.scss";
import {
  HiChevronDown,
  HiUserCircle,
  HiOutlineUsers,
  HiOutlineMicrophone,
  HiOutlineMenu,
} from "react-icons/hi";
import { BsChatLeft, BsGrid3X3 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Horizontal from "../lineDisplay/Horizontal";
export default function Main() {
  const [time, setTime] = useState(new Date());
  const [isToggled, setIsToggled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  let interval;
  useEffect(() => {
    interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // const onToggle = () => {
  //
  //   setIsDisabled(!isDisabled);
  // };
  const handleClick = () => {
    setIsDisabled(!isDisabled);
    setIsToggled(!isToggled);
  };
  console.log(isDisabled);
  return (
    <>
      <div className="d-flex justify-center">
        <main className={`${mainStyles.main}`}>
          <header className="d-flex">
            <div className={`d-flex ${mainStyles.notification} `}>
              <ul>
                <li className="text-danger">7</li>
                <li>اعلانات</li>
                <li>
                  <HiChevronDown />
                </li>
              </ul>
            </div>
            <div
              className={`d-flex ${mainStyles.date} align-items-center justify-content-between`}
            >
              <span className={`${mainStyles.profile}`}>
                <HiUserCircle />
              </span>

              <div className="position-relative">
                <Badge
                  bg="danger"
                  className="px-0 position-absolute "
                  id="badge"
                >
                  3
                </Badge>
                <span className={`${mainStyles.icontainer}`}>
                  <BsChatLeft />
                </span>
                <span className={`${mainStyles.icontainer}`}>
                  <HiOutlineUsers />
                </span>
              </div>
            </div>
            <div
              className={`${mainStyles.weather} d-flex align-items-center justify-content-evenly `}
            >
              <div>
                <span className="pe-3">
                  <HiChevronDown />
                </span>
                <span>{time.toLocaleTimeString()}</span>
              </div>
              <span>یکشنبه 25 آذر 1397</span>
              <span>
                <WiDaySunnyOvercast className="fs-2" />
                12
              </span>
            </div>
            <div
              className={`${mainStyles.inputContainer} d-flex align-items-center justify-content-center `}
            >
              <IoSearchOutline className={`${mainStyles.magnifier} `} />
              <HiOutlineMicrophone className={`${mainStyles.mic} `} />
              <input type="text" placeholder="متن جستجو شده توسط کاربر"></input>
              <div className="d-flex justify-content-between w-100">
                <div>
                  <a href="#">ابزارها</a>
                </div>
                <nav>
                  <a
                    href="#"
                    className="ms-3 text-danger border-bottom border-danger"
                  >
                    همه مطالب
                  </a>
                  <a href="#" className="ps-3">
                    {" "}
                    تصاویر
                  </a>
                  <a href="#" className="ps-3">
                    {" "}
                    ویدئوها
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <div>
            <div className={`${mainStyles.wrapper} d-flex mt-3`}>
              <div className={`ms-5`}>
                <button
                  className={
                    `${mainStyles.lineIcon} me-3 btnn ` +
                    (isToggled ? "in-active" : "active")
                  }
                  // onClick={onToggle}
                  onClick={handleClick}
                  disabled={!isDisabled}
                >
                  <HiOutlineMenu />
                </button>
                <button
                  className={"btnn " + (isToggled ? "active" : "in-active")}
                  // onClick={onToggle}
                  onClick={handleClick}
                  disabled={isDisabled}
                >
                  <BsGrid3X3 />
                </button>
              </div>
              <div className={`${mainStyles.container} px-3`}>
                <hr />
              </div>
              <div>
                <span className="ms-3">حدود 130.000 نتیجه</span>
                <span>(0.58 ثانیه)</span>
              </div>
            </div>
            <p className="text-end pe-4" id="search">
              آیا منظور شما این بود:
              <span className="text-danger pe-1">متن جستجو شده توسط کاربر</span>
            </p>
            <p className="text-end pe-4 text-primary position-relative">
              برچسب های پیشنهادی
            </p>
            <div className={`${mainStyles.label} pe-3  `}>
              <div className={`${mainStyles.box}`}>
                <span className=" border rounded ">نام برچسب </span>
                <span className=" border rounded ">نام برچسب </span>
                <span className=" border rounded ">نام برچسب </span>
                <span className=" border rounded ">نام برچسب </span>
                <span className=" border rounded ">نام برچسب </span>
                <span className=" border rounded ">نام برچسب </span>
                <span className=" border rounded ">نام برچسب </span>
              </div>
              <Badge
                bg="danger"
                className="px-0 position-absolute"
                id="justify"
              >
                <MdOutlineKeyboardArrowLeft />
              </Badge>
            </div>
          </div>
          {isToggled ? <CardDisplay /> : <Horizontal />}

          <p className="text-primary text-end pe-4 mt-3">تصاویر پیشنهادی</p>
          <div className="d-flex justify-content-end pe-4">
            <div
              className={`${mainStyles.picture} d-flex  justify-content-between`}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <p className="text-primary text-end pe-4 mt-3">ویدئوهای پیشنهادی</p>
          <div className="d-flex justify-content-end pe-4">
            <div
              className={`${mainStyles.picture} d-flex  justify-content-between`}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          {isToggled ? <CardDisplay /> : <Horizontal />}
          <div className="d-flex justify-content-end pe-4">
            <div
              className={`${mainStyles.pagination} d-flex  justify-content-between`}
            >
              <span className="text-danger">
              <MdOutlineKeyboardArrowLeft />
                بعدی
              </span>
              <span>
                35 
              </span>
              <span>
                ...
              </span>
              <span id="forth">
                4
              </span>
              <span>
                3
              </span>
              <span>
                 ...
              </span>
              <span>
                1
              </span>
              <span className="text-danger">
              <MdOutlineKeyboardArrowRight />
                قبلی
              </span>

            </div>
          </div>
        </main>
        <section>
          <SideBar />
        </section>
      </div>
    </>
  );
}
