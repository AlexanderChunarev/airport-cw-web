import React, {useEffect, useState} from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResultItem from "./ResultItem";
import axios from "axios";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        marginLeft: 32,
        marginBottom: 32,
        display: 'flex',
        flexDirection: 'column',
    }
}));

function ResultsBoard() {
    const classes = useStyles()
    const [trips, setTrips] = useState([])

    useEffect(async () => {
        const result = await axios.get('/api/trips?departureId=4&arriveId=8')
        setTrips(result.data)
    }, [])

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    {
                        trips.length > 0 ? trips.map((trip, index) => <ResultItem trip={trip} key={index} />) : ''
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default ResultsBoard