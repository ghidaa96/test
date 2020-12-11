import { Link ,navigate} from "@reach/router"
import { useState } from "react";
import axios from 'axios';
const NewPlayer = props =>{
    const[name,SetName]=useState("")
    const[postion,setPostion]=useState("");
    const game1={"status":"Undecided"}
    const game2={"status":"Undecided"}
    const game3={"status":"Undecided"}
    const [nameError,setNameError]=useState("")
    const addPlayer=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/player/new',
        {name,postion,game1,game2,game3}).then(res=>{
            if(res.data.error){
                setNameError(res.data.error.errors.name.message);
            }else{
                console.log(res.data)
                navigate("/player/list");
            }
        }
        )
    }
    return(
        <div>
            <div className="Card my-2" style={{ "maxWidth": "600px" }}>
                <div className="card-header justify-content-between">
                    <Link to="/player/list" className="card-link" >List</Link>
                    <Link to="/player/new" className="card-link" style={{ "float": "right" ,}}>Add Player</Link>
                </div>
                <form className="mt-2" onSubmit={addPlayer}>
                    <label>Player Name</label>
                    {name.length <2  && name.length >0  ?
                    <input type="text"className="form-control" onChange={e=>SetName(e.target.value)} value={name} style={{'border-color': "rgba(229, 103, 23, 0.8)",'box-shadow':" 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px rgba(229, 103, 23, 0.6)",
                    'outline': "0 none" }}/>:
                    <input type="text"className="form-control" onChange={e=>SetName(e.target.value)} value={name}/>}
                    <p className="text-danger">{nameError ? nameError : ''}</p>
                    <label>Preffered postion</label>
                    <input type="text" className="form-control" onChange={e=> setPostion(e.target.value)}/>
                    <button className="btn btn-block btn-dark mt-3">Add</button>
                </form>
            </div>
        </div>
    );
}
export default NewPlayer;