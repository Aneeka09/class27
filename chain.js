class Chain {
    constructor(birdBody,logBody){
        var options = {
            bodyA:birdBody,
            bodyB:logBody,
            stiffness:0.04,
            length:30
            
        }
        this.body = Constraint.create(options);
        World.add (world,this.body);
    }
    display(){
       var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position;
        line (posA.x,posA.y,posB.x,posB.y);
    }
}