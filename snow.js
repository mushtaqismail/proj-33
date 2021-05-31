class Snow{
    constructor(x,y){
        var options = {
            'restitution' : 0.4,
            'friction' : 0.9,
            
        }
    this.image= loadImage("snow5.webp");
    this.body = Bodies.circle(x,y,40,40,20,options);
    
    this.radius = 25;
    this.lifetime=10;
    this.scale=0.1;
    World.add (world,this.body);
    }
    
    changePosition(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
        }
        }
    display(){
        push();
        
        var pos = this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
    }
}