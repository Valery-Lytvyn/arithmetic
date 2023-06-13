import React from "react";
import { Link } from "react-router-dom";
import "./listItem.scss";

interface listItemProps {
  text: string;
  link: string;
  key: React.Key;
}

function ListItem({ text, link }: listItemProps) {
  return (
    <li className="homeListItem py-3">
      <Link to={link}>
        <h3>{text}</h3>
      </Link>
    </li>
  );
}

export default ListItem;
