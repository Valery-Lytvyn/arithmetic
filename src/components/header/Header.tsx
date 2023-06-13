import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserData, getUserData } from "../../redux/slice/userDataSlicer";
import { navbarItems } from "../../constants/constants";
import "./header.scss";

interface NavbarItem {
  link: string;
  linkText: string;
}

function Header() {
  const personData: UserData = useSelector(getUserData) || {
    name: "",
    scores: 0,
    operation: "",
    maxFirstNum: 0,
    maxSecondNum: 0,
    duration: 0,
  };
  const { name, scores } = personData;

  return (
    <div className="header">
      <ul className="navbar m-0 p-0 pb-2">
        {navbarItems.map(({ link, linkText }: NavbarItem) => {
          return (
            <li className="navItem" key={link}>
              <Link to={link}>{linkText}</Link>
            </li>
          );
        })}
      </ul>

      <h1 className="py-4 py-sm-5 m-0 text-danger w-100 d-flex justify-content-center">
        Hello,<span className="text-capitalize ps-2"> {name}</span>!!!
      </h1>
      <h2 className="userInfo m-0">
        <span className="scores">
          Scores:
          <span className="scoresValue text-danger">{scores}</span>
        </span>
      </h2>
    </div>
  );
}

export default Header;
