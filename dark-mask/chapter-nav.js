
document.addEventListener("DOMContentLoaded", () => {
  fetch("chapters.json")
    .then(response => response.json())
    .then(chapters => {
      const currentFile = window.location.pathname.split("/").pop();
      const container = document.getElementById("chapter-nav");
      const dropdown = document.createElement("select");

      let currentIndex = chapters.findIndex(ch => ch.file === currentFile);

      chapters.forEach((chapter, index) => {
        const option = document.createElement("option");
        option.value = chapter.file;
        option.textContent = chapter.title;
        if (chapter.file === currentFile) option.selected = true;
        dropdown.appendChild(option);
      });

      dropdown.addEventListener("change", (e) => {
        window.location.href = e.target.value;
      });

      container.appendChild(dropdown);

      if (currentIndex > 0) {
        const prev = document.createElement("a");
        prev.href = chapters[currentIndex - 1].file;
        prev.textContent = "← Previous";
        prev.style.marginRight = "1em";
        container.insertBefore(prev, dropdown);
      }

      if (currentIndex < chapters.length - 1) {
        const next = document.createElement("a");
        next.href = chapters[currentIndex + 1].file;
        next.textContent = "Next →";
        next.style.marginLeft = "1em";
        container.appendChild(next);
      }
    });
});
