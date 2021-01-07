import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 16,
        borderRadius: 16,
        maxWidth: 350,
        '& .MuiCardContent-root': {
            padding: 0
        },
        '& .MuiListItem-root.Mui-selected': {
            color: 'white',
            background: '#026db3',
        }
    },
    filterItem: {
        borderBottom: '1px solid #efefef',
        color: 'black',
        padding: 16,
        fontSize: 12,
        textAlign: 'left',
        "&:hover": {
            backgroundColor: '#4cdae5'
        },
    }
}));

function FilterItem(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const {title, content} = props
    const classes = useStyles()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <>

            <Card className={classes.root}>
                <CardContent>
                    <List>
                        <ListItem
                            className={classes.filterItem}
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
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
                                        onClick={(event) => handleListItemClick(event, index)}>
                                        <ListItemText primary={item}/>
                                    </ListItem>
                                )
                            })
                        }
                    </List>


                </CardContent>
            </Card>
        </>
    )
}

export default FilterItem