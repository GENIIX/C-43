class Chain {
constructor(body1,body2,point2){
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:point2,
        
        stiffness:1,
        length:0
    }
this.chain=Constraint.create(options)
World.add(world,this.chain)

}
display(){
var start=this.chain.bodyA.position;
var end=this.chain.bodyB.position;
strokeWeight(4);
line(start.x,start.y,end.x,end.y);




}








}