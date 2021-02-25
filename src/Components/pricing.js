import React from 'react';
import './pricing.css';

import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';

import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),

    },
    popper: {
        width: '20%'
    },
    info: {
        marginLeft: '5px',

    },
}));
const Pricing = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    return (
        <div>

            <div className="pricing-card">
                <h3 className="pricing-card-header">{props.plan}</h3>
                <div className="price"><sup>₹</sup>{props.amount}<span>/Session</span></div>
                <ul>
                    <li>Buy <strong>{props.session}</strong> Sessions</li>
                    <li>Save<strong>{props.save}</strong> </li>

                </ul>
                <h4 style={{ opacity: '50%', fontWeight: 'lighter' }}>Money Back Gaurantee<InfoIcon className={classes.info} fontSize='small' onClick={handleClick('right')}>right</InfoIcon></h4>
                <a href="/#" className="order-btn">Book Now</a>
            </div>

            <Popper open={open} anchorEl={anchorEl} placement={placement} transition className={classes.popper}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography className={classes.typography}>If you are not satisfied with our trainer after first session, we will give full refund on your entire purchase.</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </div>
    )
}
export default Pricing;