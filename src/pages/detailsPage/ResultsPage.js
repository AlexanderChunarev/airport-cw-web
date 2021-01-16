import React, {useEffect, useState} from 'react'
import Filter from "./components/filter/Filter";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ResultsBoard from "./components/resultsBoard/ResultsBoard";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlights} from "../../store/partials/flight/actions";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        display: "flex",
        background: '#efefef',
        paddingTop: 32,
        paddingLeft: 128,
        paddingRight: 128
    },
    noContent: {
        margin: "auto"
    }
}));

function ResultsPage(props) {
    const {params, filters} = props.location.state;
    const classes = useStyles()
    const dispatch = useDispatch();
    const trips = useSelector(state => state.flights)
    const filterState = {
        ...params,
        transfers: 0,
        airlineId: 0
    }
    const [filtersParams, setParams] = useState(filterState)

    useEffect(() => {
        dispatch(fetchFlights(filtersParams));
    }, [filtersParams])

    const onApplyFilter = (params) => {
        setParams({...filtersParams, ...params})
    }

    return (
        <section className={classes.root}>
            {
                trips.length > 0 ?
                    <>
                        <Filter trips={trips} data={filters} onApplyFilter={onApplyFilter}/>
                        <ResultsBoard trips={trips}/>
                    </> :
                    <div className={classes.noContent}>
                            No Content :(
                    </div>
            }

        </section>
    )
}

export default ResultsPage