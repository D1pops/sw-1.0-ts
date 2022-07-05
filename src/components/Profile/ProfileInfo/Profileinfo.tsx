import React from "react";
import s from './Profileinfo.module.css'

export const ProfileInfo = () => {
    return <div >
        <div>
            <img
                src='https://s1.1zoom.ru/big0/402/Spain_Island_Yacht_Coast_Ibiza_Balearic_560694_1280x720.jpg'/>
        </div>
        <div className={s.descriptionBlock}>ava+description</div>
    </div>
}