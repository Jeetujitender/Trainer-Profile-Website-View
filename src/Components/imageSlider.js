import React from "react";
import "./imageSlider.css";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


export default function ImageSlider() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="container" style={{ backgroundImage: "URL('profile.png')", height: '300px', width: '400px' }} >


            </div>
            <div style={{ height: '300px', width: '400px', padding: '100px 100px 100px 10px' }}>
                <h1>Jitender</h1>
                <h3 style={{ fontWeight: 'lighter' }}> Rs 150 / Session</h3>
                <h3 style={{ opacity: '50%', fontWeight: 'lighter', fontSize: '15px' }}>5 years experience</h3>
                <h3 style={{ opacity: '50%', fontWeight: 'lighter', fontSize: '15px' }}><VerifiedUserIcon fontSize='small' />Certified</h3>
            </div>
        </div>
    );
}
