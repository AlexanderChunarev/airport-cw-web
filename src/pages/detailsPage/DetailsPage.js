import React from 'react'
import Filter from "./components/Filter";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResultsBoard from "./components/resultsBoard/ResultsBoard";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        background: '#efefef',
        paddingTop: 32,
        paddingLeft: 320,
        paddingRight: 320
    }
}));

function DetailsPage() {
    const classes = useStyles()

    return (
        <section className={classes.root}>
            <Filter/>
            <ResultsBoard/>
        </section>
    )
}

export default DetailsPage