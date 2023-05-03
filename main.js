import './style.css';
import { CatService } from './services/cat-service';
import confetti from 'canvas-confetti';


CatService.getFacts().then(data => { 
  console.log(data);
  displayData(data);
  fireConfetti();
})

function displayData(data) {
  const list = document.getElementById('facts-list');
  for (const factObj of data) {
    list.innerHTML += `<li>${factObj.fact}</li>`
  }
}

function fireConfetti() {
  let end = Date.now() + (1 * 1000);
  let colors = ['#bb0000', '#ffffff'];
  
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}