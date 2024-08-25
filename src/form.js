import React, { useState } from 'react';
import axios from 'axios';
import './form.css'
import Leaderboard from './leaderboard';
const AddTeamForm = () => {
    const [teamName, setTeamName] = useState('');
    const [timing, setTiming] = useState('');
    const [missingLaps, setMissingLaps] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://kggeniuslabs.com:4000/add-team', {
            team_name: teamName,
            timing: parseFloat(timing),
            missing_laps: parseInt(missingLaps, 10)
        })
        .then(response => {
            alert(response.data);
            window.location.reload()
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <>
        <div className="LoginApp ">
      
      <div className="login-card mx-auto">
        <div className="login-form">
          <h1 className="logintxt text-center ">Add Score</h1>
          <form onSubmit={handleSubmit} >
            <div className="form-group">
            <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Team Name"
                required
            />
             
            </div>
            <div className="form-group">
            <input
                type="number"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
                placeholder="Timing"
                step="0.01"
                required
            />
             
            </div>
            <div className="form-group">
            <input
                type="number"
                value={missingLaps}
                onChange={(e) => setMissingLaps(e.target.value)}
                placeholder="No of off Tracks"
                required
            />
            </div>
            <div className="form-group button-container">
              <button type="submit" className="rounded-3">
                Add Timing
              </button>
            </div>
           
           
          </form>
        </div>
        {/* <div className="login-image">
          <img src={Loginimg} alt="Login" />
        </div> */}
      </div>
    </div>
        {/* <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Team Name"
                required
            />
            <br/>
            <input
                type="number"
                value={timing}
                onChange={(e) => setTiming(e.target.value)}
                placeholder="Timing"
                step="0.01"
                required
            />
            <input
                type="number"
                value={missingLaps}
                onChange={(e) => setMissingLaps(e.target.value)}
                placeholder="Missing Laps"
                required
            />
            <button type="submit">Add Team</button>
        </form>
         */}
        </>
        
    );
};

export default AddTeamForm;
