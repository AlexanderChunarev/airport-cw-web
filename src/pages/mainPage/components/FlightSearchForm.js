import React, {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {useAutoCompleteField, useDateField} from "../../../hooks/hooks";
import {useDispatch, useSelector} from "react-redux";
import {fetchCountries} from "../../../store/partials/country/actions";
import {fetchFlights} from "../../../store/partials/flight/actions";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        background: 'white',
        padding: 16,
        borderRadius: 16,
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
        },
        '& .MuiButton-root': {
            backgroundColor: '#fc1f49',
            borderRadius: 16,
        }
    },
}));

function FlightSearchForm() {
    const classes = useStyles();
    const departureDate = useDateField(new Date(), 'departureDate')
    const dispatch = useDispatch();
    const autocompleteData = useSelector(state => state.countries)
    const departureLocation = useAutoCompleteField({})
    const arriveLocation = useAutoCompleteField({})
    const options = buildOptions(autocompleteData)

    console.log(departureLocation.value)
    console.log(arriveLocation.value)

    const onInputChange = (event, value) => {
        dispatch(fetchCountries(value))
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const params = {departureId: departureLocation.value.id, arriveId: arriveLocation.value.id}
        dispatch(fetchFlights(params))
    }

    function buildOptions(data) {
        let options = []
        Object.keys(data).forEach(key => {
            data[key].forEach(o => {
                options.push({
                    category: key,
                    ...o
                })
            })
        })
        return options
    }

    return (
        <>
            <form className={classes.root} onSubmit={onSubmitHandler} autoComplete="off">
                <>
                    <Autocomplete
                        {...departureLocation}
                        onInputChange={onInputChange}
                        options={options}
                        groupBy={(option) => option.category}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField required {...params} label="Select country or airport"/>}
                    />
                    <Autocomplete
                        {...arriveLocation}
                        onInputChange={onInputChange}
                        options={options}
                        groupBy={(option) => option.category}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField required {...params} label="Select country or airport"/>}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            label="Departure date"
                            {...departureDate}
                        />
                    </MuiPickersUtilsProvider>
                    <Button type={'submit'} variant="contained" color="secondary">
                        Search
                    </Button>
                </>
            </form>
        </>
    )
}

export default FlightSearchForm