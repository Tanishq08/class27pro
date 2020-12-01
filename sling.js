class Sling{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:100

        }

        this.chain=Constraint.create(option);
        this.pointB=pointB
        World.add(world,this.chain)
    }
        display(){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            stroke("white");
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }

    
}