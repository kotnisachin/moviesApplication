import React from "react";
import "./header.scss";
export default function Header() {
    return (
        <div className="header">
            <div className="header-left">Discover</div>
            <div className="header-center">
                <div>Popular</div>
                <div>Trend</div>
                <div>Newest</div>
                <div>Top Rated</div>
            </div>
            <div className="header-right">Search</div>
        </div>

    );
}
