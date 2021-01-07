import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FilterItem from "./FilterItem";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 16,
        maxWidth: 350,
        '& .MuiCardContent-root': {
            padding: 0
        }
    },
    title: {
        background: '#64b5f6',
        color: 'black',
        padding: 16,
        fontSize: 14,
        textAlign: 'left',
    },
    filterContent: {
        borderTop: '1px solid #ccc',
        color: 'black',
        padding: 16,
        fontSize: 12,
        textAlign: 'left',
    },
}));

function Filter() {
    const content = ['Param#1', 'Param2','Param#3', 'Param#4']
    return (
        <>
            <FilterItem title={"Hello airport"} content={content}/>
            <FilterItem title={"Hello airport"} content={content}/>
            <FilterItem title={"Hello airport"} content={content}/>
            <FilterItem title={"Hello airport"} content={content}/>
        </>
    )
}

export default Filter