import {ReactComponent as Open } from '../../../assets/shared/mobile/icon-hamburger.svg';
import {ReactComponent as Close } from '../../../assets/shared/mobile/icon-close.svg';
import { useState } from 'react';
import styles from '../header.module.scss'

export default function Hamburger() {
    const [open, setOpen] = useState(true);

    function handleClick(event) {
        event.preventDefault();
        setOpen(!open);
    }

    return (
        <>
            {open && <Open onClick={(e) => handleClick(e)} />}
            {!open && <Close onClick={(e) => handleClick(e)} />}
        </>
    )
}