class Game {
constructor (){}
getState(){
    var gameStateref=database.ref('gameState');
    gameStateref.on("value",function(data){
gameState=data.val();
    })


}

update(state){ database.ref('/').update({ gameState: state }); }
start(){
    if(gameState===0){
player=new Player();
player.getCount()
form=new Form();
form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    cars=[car1,car2,car3,car4];
    
}
play(){
  form.hide();
 
  Player.getPlayerinfo();

  if(allPlayers!==undefined){
var n=0;
var x=0;
var y
for(var i in allPlayers){
   n=n+1;
   x=x+200;
   


  y=displayHeight-allPlayers[i].distance;
  cars[n-1].x=x;
  cars[n-1].y=y;
  if(n===player.index){
cars[n-1].shapeColor="red"
camera.position.x=displayWidth/2
camera.position.y=cars[n-1].y;

  }
}

}
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.ditance+=50;
    player.update();
}
drawSprites();

}
}