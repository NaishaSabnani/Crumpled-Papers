class paper
{
    constructor(x, y, r) {
        var options = {
            'restitution':0.,
            'friction':0,
            'density':1.2,

        }
         
        this.image=loadImage("paper.png")
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle(this.x, this.y,this.r,options);
        World.add(world, this.body)
  
}

    display()
      {
        var paperPos=this.body.position;		

        push()
        translate(paperPos.x, paperPos.y);
        
        //strokeWeight(4);
        fill(128,128,128)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.r)
        pop()
        
      }
}
