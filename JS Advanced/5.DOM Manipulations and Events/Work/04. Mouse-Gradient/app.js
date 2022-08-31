function attachGradientEvents() {

    let box = document.getElementById('gradient');
    let result = document.getElementById('result');
    box.addEventListener('mousemove', function (e) {
      result.textContent = Math.floor((e.offsetX/e.currentTarget.clientWidth)*100)+'' 
      console.log(e);
    })

}