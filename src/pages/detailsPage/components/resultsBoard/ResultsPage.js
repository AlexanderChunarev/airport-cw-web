import React from 'react'
import Filter from "../filter/Filter";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResultsBoard from "./ResultsBoard";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        background: '#efefef',
        paddingTop: 32,
        paddingLeft: 128,
        paddingRight: 128
    }
}));

function ResultsPage() {
    const classes = useStyles()

    return (
        <section className={classes.root}>
            <Filter/>
            <ResultsBoard/>
        </section>
    )
}

export default ResultsPage