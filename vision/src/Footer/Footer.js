import React from "react";
import "./Footer.css";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { grey, red } from "@mui/material/colors";
import EmailIcon from "@mui/icons-material/Email";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export const Footer = () => {
  return (
    <div className="footer">
      <button className="icn">
        <div className="ic">
          <VolumeUpIcon sx={{ fontSize: "3rem", color: red[500] }} />
        </div>
        <h2 className="in">Assistant</h2>
      </button>
      <button className="icn">
        <div className="ic">
          <EmailIcon sx={{ fontSize: "3rem", color: red[500] }} />
        </div>
        <h2 className="in">Notifications</h2>
      </button>
      <button className="icn">
        <div className="ic">
          <ExitToAppOutlinedIcon sx={{ fontSize: "3rem", color: grey[800] }} />
        </div>
        <h2 className="in">Logout</h2>
      </button>
      <button className="icn">
        <div className="ic">
          <SettingsOutlinedIcon sx={{ fontSize: "3rem", color: red[500] }} />
        </div>
        <h2 className="in">Settings</h2>
      </button>
    </div>
  );
};
