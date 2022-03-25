class Form{
constructor(){
    this.button1=createButton("Next")
    this.button2=createButton("Next")
    this.Name=createInput("Name")
    this.emailID=createInput("Email Id")
    this.mobileNo=createInput("Mobile Number with country code")
    this.DOB=createInput("Date of birth(DD/MM/YY)")
    this.Password=createInput("Password")
}
hide(){
    this.button1.hide()
    this.button2.hide()
    this.Name.hide()
    this.emailID.hide()
    this.mobileNo.hide()
    this.DOB.hide()
    this.Password.hide()
}

styleSheetForInput(){
this.Name.class("inputStyle")
this.emailID.class("inputStyle")
this.mobileNo.class("inputStyle")
this.DOB.class("inputStyle")
this.Password.class("inputStyle")
}

display(){
    this.button1.position(width/1.1,height/1.25) 
    this.button1.class("buttonStyle")
    this.button1.mousePressed(()=>{
        if(gameState===0){
        gameState=1 
        this.button2.position(width/1.5,height/2) 
        this.button2.class("buttonStyle")
        this.button1.hide()
        console.log(gameState)
        this.button1.position(width/1.5,height/2) 
        this.Name.position(width/2,height/10)
        this.emailID.position(width/2,height/6)
        this.mobileNo.position(width/2,height/4.3)
        this.DOB.position(width/2,height/3.3)
        this.Password.position(width/2,height/2.7)
        this.styleSheetForInput()}

    })     
    this.button2.mousePressed(()=>{
        if(gameState===1){
        gameState=2 
        this.button2.hide()
        this.Name.hide()
        this.emailID.hide()
        this.mobileNo.hide()
        this.DOB.hide()
        this.Password.hide()
        
    }
    })     
    
}
}