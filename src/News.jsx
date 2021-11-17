import React from "react";
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";

const News = (props) => {
    return(
        <ListItem button component={Link}to={props.to}>
                <dl>
                    <dt>{props.ymd}</dt>
                    <dd>{props.title}</dd>
                </dl>
        </ListItem>
    )
}

export default News