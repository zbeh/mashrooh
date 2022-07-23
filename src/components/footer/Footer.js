import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import footerStyles from "./footerStyles.module.scss";
export default function Footer() {
  return (
    <footer>
      <div className="d-flex justify-content-between">
        <div
          className={`d-flex justify-content-between align-items-center ${footerStyles.iconContainer}`}
        >
          <HiOutlineLocationMarker className="text-secondary" />
          <span className="text-secondary">Karaj,Alborz Province</span>
        </div>
        <div
          className={`d-flex justify-content-between align-items-center ${footerStyles.linkContainer}`}
        >
          <span className="text-secondary">تغییر زبان</span>
          <span className="text-secondary">ارتباط با ما</span>
          <span className="text-secondary">سوالات متداول</span>
          <span className="text-secondary">شرایط و قوانین</span>
          <span className="text-secondary">ارسال بازخورد</span>
          <span className="text-secondary">پشتیبانی</span>
          
        </div>
      </div>
    </footer>
  );
}
