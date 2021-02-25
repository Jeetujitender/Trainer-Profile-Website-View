import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: ' 20px 300px 0px 300px;',
        padding: '0px 50px 0px 50px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },

    },
    chipshadow: {
        boxShadow: "0 0 10px rgba(214,122,214,0.7)",
    }
}));

const MyExpertise = () => {
    const classes = useStyles();
    return (
        <div className="conatiner2">
            <h2>MyExpertise</h2>
            <div className={classes.root}>
                <Chip className={classes.chipshadow} label="Boxing" />
                <Chip className={classes.chipshadow} label="Yoga" />
                <Chip className={classes.chipshadow} label="Weight Training" />
                <Chip className={classes.chipshadow} label="Zumba" />
                <Chip className={classes.chipshadow} label="Hiit" />
                <Chip className={classes.chipshadow} label="Functional Excerise" />
                <Chip className={classes.chipshadow} label="Cardio" />
                <Chip className={classes.chipshadow} label="Taikondo" />
            </div>
        </div>

    )
}

export default MyExpertise;