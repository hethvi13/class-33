class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.tr = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log(this.body.velocity.x)
    console.log(this.body.position.x)
    var pos = [this.body.position.x, this.body.position.y]
    this.tr.push(pos)
    if(this.body.velocity.x > 1 && this.body.position.x > 200){
    for(var i = 0; i<this.tr.length; i=i+1){
      image(this.smokeImage, this.tr[i][0], this.tr[i][1])
    }
  }
  }
}
