import {COMMITTEES} from "../../data/data_committees";
import {Card, CardContent, Typography} from "@material-ui/core";
import {Author} from "../../components/author";
import {getPictureUrl} from "../../data/data_people";
import React from "react";
import {hashCode, intToRGB} from "../../utils";

function description(item) {
    return (
        <Card key={item.title} style={{margin: 10, border: "round"}}>
            <CardContent>
                <Typography variant={"h5"}>{item.title}</Typography>
                <div style={{display: "flex"}}>
                    {(item.leads || []).map((i) => (
                        <div key={i} style={{borderRadius: 25, backgroundColor: '#' + intToRGB(hashCode(i)), padding: 2, margin: 5}}>
                            <Author name={i} picture={getPictureUrl(i)}/>
                        </div>
                        )
                    )}

                </div>
                <Typography>{item.description}</Typography>
            </CardContent>
        </Card>
    )
}
export function ECESSCommittess() {
    return (
        <div style={{margin: "0 auto", maxWidth: 1080}}>
            {
                COMMITTEES.map( (item) => description(item))
            }
        </div>
    )
}
