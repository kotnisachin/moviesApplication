import React from "react";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { getSearchItems } from "../redux/actions/information";
import "./header.scss";

const useStyles = makeStyles(theme => ({
    search: {
        borderBottom: "2px solid #0f5c8a",
        color: "white"
    }
}));
function Header(props) {
    const classes = useStyles();
    let history = useHistory();
    const [values, setValues] = React.useState({
        searchValue: '',
    });
    const [timer, setTimer] = React.useState(undefined);
    const handleChange = (event) => {
        history.push("/search");
        setValues({
            searchValue: event.target.value
        });
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            props.getSearchItems(props.type, values.searchValue, 1);
        }, 2000));
    }
    return (
        <div className="header">
            <div className="header-left">Discover</div>
            <div className="header-center">
                <NavLink to="popular">Popular</NavLink>
                <NavLink to="trend">Trend</NavLink>
                <NavLink to="newest">Newest</NavLink>
                <NavLink to="top-rated">Top Rated</NavLink>
            </div>
            <div className="header-right">
                <Input
                    className={classes.search}
                    value={values.searchValue}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start"><SearchIcon htmlColor="#0f5c8a" /></InputAdornment>}
                /></div>
        </div>

    );
}



function mapStateToProps(state) {
    return {
        type: state.options.type,
    };
}

const mapDispatchToProps = {
    getSearchItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);