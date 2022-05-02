//parallax effict
document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(Layer => {
    const speed = Layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerWidth - e.pageY*speed)/100
    Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  }
    )
}

// hover in btn 
  let btn = document.querySelector('.mouse-cursor-1');
  btn.addEventListener('mousemove', mouse => {
  let rect = mouse.target.getBoundingClientRect();
  let x = mouse.clientX - rect.left;
  let y = mouse.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});


