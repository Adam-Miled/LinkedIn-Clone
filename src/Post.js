import React from 'react';
import { Avatar } from "@mui/material";
import './Post.css' ;
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import InputOption from "./Inputoption";
import SendIcon from '@mui/icons-material/Send';

function Post({name , descrp , message , picURL}) {
  return (
    <div className='post'>
            <div className='post__header'>
        <Avatar/>
    
        <div className='post__info'>
            <h2>{name}</h2>
            <p>{descrp}</p>
        </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>

        {picURL && <img src={picURL}/> }

            
        </div>


        <div className='post__button'>
        <InputOption Icon={FavoriteBorderIcon} title="Like" Color="#gray" />
        <InputOption Icon={CommentIcon} title="Comment" Color="#gray" />
        <InputOption Icon={ShareIcon} title="Share" Color="#gray" />
        <InputOption Icon={SendIcon} title="Send" Color="#gray" />
        </div>

    </div>
  )
}

export default Post