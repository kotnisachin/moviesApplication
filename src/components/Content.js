import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "../redux/actions/information";

function Content(props) {
    useEffect(() => {
        props.getItems(props.type, props.category, 1);
    }, [props.type, props.category]);
    return (<div>
        I am coming
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