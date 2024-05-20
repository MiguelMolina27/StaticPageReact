import Text from "../atoms/Text";
import Image from "../atoms/Image";
import CardName from "../atoms/CardName";
import './MiniCard.css'

function MiniCard(props) {
  return (
    <div id="div-div__minicard">
      
      <Image src={props.image}></Image>
      <div>

      <CardName name={props.name}></CardName>
      <Text text={props.text}></Text>
      </div>
    </div>
  );
}

export default MiniCard;
