import React, { Component } from "react";
import List from "./components/List";
import CarSlots from "./components/CarSlots";
import { AppBar, Toolbar, CssBaseline, Icon, Container } from "@material-ui/core/";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ParkingVenue from "./components/ParkingVenue";

function App() {
    const [value, setValue] = React.useState(0);

    return (
        <Container maxWidth={"md"}>
            <CssBaseline />
            <AppBar>
                <Toolbar> Parking </Toolbar>
            </AppBar>
            <div className="container main">
                <ParkingVenue />
            </div>

            <div className="bottom-nav">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction
                        label="Recents"
                        icon={<Icon>history</Icon>}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        icon={<Icon>favorite</Icon>}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        icon={<Icon>pin_drop</Icon>}
                    />
                </BottomNavigation>
            </div>
        </Container>
    );
}

export default App;
