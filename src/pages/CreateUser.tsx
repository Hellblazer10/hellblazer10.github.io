import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inputComponent: {
            margin: theme.spacing(1),
            minWidth: 'calc(40%)',
            maxWidth: 'calc(75%)'
        },

        inputComponentTop: {
            marginTop: theme.spacing(5),
        },

        btnComponent: {
            margin: theme.spacing(1),
            float: 'right',
        },
    }),
);

const accomodationTypes = [
    {
        value: 'FL',
        label: 'Flat',
    },
    {
        value: 'SH',
        label: 'Shop',
    },
    {
        value: 'KI',
        label: 'Kiosk',
    }
];

const CreateUser = () => {
    const classes = useStyles();

    const [accmType, setAccmType] = React.useState('FL');

    const handleAccmTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccmType(event.target.value);
    };


    return (
        <form noValidate autoComplete="off">
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <TextField
                    id="accmType"
                    select
                    label="Select Accomodation Type"
                    size="small"
                    className={`${classes.inputComponent} ${classes.inputComponentTop}`}
                    value={accmType}
                    onChange={handleAccmTypeChange}
                    variant="outlined"
                >
                    {accomodationTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField size="small" className={classes.inputComponent} id="outlined-basic1" label="Accomodation Number" variant="outlined" />
                <TextField size="small" className={classes.inputComponent} id="outlined-basic2" label="Owner Name" variant="outlined" />
                <TextField size="small" className={classes.inputComponent} id="outlined-basic3" type="number" label="Accomodation Size" variant="outlined" />
                <TextField size="small" className={classes.inputComponent} id="outlined-basic4" label="Mobile Number" variant="outlined" />
                <TextField size="small" className={classes.inputComponent} id="outlined-basic5" label="Email" variant="outlined" />
                <TextField size="small" className={classes.inputComponent} id="outlined-basic6" type="number" label="Opening Balance" variant="outlined" />
                <div className={classes.inputComponent}>
                    <Button className={classes.btnComponent}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<RotateLeftIcon />}
                    >
                        Reset
                    </Button>
                    <Button className={classes.btnComponent}
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </div>
            </Grid>
        </form>
    );
}

export default CreateUser;