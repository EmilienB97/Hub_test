import Button_room from "./Button_room.js";
import Button_add_room from "./Button_add_room.js";

export default function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <Button_room id="room-1">Room</Button_room>{" "}
        </li>
        <li>
          <Button_room id="room-1">Room</Button_room>{" "}
        </li>
        <li>
          <Button_room id="room-1">Room</Button_room>{" "}
        </li>
        <li>
          <Button_add_room>Room</Button_add_room>{" "}
        </li>
      </ul>
    </>
  );
}
