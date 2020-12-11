import { Link, navigate } from "@reach/router"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Game3 =props =>{
    const [players, setPlayers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/player/")

            .then(res => {
                console.log(res.data)
                setPlayers(res.data)
            })
    }, []);
    const updatePlayng =(id)=>{
        axios.put("http://localhost:8000/api/player/game3/"+id,{"status":"Playing"})
        .then(res=>console.log("resault",res))
        .catch(err=>console.log("error",err))
    }
    const updateNotPlaying =(id)=>{
        axios.put("http://localhost:8000/api/player/game3/"+id,{"status":"NotPlaying"})
        .then(res=>console.log("resault",res))
        .catch(err=>console.log("error",err))

    }
    const updateUndecided =(id)=>{
        axios.put("http://localhost:8000/api/player/game3/"+id,{"status":"Undecided"})
        .then(res=>console.log("resault",res))
        .catch(err=>console.log("error",err))

    }
    return(
        <div>
            <div className="Card my-2 " style={{ "maxWidth": "600px" }}>
                <div className="card-header justify-content-between">
                    <Link to="/game/1" className="card-link ml-5 mr-5" >Game1</Link>
                    <Link to="/game/2" className="card-link mr-5" >Game2</Link>
                    <Link to="/game/3" className="card-link mr-5" >Game3</Link>

                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Player Name:</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, idx) => {
                            return (<tr key={idx}>
                                <td>{player.name}</td>
                                <td>
                                    {player.game3.map((state, id) => {
                                        return (
                                            <div>
                                                {state.status === "Playing" ?
                                                    <button type="button" className="btn btn-success" onClick={e => updatePlayng(player._id)}>Playing</button> :
                                                    <button type="button" className="btn btn-light" onClick={e => updatePlayng(player._id)}>Playing</button>}
                                                
                                                {state.status === "NotPlaying" ?
                                                    <button type="button" className="btn btn-danger" onClick={e=>updateNotPlaying(player._id)}>Not Playing</button> :
                                                    <button type="button" className="btn btn-light" onClick={e => updateNotPlaying(player._id)}>Not Playing</button>}

                                                {state.status === "Undecided" ?
                                                    <button type="button" className="btn btn-warning"onClick={e=>updateUndecided(player._id)}>Undecided</button>:
                                                    <button type="button" className="btn btn-light"onClick={e=>updateUndecided(player._id)}>Undecided</button>}
                                                
                                            </div>

                                        );
                                    })}
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Game3;