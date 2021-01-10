import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilterItem from "./FilterItem";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTypography-root': {
            fontSize: 12,
            fontFamily: 'sans-serif',
            color: '#3b3b3b'
        }
    }
}));

const filtersState = {
    departureAirport: {},
    arriveAirport: {},
    airline: {}
}

function Filter() {
    const classes = useStyles();
    const content = {
        departureAirports: [
            {id: 1, name: "Symphony of the seas"},
            {id: 2, name: "Symphony of the oasis"},
            {id: 3, name: "Symphony of the oceans"}
        ],
        arriveAirports: [
            {id: 1, name: "Arrive of the seas"},
            {id: 2, name: "Arrive of the oasis"},
            {id: 3, name: "Arrive of the oceans"}
        ],
    }
    const filter = useState(filtersState)

    const onFilterSet = (updatable, value) => {
        filtersState[updatable] = value
        console.log(filtersState)
    }

    return (
        <div className={classes.root}>
            <FilterItem title={"Departure airport"}
                        subtitle={'Київ — Лондон 13 січня'}
                        content={content.departureAirports} onFilterSet={onFilterSet}
                        updatable={'departureAirport'}/>
            <FilterItem title={"Arrive airport"}
                        subtitle={'Київ — Лондон 13 січня'}
                        content={content.arriveAirports}
                        onFilterSet={onFilterSet}
                        updatable={'arriveAirport'}/>
            <FilterItem title={"Arrive airport"}
                        subtitle={'Київ — Лондон 13 січня'}
                        content={content.arriveAirports}
                        onFilterSet={onFilterSet}
                        updatable={'arriveAirport'}/>
        </div>
    )
}

export default Filter