class Mallet extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
display(){
this.body.position.x=mouseX
this.body.position.y=this.height/2+mouseY
super.display();

}




};
