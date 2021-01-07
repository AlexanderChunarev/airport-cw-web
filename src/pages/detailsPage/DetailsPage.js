import React from 'react'
import Filter from "./components/Filter";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    root: {
        background: '#efefef',
        padding: 32,

    }
}));

function DetailsPage() {
    const classes = useStyles()

    return (
        <section className={classes.root}>
            <Filter/>
        </section>
    )
}

export default DetailsPage