function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => section.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function generateContent() {
  const idea = document.getElementById("ideaInput").value;
  const output = document.getElementById("output");

  if (idea.trim() === "") {
    output.innerHTML = "<p style='color:red;'>Por favor ingresa un tema.</p>";
    return;
  }

  // Simulación de IA
  const caption = `✨ ¡Nuevo post sobre "${idea}"! ¿Te animás a probarlo? #${idea.replace(/\s/g, '')} #influencerlife`;
  const hashtags = `#${idea.replace(/\s/g, '')} #tips #trending #viral`;

  output.innerHTML = `
    <p><strong>Caption sugerido:</strong> ${caption}</p>
    <p><strong>Hashtags:</strong> ${hashtags}</p>
  `;
}
