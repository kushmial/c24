class Ground {
    constructor(x,y,width,hieght){
        var options={
            isStatic: true 
        }
        this.body = Bodies.rectangle(x , y ,width , hieght, options);
        this.width = width;
        this.height = hieght;
        World.add(world , this.body);

    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x , this.body.position.y , this.width , this.height);


    }
    
}
