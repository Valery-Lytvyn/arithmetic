import { homeList } from "../../constants/constants";
import ListItem from "../../components/listItem/ListItem";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="home">
      <ul className="homeListItem">
        {homeList.map(({ text, link }) => (
          <ListItem text={text} link={link} key={link} />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
