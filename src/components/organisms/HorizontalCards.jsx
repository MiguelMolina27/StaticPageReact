import mysql from "../../data/mysql";
import BigCard from "../molecules/BigCard";
import "./HorizontalCards.css";


function HorizontalCards() {
  return (
    <div id="div-div__horizontalCards">
     
      {mysql.libreriasJs.map((libreriaJs) => (
        <BigCard
          name={libreriaJs.name}
          image={libreriaJs.image}
          text={libreriaJs.text}
        ></BigCard>
      ))}
    </div>
  );
}

export default HorizontalCards;
