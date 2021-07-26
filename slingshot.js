class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness :0.045,
            length: 1
        }
        this.body = Constraint.create(options)
        World.add(world,this.body);
        this.pointB = pointB;
    }
    fly(){
        this.body.bodyA = null;
    }
  
    display(){
        if(this.body.bodyA){
            var posA = this.body.bodyA.position
            var posB = this.pointB
            
        strokeWeight(3)
        stroke("turquoise");
        line(posA.x,posA.y,posB.x,posB.y)

        
        }
    }
}