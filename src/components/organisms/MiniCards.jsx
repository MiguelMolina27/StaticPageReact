import mysql from "../../data/mysql";
import MiniCard from "../molecules/MiniCard";
import './MiniCards.css'

function MiniCards() {
  return (
    <div id="div-div__miniCards">
      {mysql.libreriasCss.map((libreriaCss) => (
        <MiniCard
          name={libreriaCss.name}
          image={libreriaCss.image}
          text={libreriaCss.text}
        ></MiniCard>
      ))}
    </div>
  );
}

export default MiniCards;
