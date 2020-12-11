const PlayerController = require("../controllers/player.controller");
module.exports = app => {
  app.get("/api/player/", PlayerController.findAllPlayer);
  app.put("/api/player/game1/:id",PlayerController.game1);
  app.put("/api/player/game2/:id",PlayerController.game2);
  app.put("/api/player/game3/:id",PlayerController.game3);
  app.post("/api/player/new", PlayerController.createNewPlayer);
  app.delete("/api/player/delete/:id", PlayerController.DeletePlayer);
  
};