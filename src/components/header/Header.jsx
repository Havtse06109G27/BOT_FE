import React from "react";
import { AiFillPhone, AiOutlineSearch } from "react-icons/ai";
import User from "../../components/header/User";
import Cart from "../../components/header/Cart";
import "./header.css";
import { MenuOutlined } from "@ant-design/icons";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <MenuOutlined style={{ marginRight: "8px", fontSize: "22px" }} />
            <h2>BOOK OVER THERE</h2>
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="account flexCenter">
            <AiFillPhone style={{ marginRight: "30px" }} />
            <User />
            <Cart />
          </div>
        </div>
      </header>
    </>
  );
};
