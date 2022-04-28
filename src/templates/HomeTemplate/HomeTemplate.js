import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
    //props : path, exact, component
    const { Component, ...restRoute } = props;
    return <Route {...restRoute} render={
        (propsRoute) => {//props.location props.history props.match 
            return <Fragment>
                <Header  {...propsRoute} />
                <HomeCarousel />
                <Component {...propsRoute} />
                <Footer {...propsRoute} />
            </Fragment >
        }} />
}
