import Center from "../center/center";
import Sidebar from "../sidebar/sidebar";
import Right from "../right/right";
import "./maincontent.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const id = +prompt("Enter Your id!!!!!");
// console.log(id)
function Maincontent() {
  const [getuserwithid, setwithuser] = useState([]);
  const getuser = () => {
    axios
    .get("https://dummyjson.com/users")
    .then((user) => {
      // console.log(user.data.users)
      // console.log(getuserid);
      user.data.users.map((item) => {
        return item.id === id ? setwithuser(item) : "none";
      });
    });
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className="Maincontent">
      <Sidebar userdetails={getuserwithid}/>
      <Center userdetails={getuserwithid}/>
      <Right />
    </div>
  );
}
export default Maincontent;
