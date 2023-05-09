import React, { useState } from "react";
import "./backdrop.css";
import MenuIcon from "@mui/icons-material/Menu";

const BackDrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle()}>
        <MenuIcon />
      </button>
      <div className={`sidedrawer ${isOpen ? "open" : ""}`}>
        <button onClick={handleToggle()}>X</button>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default BackDrop;
