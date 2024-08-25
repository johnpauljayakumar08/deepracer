import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import image from './background.png'
const Leaderboard = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('http://kggeniuslabs.com:4000/leaderboard')
            .then(response => {
                setTeams(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    });

    return (
        
        <>
        <div className='bodyleader'>
            <img src={image} className='container-fluid'/>
            <main>

                <div id="header">
                <h1>Leader Board</h1>
            
            </div>
            <div id="leaderboard">
                <div class="ribbon"></div>
                <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Timing</th>
                        <th>No of off Tracks</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.id}>
                            <td class="name">{team.team_name}</td>
                            <td class="number">{team.timing}</td>
                            <td className='points'>{team.missing_laps}</td>
                        </tr>
                    ))}
                </tbody>
                {/* <tr>
                    <td class="number">1</td>
                    <td class="name">{team.team_name}</td>
                    <td class="points">
                    258.244 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
                    </td>
                </tr> */}
                {/* <tr>
                    <td class="number">2</td>
                    <td class="name">Mark Lee</td>
                    <td class="points">258.242</td>
                </tr>
                <tr>
                    <td class="number">3</td>
                    <td class="name">Xiao Dejun</td>
                    <td class="points">258.223</td>
                </tr>
                <tr>
                    <td class="number">4</td>
                    <td class="name">Qian Kun</td>
                    <td class="points">258.212</td>
                </tr>
                <tr>
                    <td class="number">5</td>
                    <td class="name">Johnny Suh</td>
                    <td class="points">258.208</td>
                </tr> */}
                </table>
                <div id="buttons">
                {/* <button class="exit">Exit</button>
                <button class="continue">Continue</button> */}
                </div>
            </div>
            </main>
        </div>
        </>
    );
};

export default Leaderboard;
