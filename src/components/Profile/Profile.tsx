import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/Profileinfo";

export const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}