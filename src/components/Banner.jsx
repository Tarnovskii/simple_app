import React from 'react'
import s from '../stylesheets/banner.module.css'

export const Banner = () => {
    return (
        <section className={s.wrapper}>
            <h1>Lorem Ipsum</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu metus, luctus eget gravida ac,
                fermentum a purus. Nam in velit vel dui dapibus sodales quis ac mauris.</p>
        </section>
    )
}
