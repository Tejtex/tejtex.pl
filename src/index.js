async function loadExploits() {
  const res = await fetch("data/exploits.yml");
  const yamlText = await res.text();
  const exploits = jsyaml.load(yamlText);
  const container = document.getElementById("exploits-container");

  exploits.forEach(exploit => {
    const card = document.createElement("div");
    card.className = "embed";

    card.innerHTML = `
      <div class="title">${exploit.title}</div>
      <div class="date">${exploit.date}</div>
      <div class="desc">${exploit.summary}</div>
    `;

    container.appendChild(card);
  });
}

loadExploits();
