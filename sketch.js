var R_Bucks = 1000
var  mansion, mansion2, mansion3, mansion4, mansion5, door
var pink, mansionImg, mansion2Img, mansion3Img, mansion4Img, mansion5Img, doorImg

function preload(){
pink = loadImage("pink.png")
mansionImg = loadImage("mansion.png")
mansion2Img = loadImage("mansion2.png")
mansion3Img = loadImage("mansion3.png")
mansion4Img = loadImage("mansion4.png")
mansion5Img = loadImage("mansion5.png")
doorImg = loadImage("door.png")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  background("cyan");
  mansion = createSprite(400, 200, 50, 50);
  mansion.addImage("mansion", mansionImg)
  mansion.scale = .2
  mansion2 = createSprite(500,200,50,50);
  mansion2.addImage("mansion2", mansion2Img)
  mansion2.scale = .2
  mansion3 = createSprite(600,200,50,50);
  mansion3.addImage("mansion3", mansion3Img)
  mansion3.scale = .2
  mansion4 = createSprite(700,200,50,50);
  mansion4.addImage("mansion4", mansion4Img)
  mansion4.scale = .2
  mansion5 = createSprite(800,200,50,50);
  mansion5.addImage("mansion5", mansion5Img)
  mansion5.scale = .2
  door = createSprite(733,518,200,300);
  door.addImage("door", doorImg)
  mansionButton = createButton("500R$")
  mansionButton.position(403, 233)
  mansion2Button = createButton("1000R$")
  mansion2Button.position(503, 237)
  mansion3Button = createButton("1500R$")
  mansion3Button.position(603, 244)
  mansion4Button = createButton("2000R$")
  mansion4Button.position(703, 244)
  mansion5Button = createButton("2500R$")
  mansion5Button.position(803, 244)
  doorButton = createButton("Enter or Exit")
  doorButton.position(726, 488)
}

function draw() {  
  drawSprites();
  textSize(30)
  text("Estate Shop", displayWidth/2,50)
  text(R_Bucks+"R$", 1000,100)
  text(mouseX+","+mouseY,200,20)
  //if(mousePressedOver (mansion)&& R_Bucks >= 500){
//mansion.visible = false
  //}
  mansionButton.mousePressed(()=>{
    if(R_Bucks >= 500){
      R_Bucks = R_Bucks - 500
      text("You bought a mansion of 500R$", 400,200)
    }
    else{
alert("You don't have 500R$. Play the runner to earn more.")
    }
  })
  mansion2Button.mousePressed(()=>{
    if(R_Bucks >= 1000){
      R_Bucks = R_Bucks - 1000
    text("You bought a mansion of 1000R$", 400,200)
    }
    else{
alert("You don't have 1000R$. Play the runner to earn more.")
    }
  })
  mansion3Button.mousePressed(()=>{
    if(R_Bucks >= 1500){
      R_Bucks = R_Bucks - 1500
      text("You bought a mansion of 1500R$", 400,200)
    }
    else{
alert("You don't have 1500R$. Play the runner to earn more.")
    }
  })
  mansion4Button.mousePressed(()=>{
    if(R_Bucks >= 2000){
      R_Bucks = R_Bucks - 2000
      text("You bought a mansion of 2000R$", 400,200)
    }
    else{
alert("You don't have 2000R$. Play the runner to earn more.")
    }
  })
  mansion5Button.mousePressed(()=>{
    if(R_Bucks >= 2500){
      R_Bucks = R_Bucks - 2500
      text("You bought a mansion of 2500R$", 400,200)
    }
    else{
alert("You don't have 2500R$. Play the runner to earn more.")
    }
  })
  doorButton.mousePressed(()=>{
    background(pink)
  text("Which shop would you like visiting?", 200,200)
  mansion.visible = false
  mansionButton.hide()
  mansion2. visible = false
  mansion2Button.hide()
  mansion3. visible = false
  mansion3Button.hide()
  mansion4. visible = false
  mansion4Button.hide()
  mansion5. visible = false
  mansion5Button.hide()
  door.visible = false
  doorButton.hide()
  FloristButton = createButton("Florist Shop")
  FloristButton.position(300,300)
  CarButton = createButton("Car Shop")
  CarButton.position(400,300)
  FurnitureButton = createButton("Furniture Shop")
  FurnitureButton.position(500,300)
  HomeImproveButton = createButton("Home Improvement Shop")
  HomeImproveButton.position(630,300)
  FishSpearButton = createButton("Fish Spear Shop")
  FishSpearButton.position(800,300)
  ClothesButton = createButton("Clothes Shop")
  ClothesButton.position(930,300)
  SupermarketButton = createButton("Supermarket")
  SupermarketButton.position(400,400)
  PetShopButton = createButton("Pet Shop")
  PetShopButton.position(520,400)
  HospitalButton = createButton("Hospital")
  HospitalButton.position(620,400)
  SchoolButton = createButton("School")
  SchoolButton.position(720,400)
  HighButton = createButton("High School")
  HighButton.position(820,400)
  GiftButton = createButton("Gift Display")
  GiftButton.position(920,400)
  HatButton = createButton("Hat Store")
  HatButton.position(500,500)
  EstateButton = createButton("Estate Shop")
  EstateButton.position(600,500)
  MusicButton = createButton("Music Shop")
  MusicButton.position(700,500)
  EntertainmentButton = createButton("Entertainment Stop")
  EntertainmentButton.position(800,500)
  })
  
FloristButton.mousePressed(()=>{
background = ("pink")
  })
}