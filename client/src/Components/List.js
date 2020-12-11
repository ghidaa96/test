import { Link, navigate } from "@reach/router"
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const List = props => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/player/")

            .then(res => {
                console.log(res.data)
                setPlayers(res.data)
            })
    }, []);
    const removeFromTheDom = player_id => {
        setPlayers(players.filter(player => player._id !== player_id));
    }

    const Delete = (id) => {
        if (window.confirm("Do you really want to delete this player?")) {
            axios.delete("http://localhost:8000/api/player/delete/" + id,)
                .then(res => {
                    console.log(id)
                    removeFromTheDom(id)


                })
        } else {
            navigate('/player/list')
        }
    }
    console.log(players[0].game1.status)
    return (
        <div>
            <div className="Card my-2 " style={{ "maxWidth": "600px" }}>
                <div className="card-header justify-content-between">
                    <Link to="/player/list" className="card-link" >List</Link>
                    <Link to="/player/new" className="card-link" style={{ "float": "right" }}>Add Player</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Player Name:</th>
                            <th scope="col">Preffered Postion</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, idx) => {
                            return (<tr key={idx}>
                                <td>{player.name}</td>
                                <td>{player.postion}</td>
                                <td><button className="btn btn-danger" onClick={e => Delete(player._id)}>Delete</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

}
export default List;