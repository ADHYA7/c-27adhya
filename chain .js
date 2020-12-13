class Chain{
    constructor (bodyA,bodyB) {
    var a= {
        bodyA:bodyA,
        bodyB:bodyB,
        length:20,
        stiffness:0.04
            }
    this.chain=Constraint.create(a)
    World.add(world,this.chain)
    }
    display(){
    var pointa=this.chain.bodyA.position
    var pointb=this.chain.bodyB.position
    strokeWeight(5)
    line (pointa.x,pointa.y,pointb.x,pointb.y)
    }
}