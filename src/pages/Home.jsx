import HorizontalCards from "../components/organisms/HorizontalCards";
import MiniCards from "../components/organisms/MiniCards";
import VerticalCards from "../components/organisms/VerticalCards";
import Title from "../components/atoms/Title";
import "./Home.css";
import Text from "../components/atoms/Text";
import mysql from "../data/mysql";

function Home() {
  return (
    <div id="div-div__home">
       <Title></Title>
       <Text text={mysql.cssDescription}></Text>
      <div id="div-div__vCardsmCards">
       
        <VerticalCards></VerticalCards>
        <MiniCards></MiniCards>
      </div>
      <Text text={mysql.jsDescription}></Text>
      <HorizontalCards></HorizontalCards>
    </div>
  );
}

export default Home;
