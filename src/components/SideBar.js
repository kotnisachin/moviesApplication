import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect'
import "./SideBar.scss";
import { getGenres } from "../redux/actions/options";


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        border: "1px solid #565d64",
        padding: "0px 10px",
        borderRadius: "2px",
        color: "inherit",
        fontSize: "12px"
    },
    label: {
        fontSize: "20px",
        color: "#565d64"
    }
}));
function SideBar(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        type: "",
        genre: "",
    });
    props.getGenres("tv");
    const handleChange = event => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    }
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Discover Options
            </div>
            <div className="sidebar-item">
                <InputLabel shrink htmlFor="age-native-label-placeholder" className={classes.label}>
                    Type
                </InputLabel>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        className={classes.select}
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'type',
                        }}
                    >
                        <option value="movies">Movies</option>
                        <option value="tvshows">TV Shows</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div className="sidebar-item">
                <InputLabel shrink htmlFor="age-native-label-placeholder" className={classes.label}>
                    Genre
                </InputLabel>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        className={classes.select}
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'genre',
                        }}
                    >
                        <option value="movies">Movies</option>
                        <option value="tvshows">TV Shows</option>
                    </NativeSelect>
                </FormControl>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {

    };
}

const mapDispatchToProps = {
    getGenres
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)