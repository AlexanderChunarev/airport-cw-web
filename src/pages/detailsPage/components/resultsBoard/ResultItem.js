import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TripDetails from "./TripDetails";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
        '& .MuiCardContent-root': {
            display: 'flex'
        },
        '& .MuiTypography-root': {
            fontSize: 14
        },
    },
    airlineLogo: {
        height: 50,
    },
    flightsInfo: {
        paddingTop: 8,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column'
    }
}));

function ResultItem(props) {
    const classes = useStyles()
    const trip = props.trip;

    return (
        <Card className={classes.root}>
            <CardContent>
                <img
                    src={'https://tickets.kiyavia.com/guideStatic/images/carrier/logotype/3075-9fde855bfdf1a36b57c7e651b2a99f9e.svg'}
                    className={classes.airlineLogo}
                    alt={'logo'}/>
                <TripDetails
                    departureDate={trip.flights[0].departureDate}
                    arriveDate={trip.flights[trip.flights.length - 1].arriveDate}
                    departureAirport={trip.departureAirport.name}
                    arriveAirport={trip.arriveAirport.name}
                    totalFlightTime={trip.totalFlightTime}
                    transfers={trip.transfers}/>
            </CardContent>
        </Card>
    )
}

export default ResultItem