import React from "react";
import TextField from '@mui/material/TextField';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material'; // Grid version 1
import Avatar from '@mui/material/Avatar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function Categoryinterface() {
    const [error, setError] = useState(false)
    const [category, setCategory] = useState("")
    const [status, setStatus] = useState("")
    var handleClick = (event) => {
        setCategory(event.target.value)
        setStatus(event.target.value)
    }
    var handleError = () => {
        if (category == ""){
            setError(true)    
        }
        if (status == ""){
            setError(true)
        }
        else {
            setError(false)   
        }
    }
    return (
        <div className="container">

            <Grid container spacing={2}>
                <Grid item lg={12} xs={12}>
                    <TextField error={error} fullWidth id="outlined-basic" label="CategoryName" variant="outlined" onChange={handleClick} />
                </Grid>
                <Grid item lg={12} xs={12}>
                    <TextField error={error} fullWidth id="outlined-basic" label="Status" variant="outlined" onChange={handleClick} />
                </Grid>
                <Grid id="camera" item lg={6} xs={6}>

                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCameraIcon />
                    </IconButton>
                </Grid>
                <Grid item lg={6} xs={6}>
                    <div id="avatar">
                        <Avatar id="size" alt="Remy Sharp" src="./123.jpg" />
                    </div>
                </Grid>
                <Grid item lg={6} xs={6}>

                    <Button onClick={handleError} fullWidth variant="contained" color="success">
                        Submit
                    </Button>
                </Grid>
                <Grid item lg={6} xs={6}>
                    <Button fullWidth variant="outlined" color="error" >
                        Reset
                    </Button>
                </Grid>
            </Grid>

        </div >
    );
}