import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}>
                <NavLink to='/dialogs/1' activeClassName={s.active} >Dimych</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/2' activeClassName={s.active}>Andrey</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/3' activeClassName={s.active}>Sveta</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/4' activeClassName={s.active}>Sasha</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/5' activeClassName={s.active}>Viktor</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/6' activeClassName={s.active}>Valera</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.messages}>Hi</div>
            <div className={s.messages}>Hello</div>
            <div className={s.messages}>Im happy)</div>
            <div className={s.messages}>cunt</div>

    </div>

    </div>
}