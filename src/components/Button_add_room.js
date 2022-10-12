import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Button_room() {
  return (
    <>
      <button className="btn-add-room">
        <FontAwesomeIcon className="icn-room-add" icon={faPlus} />
      </button>
    </>
  );
}
