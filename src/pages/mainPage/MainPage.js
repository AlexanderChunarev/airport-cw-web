import React from 'react'
import SearchForm from "./components/FlightSearchForm";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 128,
        paddingBottom: 128,
        backgroundImage: `url("https://kiyavia.com/files/cities/Winter_1920_13_min.jpg")`,
        '& .MuiTypography-h3': {
            color: '#eaeaea'
        }
    },
    containerWrap: {
        marginTop: 32,
        marginLeft: 256,
        marginRight: 256
    }
}));

function MainPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.containerWrap}>
                <Typography variant="h3">Hello! Where do you want to fly?</Typography>
            </div>
            <div className={classes.containerWrap}>
                <SearchForm/>
            </div>
        </div>
    )
}

export default MainPage