import React from 'react'
import SearchForm from "./components/FlightSearchForm";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import './MainPage.css'
import {useHistory} from "react-router-dom";
import png from './KUd2PIg.jpg';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        paddingTop: 228,
        paddingBottom: 256,
        background: `url("${png}") no-repeat bottom`,
        backgroundSize: "cover",
        '& .MuiTypography-h3': {
            color: '#eaeaea'
        }
    },
    container: {
        marginTop: 32,
        marginLeft: 400,
        marginRight: 400
    }
}));

function MainPage() {
    const history = useHistory()
    const classes = useStyles()

    const onRedirectHandler = (path, data = {}) => {
        history.push({
            pathname: path,
            state: data
        });
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Typography variant="h3">Hello! Where do you want to fly?</Typography>
            </div>
            <div className={classes.container}>
                <SearchForm onRedirectHandler={onRedirectHandler}/>
            </div>
        </div>
    )
}

export default MainPage