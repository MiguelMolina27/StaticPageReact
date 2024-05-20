import mysql from "../../data/mysql";
import Card from "../molecules/Card";
import './VerticalCards.css'


function VerticalCards() {
  return (
    <div id="div-div__verticalCards">
      
      {mysql.frameworksCss.map((frameworkCss) => (
        <Card
          name={frameworkCss.name}
          image={frameworkCss.image}
          text={frameworkCss.text}
        ></Card>
      ))}
    </div>
  );
}

export default VerticalCards;
