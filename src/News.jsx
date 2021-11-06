import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Route } from "react-router-dom";
import Blog from "./Blog";

const News = (props) => {
    return(
        <ListItem button>
            <Route path={props.path} component={Blog}>
                <dl>
                    <dt>{props.ymd}</dt>
                    <dd>{props.title}</dd>
                </dl>
            </Route>
        </ListItem>
    )
}

export default News