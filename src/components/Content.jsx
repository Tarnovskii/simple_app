import React from 'react'
import s from '../stylesheets/content.module.css'

export const Content = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.description}>
                <p>Lorem | Lorem | Lorem</p>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <p>Fusce dapibus erat vel risus egestas, a semper lectus cursus. Nulla ornare risus et elit auctor, ut
                    vulputate dolor eleifend. Morbi blandit mi vitae urna cursus, vitae tempor est tincidunt. Vivamus
                    rhoncus eros eu velit eleifend, nec cursus mauris pretium.</p>
            </div>
            <div className={s.scroll}>

            </div>
        </section>
    )
}
