import React from "react";
import Car from "./Car";
import { Grid } from "@material-ui/core";

function CarSlots(props) {
    return (
        <Grid container direction="row" justify="space-between">
           
            {Object.entries(props.slots).map(( [k,e], index) =>
                {
                    return (
                        <Grid item  key={index}>
                    <Car data={{ id: k, status: e}} />
                </Grid>
            )
                }
            )}
        </Grid>
    );
}

export default CarSlots;
