import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div>
        <div>
            <img
                src='https://s1.1zoom.ru/big0/402/Spain_Island_Yacht_Coast_Ibiza_Balearic_560694_1280x720.jpg'/>
        </div>
        <div>ava+description</div>
        <MyPosts/>
    </div>
}