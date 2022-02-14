import { Stack, Typography } from "@mui/material";
import * as React from "react";

export default function InfoLabel(props) {
    return (
        <Stack style={props.style} direction={props.direction} spacing={2}>
            <Typography variant="subtitle2" width={'11em'}>{props.label}</Typography>
            <Typography variant="body2">{props.content}</Typography>
        </Stack>
    )
}