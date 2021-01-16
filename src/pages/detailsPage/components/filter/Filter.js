import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilterItem from "./FilterItem";
import {selectDistinct} from "../../../../utils/ArrayUtils";

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

function Filter(props) {
    const {data, trips, onApplyFilter} = props;
    const classes = useStyles();

    const onFilterSelect = (value) => {
        onApplyFilter(value)
    }

    function mapToObject(title, subtitle, content, onFilterSelect, objKey, selectableProp) {
        return {
            title,
            subtitle,
            content,
            onFilterSelect,
            objKey,
            selectableProp
        }
    }

    function buildFilterParams() {
        const {departureLocation, arriveLocation} = data
        const content = []

        if (departureLocation.category === 'countries') {
            content.push(mapToObject(
                "Departure airport",
                `${departureLocation.country} — ${arriveLocation.country}`,
                selectDistinct(trips.map(t => t.departureAirport), 'name'),
                onFilterSelect,
                'departureAirportId',
                'name'
            ));
        }
        if (arriveLocation.category === 'countries') {
            content.push(mapToObject(
                "Arrive airport",
                `${departureLocation.country} — ${arriveLocation.country}`,
                selectDistinct(trips.map(t => t.arriveAirport), 'name'),
                onFilterSelect,
                'arriveAirportId',
                'name'
            ));
        }

        return content
    }

    return (
        <div className={classes.root}>
            {buildFilterParams().map((params, index) => <FilterItem key={index} {...params}/>)}
            <FilterItem title={"Transfers"}
                        content={trips.map(t => t.transfers)}
                        onFilterSelect={onFilterSelect}
                        objKey={'transfers'}/>
            <FilterItem title={"Airline"}
                        content={trips.map(t => t.airline)}
                        onFilterSelect={onFilterSelect}
                        objKey={'airlineId'}
                        selectableProp={'name'}/>
        </div>
    )
}

export default Filter