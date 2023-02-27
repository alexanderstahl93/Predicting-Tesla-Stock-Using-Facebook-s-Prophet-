function generatePitches() {
    const persona = document.getElementById("persona").value;
    const action = document.getElementById("action").value;
    const description = document.getElementById("description").value;
    
    // Add your OpenAI API key here
    const apiKey = "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";
  
    const prompt = `Please write 3 different compelling product pitches that speaks directly to the ${persona} and encourages them to ${action} on the ${description}. For each pitch, end with a tag line.`;
    const numResponses = 3;
    const length = 100;
  
    fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: length,
        n: numResponses,
        stop: "."
      })
    })
    .then(response => response.json())
    .then(data => {
      const pitches = data.choices.map(choice => choice.text.trim());
  
      // Display the pitches in the output section
      document.getElementById("pitch1").querySelector(".content").textContent = pitches[0];
      document.getElementById("pitch1").querySelector(".tagline").textContent = generateTagline();
      document.getElementById("pitch2").querySelector(".content").textContent = pitches[1];
      document.getElementById("pitch2").querySelector(".tagline").textContent = generateTagline();
      document.getElementById("pitch3").querySelector(".content").textContent = pitches[2];
      document.getElementById("pitch3").querySelector(".tagline").textContent = generateTagline();
    })
    .catch(error => console.error(error));
  }
  