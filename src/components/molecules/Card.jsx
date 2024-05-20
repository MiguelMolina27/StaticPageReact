import Text from "../atoms/Text";
import Image from "../atoms/Image";
import CardName from "../atoms/CardName";
import "./Card.css";

function Card(props) {
  return (
    <div id="div-div__card">
      <div>
      <Image src={props.image}></Image>
      <div>
        <CardName name={props.name}></CardName>
        <Text text={props.text}></Text>
      </div>
      </div>
    </div>
  );
}

export default Card;
