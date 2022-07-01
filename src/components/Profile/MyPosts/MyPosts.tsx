import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return <div>
        <div>My posts</div>
        <div>
            <input/>
            <button>Add post</button>
        </div>
        <Post/>

    </div>
}