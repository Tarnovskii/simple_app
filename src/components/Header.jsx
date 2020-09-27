import React from 'react'
import s from '../stylesheets/header.module.css'

export const Header = () => {
    return (
        <header className={s.headerWrapper}>
            <h1>Lorem Ipsum</h1>
            <button>b1</button>
            <button>b2</button>
        </header>
    )
}
