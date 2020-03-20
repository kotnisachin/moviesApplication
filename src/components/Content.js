import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems, getSearchItems } from "../redux/actions/information";
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
    const isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    const trackScrolling = () => {
        const wrappedElement = document.getElementById('movie-cards');
        if (isBottom(wrappedElement)) {
            if (props.category !== "search") {
                props.getItems(props.type, props.category, props.page + 1, props.genre);
            } else {
                props.getSearchItems(props.type, props.search, props.page + 1);
            }
        }
    };
    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener('scroll', trackScrolling);
        }
    })
    useEffect(() => {
        props.getItems(props.type, props.category, 1, props.genre);
    }, [props.type, props.category, props.genre]);
    return (<div className={classes.cards} id="movie-cards">
        {props.list.filter(item => item !== null).map((item, key) => {
            return <Card key={key} poster_path={item.poster_path} title={item.title || item.name} />
        })}
    </div>)
}


function mapStateToProps(state) {
    return {
        type: state.options.type,
        genre: state.options.genre,
        list: state.information.list,
        page: state.information.page,
        search: state.information.search
    };
}

const mapDispatchToProps = {
    getItems,
    getSearchItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);