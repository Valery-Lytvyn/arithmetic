import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/icon/yellow_arrow.png";

interface listItemProps {
  text: string;
  link: string;
  key: React.Key;
}

function ListItem({ text, link }: listItemProps) {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <Link to={link}>
      <li
        className="homeListItem py-3"
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        <h3>{text}</h3>
        {showArrow && <img src={arrow} className="arrow" alt="yellow arrow" />}
      </li>
    </Link>
  );
}

export default ListItem;
