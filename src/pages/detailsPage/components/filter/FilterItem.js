import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        width: 256,
        '& .MuiCard-root': {
            marginBottom: 24,
            borderRadius: 12
        },
        '& .MuiTypography-h6': {
            color: '#8d8c8c',
            textAlign: 'left',
            fontSize: 12
        },
        '& .MuiTypography-h5': {
            textAlign: 'left',
            fontSize: 14
        },
        '& .MuiCardContent-root': {
            padding: 0
        },
        '& .MuiListItem-root.Mui-selected': {
            backgroundColor: '#026db3',
            '& .MuiTypography-root': {
                color: 'white'
            },
            '&:hover': {
                backgroundColor: "#00B3C3",
                transition: '0.3s'
            }
        },
        '& .MuiList-root': {
            padding: 0
        },
        '& .MuiListItemText-root': {
            margin: 0
        },
        '& .MuiListItem-root': {
            padding: 12
        }
    },
    filterItem: {
        borderBottom: '1px solid #efefef',
        color: 'black',
        padding: 16,
        fontSize: 12,
        textAlign: 'left',
        "&:hover": {
            backgroundColor: '#f5f3f3'
        },
    }
}));

const theme = createMuiTheme({
    overrides: {
        MuiListItem: {
            root: {
                "&:last-child": {
                    borderBottom: 'none'
                }
            }
        }
    }
});

function FilterItem(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const {title, subtitle, content, updatable, onFilterSet} = props
    const classes = useStyles()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index.index);
        onFilterSet(updatable, index.item)
    };

    return (
        <div className={classes.root}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6" gutterBottom>{subtitle}</Typography>
            <Card>
                <CardContent>
                    <MuiThemeProvider theme={theme}>
                        <List>
                            <ListItem
                                className={classes.filterItem}
                                selected={selectedIndex === 1}
                                onClick={(event) => handleListItemClick(event, {item: {}, index: 1})}
                            >
                                <ListItemText primary="Doesn't matter"/>
                            </ListItem>
                            {
                                content.map((item, index) => {
                                    index += 2
                                    return (
                                        <ListItem
                                            key={index}
                                            className={classes.filterItem}
                                            selected={selectedIndex === index}
                                            onClick={(event) => handleListItemClick(event, {item, index})}>
                                            <ListItemText primary={item.name}/>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </MuiThemeProvider>
                </CardContent>
            </Card>
        </div>
    )
}

export default FilterItem