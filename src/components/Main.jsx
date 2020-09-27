import React, {Fragment} from 'react'
import {Header} from "./Header";
import {Banner} from "./Banner";
import {Content} from "./Content";

export const Main = () => {
    return (
        <Fragment>
            <Header/>
            <Banner/>
            <Content/>
        </Fragment>
    )
}
