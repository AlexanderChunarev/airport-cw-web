import React from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {useAutoCompleteField, useDateField} from "../../../hooks/hooks";
import {useDispatch, useSelector} from "react-redux";
import {fetchCountries} from "../../../store/partials/country/actions";


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

function FlightSearchForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const departureDate = useDateField(new Date(), 'departureDate');
    const departureLocation = useAutoCompleteField({});
    const arriveLocation = useAutoCompleteField({});
    const autocompleteData = useSelector(state => state.countries);
    const options = buildOptions(autocompleteData);

    const onInputChange = (event, value) => {
        dispatch(fetchCountries(value))
    };

    const buildQueryParams = () => {
        let params = {
            departureCountryId: 0,
            arriveCountryId: 0,
            departureAirportId: 0,
            arriveAirportId: 0,
            depatrureDate: new Date()
        }
        if (departureLocation.value.category === 'countries') {
            params.departureCountryId = departureLocation.value.id;
        }
        if (departureLocation.value.category === 'airports') {
            params.departureAirportId = departureLocation.value.id;
        }
        if (arriveLocation.value.category === 'countries') {
            params.arriveCountryId = arriveLocation.value.id;
        }
        if (arriveLocation.value.category === 'airports') {
            params.arriveAirportId = arriveLocation.value.id;
        }
        params.depatrureDate = departureDate.value.getTime() / 1000
        console.log(params)
        return params;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            params: buildQueryParams(),
            filters: {
                departureLocation: departureLocation.value,
                arriveLocation: arriveLocation.value,
            }
        };
        props.onRedirectHandler('/results', data);
    };

    function buildOptions(data) {
        let options = [];
        Object.keys(data).forEach(key => {
            data[key].forEach(o => {
                options.push({
                    category: key,
                    ...o
                })
            })
        })
        return options;
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
                            minDate = {new Date()}
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