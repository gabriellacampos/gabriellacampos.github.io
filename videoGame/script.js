document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.gif", 
  	actionRadius: 100, timeBetweenNPCs: 3200, 
  	npcCollisionRadius: 50, actionDuration:600, 
  	jumpHeight: 230, typesOfNPC: 2});
});