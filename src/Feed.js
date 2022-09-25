import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import InputOption from "./Inputoption";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import { db } from "./Firebase";

function Feed() {

  const [input, setInput] = useState("") ; 
  const [posts, setPosts] = useState([]) ;

const sendPost = (e) => {
e.preventDefault() ; 
/*
db.collection("posts").add({

  name: "Adam Miled"
  descrp: "testing"
  message: 

}) ;
*/
};

useEffect(() => {
db.collection("posts").onSnapshot(snapshot => (

  setPosts(snapshot.docs.map(doc => (
    {
      id : doc.id ,
      data: doc.data() ,
    }
  )))

)) ; 


  
} , [])




  return (
    <div className="Feed">
      <div className="feed__inputcontainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputoptions">
          <InputOption Icon={ImageIcon} title="Photo" Color="#70B5f9" />
          <InputOption Icon={OndemandVideoIcon} title="Video" Color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" Color="#C0CBCD" />
          <InputOption Icon={ArticleIcon} title="Article" Color="#7FC15E" />
        </div>
      </div>

{/* Posts*/}
{posts.map( (post) => ( <Post/>) 
) }

<Post name="Adam Miled" descrp="Testing Post" message="I hope it works"/>
<Post name="Adam Miled" descrp="Testing Post" message="I hope it works" picURL="https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607655600-5776.jpg"/>



    </div>
  );
}

export default Feed;
