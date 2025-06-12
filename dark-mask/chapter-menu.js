
function generateChapterDropdown(currentPage) {
  const chapters = [
    { file: "chapter1.html", label: "Chapter 1" },
    { file: "chapter2.html", label: "Chapter 2" },
    { file: "chapter3.html", label: "Chapter 3" },
    { file: "doomsday.html", label: "Doomsday" },
    // Add future chapters here
  ];

  const container = document.querySelector(".chapter-dropdown");

  // Create dropdown
  const select = document.createElement("select");
  select.onchange = (e) => window.location.href = e.target.value;

  const defaultOption = document.createElement("option");
  defaultOption.text = "Select Chapter";
  defaultOption.value = "";
  select.appendChild(defaultOption);

  chapters.forEach(({ file, label }) => {
    const option = document.createElement("option");
    option.value = file;
    option.text = label;
    if (file === currentPage) option.selected = true;
    select.appendChild(option);
  });

  container.appendChild(select);

  // Create prev/next buttons
  const nav = container.parentElement;
  const index = chapters.findIndex(c => c.file === currentPage);

  if (index > 0) {
    const prev = document.createElement("a");
    prev.href = chapters[index - 1].file;
    prev.textContent = "← Previous";
    prev.style.marginRight = "1em";
    nav.insertBefore(prev, container);
  }

  if (index < chapters.length - 1) {
    const next = document.createElement("a");
    next.href = chapters[index + 1].file;
    next.textContent = "Next →";
    next.style.marginLeft = "1em";
    nav.appendChild(next);
  }
}
