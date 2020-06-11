class UV extends BaseClass {
    constructor(x,y){
      var options ={
          isStatic: true
      }
      super(x,y,50,50);
      this.body = Bodies.rectangle(x,y,170,100,options);
      this.image = loadImage("cic.png");
      this.x = x;
      this.y = y;
      this.width = 170;
      this.height = 100;
      World.add(world,this.body);
    }
  
    display() {
    imageMode(CENTER);
    image(this.image, 230, 200, this.width, this.height);
    super.display();
    }
  }
  