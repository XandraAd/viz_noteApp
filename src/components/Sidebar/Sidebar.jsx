/* eslint-disable no-unused-vars */
import React from "react";
//import {icons_note} from "../../utils/images";
import { viz_logo } from "../../utils/images";
//import "../../../src/App.css"
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
//import {MdNoteAlt} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  let pathname = location.pathname.replace("/", "");

  return (
    <div className="app-sidebar">
      <div className="sidebar-content py-3 flex flex-column">
        <Link to="/" className="app-brand flex align-center justify-center">
          <img src={viz_logo} alt="" />
        </Link>

        <ul className="links my-4">
          <Link
            to="/home"
            className={`text-white flex justify-center align-center link-item ${
              pathname === "home" ? "active-link" : ""
            }`}
          >
            <span className="flex align-center justify-center">
              <AiFillHome size={17} />
            </span>
            <span className="icon-text">Home</span>
          </Link>
          <Link
            to="/add"
            className={`text-white flex justify-center align-center link-item ${
              pathname === "add" ? "active-link" : ""
            }`}
          >
            <span className="flex align-center justify-center">
              <BsPlusLg size={17} />
            </span>
            <span className="icon-text">Add</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
