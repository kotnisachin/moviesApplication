import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
export default function Header() {
    return (
        <div className="header">
            <div className="header-left">Discover</div>
            <div className="header-center">
                <NavLink to="popular">Popular</NavLink>
                <NavLink to="trend">Trend</NavLink>
                <NavLink to="newest">Newest</NavLink>
                <NavLink to="top-rated">Top Rated</NavLink>
            </div>
            <div className="header-right">Search</div>
        </div>

    );
}
