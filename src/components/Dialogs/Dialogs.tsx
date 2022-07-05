import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";



const DialogItem = (props: any) => {

    let path = "/dialogs/"  + props.id;

    return <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active} >{props.name}</NavLink>
        {/*<NavLink to={"/dialogs/" + props.id} activeClassName={s.active} >{props.name}</NavLink>*/}
    </div>
    }
const Message = (props: any) => {
    return <div className={s.messages}>{props.messages}</div>
}

export const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name="Dimych" id="1"/>
            <DialogItem name="Andrey" id="2"/>
            <DialogItem name="Sveta" id="3"/>
            <DialogItem name="Sasha" id="4"/>
            <DialogItem name="Viktor" id="5"/>
            <DialogItem name="Valera" id="6"/>
        </div>
        <div className={s.messages}>
            <Message messages='Hi'/>
            <Message messages='Hello'/>
            <Message messages='Im happy'/>
            <Message messages='Boy'/>
    </div>

    </div>
}