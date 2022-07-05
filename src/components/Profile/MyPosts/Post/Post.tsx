import React from 'react';
import s from "./Post.module.css";

type MessageType = {
    message: string
    likesCount: number
}

export const Post = (props: MessageType) => {
    return <div className={s.dialog}>
        <img src='https://pngimg.com/uploads/mr_bean/mr_bean_PNG20.png'/>
        {props.message}
        <div>
            <span>like</span>
            {props.likesCount}
        </div>
    </div>
}