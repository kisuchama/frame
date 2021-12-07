// slider

function cardSlider() {
    const sliderBox = document.getElementById("slider");
    const unevolved = document.getElementById("unevo");
    const evolved = document.getElementById("evo");
  
    const setWidth = function (mouseX) {
      unevolved.style.right = mouseX + "px"
      evolved.style.left = mouseX + "px"
    }
  
    sliderBox.addEventListener("mousemove", function (event) {
      console.log(pageX)
    })
}