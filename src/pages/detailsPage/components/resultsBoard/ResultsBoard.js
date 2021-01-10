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
        '& .MuiPaper-root': {
            marginTop: 16,
            boxShadow: '0px 1px 5px 1px rgba(0,0,0,0.16)'
        }
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
                        trips.length > 0 ? trips.map((trip, index) => <ResultItem trip={trip} key={index}/>) : ''
                    }
                    {
                        trips.length > 0 ? trips.map((trip, index) => <ResultItem trip={trip} key={index}/>) : ''
                    }
                    {
                        trips.length > 0 ? trips.map((trip, index) => <ResultItem trip={trip} key={index}/>) : ''
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default ResultsBoard