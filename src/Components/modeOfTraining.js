import React from 'react';
import './modeOfTraining.css';
const ModeOfTraining = () => {
    return (
        <div style={{ marginBottom: '100px' }}><h2>Modes Of Training</h2>
            <div className="container1">

                <div><img src="online.jpg" alt="online_mode" ></img>
                    <h4>Online</h4></div>
                <div>
                    <img src="home.jpg" alt="home_mode" ></img><h4>Home</h4></div>
                <div>
                    <img src="outdoor.jpg" alt="outdoor_mode" ></img><h4>Outdoor</h4></div>
            </div></div>

    )
}

export default ModeOfTraining;