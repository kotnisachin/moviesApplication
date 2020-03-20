import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect'
import "./SideBar.scss";
import { getGenres, updateType, udpateGenre } from "../redux/actions/options";


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
    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "type") {
            props.updateType(value);
            props.getGenres(value);
        }
        if (name === "genre") {
            props.udpateGenre(value);
        }
    }
    useEffect(() => {
        props.updateType("movie");
        props.getGenres("movie");
    }, []);
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
                        value={props.type}
                        onChange={handleChange}
                        inputProps={{
                            name: 'type',
                        }}
                    >
                        <option value="movie">Movies</option>
                        <option value="tv">TV Shows</option>
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
                        value={props.genre}
                        onChange={handleChange}
                        inputProps={{
                            name: 'genre',
                        }}
                    >
                        {props.genreList.map(item => <option value={item.id}>{item.name}</option>)}
                    </NativeSelect>
                </FormControl>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        type: state.options.type,
        genreList: state.options.type === "movie" ? state.options.genreMovieList : state.options.genreTvList,
        genre: state.options.genre
    };
}

const mapDispatchToProps = {
    getGenres,
    updateType,
    udpateGenre
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)