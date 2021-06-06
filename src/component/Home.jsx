import React,{useEffect, useContext} from "react";
import { AuthContext } from "../context/Auth";
import { auth } from "../Firebase/firebase";

function Home() {
const {user} = useContext(AuthContext)
  useEffect(() => {
    document.title = "React| Home ";
  }, []);
  console.log(auth);
  return (
    <div className="home">
      <h1>Home Page</h1>
      <h3>Welcome {user.email}</h3>
      <button onClick={()=> auth.signOut()}>LogOut</button>
    </div>
  );
}

export default Home;
