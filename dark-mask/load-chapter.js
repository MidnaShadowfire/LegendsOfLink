
fetch("chapter1.txt")
  .then(response => response.text())
  .then(text => {
    const container = document.getElementById("chapter-content");
    const paragraphs = text.trim().split(/\n\s*\n/);
    container.innerHTML = paragraphs.map(p => `<p>${p.replace(/\n/g, ' ')}</p>`).join('');
  });
