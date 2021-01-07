import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'left'
    }
}));

function TripDetails(props) {
    const classes = useStyles();
    const {departureDate, arriveDate, departureAirport, arriveAirport,totalFlightTime, transfers} = props
    console.log(arriveAirport)

    return (
        <div className={classes.root}>
            <div className={classes.details}>
                <Typography variant={'p'}>{departureDate}</Typography>
                <Typography variant={'p'}>{departureAirport}</Typography>
            </div>
            <ArrowForwardIcon/>
            <div className={classes.details}>
                <Typography variant={'p'}>{arriveDate}</Typography>
                <Typography variant={'p'}>{arriveAirport}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant={'p'}>Flight time: {totalFlightTime}</Typography>
                <Typography variant={'p'}>Transfers: {transfers}</Typography>
            </div>
        </div>

    )
}

export default TripDetails