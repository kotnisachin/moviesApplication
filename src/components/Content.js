import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "../redux/actions/information";
import Card from "./Card";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    cards: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }
}));

function Content(props) {
    const classes = useStyles();
    useEffect(() => {
        props.getItems(props.type, props.category, 1);
    }, [props.type, props.category]);
    return (<div className={classes.cards}>
        {props.list.map((item, key) =>
            <Card key={key} poster_path={item.poster_path} title={item.title || item.name} />)}
    </div>)
}


function mapStateToProps(state) {
    return {
        type: state.options.type,
        list: state.information.list,
        page: state.information.page
    };
}

const mapDispatchToProps = {
    getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);