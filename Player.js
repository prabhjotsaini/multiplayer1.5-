class Player{
    constructor (){this.distance=0;
                  this.name=null;
                  this.index=null}
    getCount(){
        var x=database.ref('playerCount');
        x.on("value",(data)=>{
    playerCount=data.val();
        })
    
    
    }
    updateCount(Count){
    
    
    database.ref('/').update({
        playerCount:Count
    });
    }
update(){
var y="players/player"+this.index;
database.ref(y).set({
    name:this.name,
    distance:this.distance
});

}
static getPlayerinfo(){
    var x=database.ref('players');
    x.on("value",(data)=>{
allPlayers=data.val();
    })  
}
}