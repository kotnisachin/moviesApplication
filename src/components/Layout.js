import React from "react";
import "./Layout.scss";
import Header from "./header";
import SideBar from "./SideBar";

export default class Layout extends React.Component {
    render() {
        return (<div className="application-layout">
            <div className="application-body">
                <Header />
                <div className="application-content">

                </div>
            </div>
            <div className="application-sidebbar">
                <SideBar />
            </div>
        </div>);
    }

}