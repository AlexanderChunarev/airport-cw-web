import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
        '& .MuiCardContent-root': {
            display: 'flex',
            padding: 0,
            paddingTop: 16,
            paddingBottom: 16,
            boxShadow: "0 0 5px 5px olive",
            '& .MuiSvgIcon-root' : {
                marginLeft: 8,
                marginRight: 8
            },
            '& .MuiTypography-root': {
                fontSize: 12,
                fontFamily: 'sans-serif',
                color: '#3b3b3b'
            }
        },
        '& .MuiTypography-root': {
            fontSize: 14
        },
        '& .MuiButtonBase-root': {
            textTransform: 'none',
            backgroundColor: '#026db3',
            '&:hover': {
                backgroundColor: "#00B3C3",
                transition: '0.3s'
            }
        }
    },
    airlineLogo: {
        display: 'flex',
        alignItems: 'center',
        padding: 16
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    detailsContent: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        borderLeft: '1px solid #efefef',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
}));

function formatDate(value) {
    const date = new Date(value)
    const timeSegments = [beatify(date.getHours()), beatify(date.getMinutes())]
    const dateSegments = [date.getFullYear(), beatify(date.getMonth() + 1), beatify(date.getDate())]
    return `${timeSegments.join(':')} ${dateSegments.join('.')}`;
}

function beatify(value) {
    return ('0' + value).slice(-2)
}

function ResultItem(props) {
    const classes = useStyles()
    const {departureAirport, arriveAirport, totalFlightTime, flights, transfers} = props.trip;
    const departureFlight = flights[0];
    const arriveFlight = flights[flights.length - 1];

    return (
        <Card className={classes.root}>
            <CardContent>
                <img
                    src={'https://tickets.kiyavia.com/guideStatic/images/carrier/logotype/3075-9fde855bfdf1a36b57c7e651b2a99f9e.svg'}
                    className={classes.airlineLogo}
                    alt={'logo'}/>
                <div className={classes.wrapper}>
                    <div className={classes.detailsContent}>
                        <div className={classes.details}>
                            <Typography variant={'p'}>{formatDate(departureFlight.departureDate)}</Typography>
                            <Typography variant={'p'}>{departureAirport.name}</Typography>
                            <Typography variant={'p'}>{departureFlight.departureAirport.country.name}</Typography>
                        </div>
                        <ArrowForwardIcon/>
                        <div className={classes.details}>
                            <Typography variant={'p'}>{formatDate(arriveFlight.arriveDate)}</Typography>
                            <Typography variant={'p'}>{arriveAirport.name}</Typography>
                            <Typography variant={'p'}>{arriveFlight.arriveAirport.country.name}</Typography>
                        </div>
                    </div>
                    <div className={classes.detailsContent}>
                        <div className={classes.details}>
                            <Typography variant={'p'}>Flight time: {totalFlightTime}</Typography>
                            <Typography variant={'p'}>Transfers: {transfers}</Typography>
                        </div>
                    </div>
                    <div className={classes.detailsContent}>
                        <Button variant="contained" color="primary">Details</Button>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}

export default ResultItem