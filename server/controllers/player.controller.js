const Player = require("../models/player.model");


module.exports.findAllPlayer = (req, res) => {
    Player.find()
    .then(allDaPlayer => res.json( allDaPlayer ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => res.json( newPlayer ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.DeletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.game1 = (req,res)=>{
    Player.findByIdAndUpdate({ _id: req.params.id } , {$set:{game1: req.body}} , {new:true})
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.game2 = (req,res)=>{
    Player.findByIdAndUpdate({ _id: req.params.id } , {$set:{game2: req.body}} , {new:true})
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.game3 = (req,res)=>{
    Player.findByIdAndUpdate({ _id: req.params.id } , {$set:{game3: req.body}} , {new:true})
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

