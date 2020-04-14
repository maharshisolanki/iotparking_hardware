import React, { useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AVAILABLE, UNAVAILABLE, IN_SERVICE } from "./constants.js";
import CarSlots from "./CarSlots.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchSlots } from "../actions/index";
// import {db} from firebase.firestore()

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box pt={3}>{children}</Box>}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper
    }
}));

const ParkingVenue = props => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const data = useSelector(state => state.data.maninagr);
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    useEffect(() => {
        fetchSlots(dispatch);
    }, []);
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {data &&
                        Object.entries(data).map(([key, val]) => (
                            <Tab kay={key} key={key} label={key} />
                        ))}
                </Tabs>
            </AppBar>

                <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                    {Object.entries(data?? {}).map(([key, v], index) => {
                        // console.log( index )
                        return(
                        <TabPanel key={key} value={index} index={index}>

                            <CarSlots slots={v} />
                        </TabPanel>
                    )})}
                </SwipeableViews>
        </div>
    );
};

export default ParkingVenue;
