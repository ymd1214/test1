import React from "react";
import './styles/news.css';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";

const News = (props) => {
    return(
        <ListItem button component={Link}to={props.to}>
            <div>
            <img class='linkImg' src={props.img} />
            <p class='linkTitle'>{props.title}</p>
            <p class='linkYMD'>{props.ymd}</p>
            </div>
        </ListItem>
    )
}

export default News