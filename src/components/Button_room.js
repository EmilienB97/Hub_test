import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export default function Button_room(props) {
  return (
    <>
      <button className="btn-room">
        <FontAwesomeIcon className="icn-room-nav" icon={faSquare} />
        {props.children} {props.id.substring(5)}
      </button>
    </>
  );
}
