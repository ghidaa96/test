const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
    name: {type: String , 
        required: [true,"name is required"],
        minlength:[2,"name should be at least 2 characters length "]
    },
	postion:{type:String} ,
    game1:[{status:{type:String} }],
    game2:[{status:{type:String}  }],
    game3:[{status:{type:String} }],
},{timestamps:true});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;