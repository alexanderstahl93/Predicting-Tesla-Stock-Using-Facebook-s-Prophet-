const form = document.querySelector('#pitch-form');
const container = document.querySelector('#pitch-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const persona = document.querySelector('#persona').value;
  const action = document.querySelector('#action').value;
  const description = document.querySelector('#description').value;
  
  const response = await fetch('/generate-pitches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ persona, action, description })
  });
  
  const pitches = await response.json();
  
  container.innerHTML = '';
  
  pitches.forEach((pitch, index) => {
    const pitchDiv = document.createElement('div');
    pitchDiv.classList.add('pitch');
    
    const pitchTitle = document.createElement('h2');
    pitchTitle.textContent = `Pitch ${index + 1}:`;
    
    const pitchText = document.createElement('p');
    pitchText.textContent = pitch;
    
    const tagline = document.createElement('p');
    tagline.textContent = 'Our product: Your solution.';
    
    pitchDiv.appendChild(pitchTitle);
    pitchDiv.appendChild(pitchText);
    pitchDiv.appendChild(tagline);
    
    container.appendChild(pitchDiv);
  });
});
