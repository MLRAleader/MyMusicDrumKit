
function handleKeyPress() { 
  window.addEventListener("keydown", function (event) {
    console.log(event.key);
    switch (event.key) {
      case "w":
        let tom1 = new Audio("./assets/sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("./assets/sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("./assets/sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("./assets/sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("./assets/sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("./assets/sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("./assets/sounds/kick-bass.mp3");
        kick.play();
        break
      default:
       this.alert("You did not press the correct key (w,a,s,d,j,k,l)!");
    }
  });
}
handleKeyPress();

function handleClick() {
  for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
      console.log(this.innerHTML);
     switch (this.innerHTML) {
       case "w":
         let tom1 = new Audio("./assets/sounds/tom-1.mp3");
         tom1.play();
         break;
       case "a":
         var tom2 = new Audio("./assets/sounds/tom-2.mp3");
         tom2.play();
         break;
       case "s":
         var tom3 = new Audio("./assets/sounds/tom-3.mp3");
         tom3.play();
         break;
       case "d":
         var tom4 = new Audio("./assets/sounds/tom-4.mp3");
         tom4.play();
         break;
       case "j":
         var snare = new Audio("./assets/sounds/snare.mp3");
         snare.play();
         break;
       case "k":
         var crash = new Audio("./assets/sounds/crash.mp3");
         crash.play();
         break;
       case "l":
         var kick = new Audio("./assets/sounds/kick-bass.mp3");
         kick.play();
         break;
     }
    
      document.querySelector("." + this.innerHTML).classList.add("pressed");
      setTimeout(() => {
        
        document.querySelector("." + this.innerHTML).classList.remove("pressed");
        
      }, 100);
    });
  }
}

handleClick();


function imageSoundCorrespondence() {
  for (let j = 0; j < document.querySelectorAll("button").length; j++) { 
    switch (document.querySelectorAll("button")[j].getAttribute("class")) {
      case "w drum":
        document.querySelectorAll("button")[j].style.backgroundImage = "url('./assets/images/tom1.png')";
        break;  
      case "a drum":
        document.querySelectorAll("button")[j].style.backgroundImage = "url('./assets/images/tom2.png')";
        break;
      case "s drum":
        document.querySelectorAll("button")[j].style.backgroundImage = "url('./assets/images/tom3.png')";
        break;
      case "d drum":
        document.querySelectorAll("button")[j].style.backgroundImage = "url('./assets/images/tom4.png')";
        break;
      case "j drum":
        document.querySelectorAll("button")[j].style.backgroundImage = "url('./assets/images/snare.png')";
        break;
      case "k drum":
        document.querySelectorAll("button")[j].style.backgroundImage = "url('./assets/images/crash.png')";
        break;
      case "l drum":
        document.querySelectorAll("button")[j].style.backgroundImage = "url('./assets/images/kick.png')";
        break;
    }
  }
}
 
imageSoundCorrespondence();

function handleKeyPressChangeColorOnMouseDown() {
  for (let k = 0; k < document.querySelectorAll("button").length; k++) {
    document.querySelectorAll("button")[k].addEventListener("mousedown", function () {
      console.log(this.innerHTML);
      switch (this.innerHTML) {
        case "w":
          this.style.color = "white";
          break;
        case "a":
          this.style.color = "white";
          break;
        case "s":
            this.style.color = "white";
          break;
        case "d":
          this.style.color = "white";
          break;
        case "j":
          this.style.color = "white";
          break;
        case "k":
          this.style.color = "white";
          break;
        case "l":
          this.style.color = "white";
      }
    });
  }
}
handleKeyPressChangeColorOnMouseDown();


function handleKeyPressChangeColorOnMouseUp() {
  for (let k = 0; k < document.querySelectorAll("button").length; k++) {
    document.querySelectorAll("button")[k].addEventListener("mouseup", function () {
      console.log(this.innerHTML);
      switch (this.innerHTML) {
        case "w":
          this.style.color = "";
          break;
        case "a":
          this.style.color = "";
          break;
        case "s":
            this.style.color = "";
          break;
        case "d":
          this.style.color = "";
          break;
        case "j":
          this.style.color = "";
          break;
        case "k":
          this.style.color = "";
          break;
        case "l":
          this.style.color = "";
      }
    });
  }
}
handleKeyPressChangeColorOnMouseUp();
