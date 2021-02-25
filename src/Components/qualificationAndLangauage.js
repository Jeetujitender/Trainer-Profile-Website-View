import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),

    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },


}));


const QualificationAndLanguage = () => {
    const classes = useStyles();
    return (

        <div>

            <Grid container style={{ padding: "40px 250px 40px 250px" }}>

                <Grid item xs={6}>
                    <Paper className={classes.paper}><div><h3>Language</h3>
                        <Divider className={classes.divider} />
                        <ul style={{ listStyleType: 'none' }}><li>Hindi</li><li>English</li><li>Punjabi</li></ul></div></Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ height: '130px' }}><div><h3>Educational Qualification</h3>
                        <Divider className={classes.divider} />
                        <ul style={{ listStyleType: 'none' }}><li>B.Sc in Sports and Excercise</li></ul></div></Paper>
                </Grid>
            </Grid>


        </div>

    )
}
export default QualificationAndLanguage;







