import React from "react";
import { makeStyles } from "@material-ui/styles";
import { fontWeight } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
    card: {
        margin: "20px",
        width: "250px",
        textAlign: "center",
    },
    image: {
        height: "400px"
    },
    title: {
        marginTop: "10px",
        color: "#0f5c8a",
        fontWeight: "bold"
    }
}));

export default function Card(props) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            {props.poster_path !== null ?
                <img alt="poster" src={"https://image.tmdb.org/t/p/w500/" + props.poster_path} className={classes.image} /> :
                "No Image available"}
            <div className={classes.title}>{props.title}</div>
        </div>
    )
}