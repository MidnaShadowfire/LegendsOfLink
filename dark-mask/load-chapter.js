
function loadChapter(filename) {
  const chapters = [
    { file: "chapter1.txt", label: "Chapter 1" },
    { file: "chapter2.txt", label: "Chapter 2" },
    { file: "chapter3.txt", label: "Chapter 3" }
  ];

  // Load the actual chapter content
  fetch(filename)
    .then(response => response.text())
    .then(text => {
      const container = document.getElementById("chapter-content");
      const paragraphs = text.trim().split(/\n\s*\n/);
      container.innerHTML = paragraphs.map(p => `<p>${p.replace(/\n/g, ' ')}</p>`).join('');
    });

  // Generate dropdown and navigation
  const dropdownContainer = document.querySelector(".chapter-dropdown");
  if (!dropdownContainer) return;

  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.text = "Select Chapter";
  defaultOption.value = "";
  select.appendChild(defaultOption);

  chapters.forEach(({ file, label }) => {
    const htmlFile = file.replace(".txt", ".html");
    const option = document.createElement("option");
    option.value = htmlFile;
    option.text = label;
    if (filename === file) option.selected = true;
    select.appendChild(option);
  });

  select.onchange = (e) => {
    if (e.target.value) window.location.href = e.target.value;
  };
  dropdownContainer.appendChild(select);

  // Add prev/next buttons
  const currentIndex = chapters.findIndex(ch => ch.file === filename);
  if (currentIndex > 0) {
    const prevLink = document.createElement("a");
    prevLink.href = chapters[currentIndex - 1].file.replace(".txt", ".html");
    prevLink.textContent = "← Previous";
    prevLink.style.marginRight = "1em";
    dropdownContainer.parentElement.insertBefore(prevLink, dropdownContainer);
  }

  if (currentIndex < chapters.length - 1) {
    const nextLink = document.createElement("a");
    nextLink.href = chapters[currentIndex + 1].file.replace(".txt", ".html");
    nextLink.textContent = "Next →";
    nextLink.style.marginLeft = "1em";
    dropdownContainer.parentElement.appendChild(nextLink);
  }
}

function loadChapter(filename) {
  const chapters = [
    { file: "chapter1.txt", label: "Chapter 1" },
    { file: "chapter2.txt", label: "Chapter 2" },
    { file: "chapter3.txt", label: "Chapter 3" }
  ];

  // Load the actual chapter content
  fetch(filename)
    .then(response => response.text())
    .then(text => {
      const container = document.getElementById("chapter-content");
      const paragraphs = text.trim().split(/\n\s*\n/);
      container.innerHTML = paragraphs.map(p => `<p>${p.replace(/\n/g, ' ')}</p>`).join('');
    });

  // Generate dropdown and navigation
  const dropdownContainer = document.querySelector(".chapter-dropdown");
  if (!dropdownContainer) return;

  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.text = "Select Chapter";
  defaultOption.value = "";
  select.appendChild(defaultOption);

  chapters.forEach(({ file, label }) => {
    const htmlFile = file.replace(".txt", ".html");
    const option = document.createElement("option");
    option.value = htmlFile;
    option.text = label;
    if (filename === file) option.selected = true;
    select.appendChild(option);
  });

  select.onchange = (e) => {
    if (e.target.value) window.location.href = e.target.value;
  };
  dropdownContainer.appendChild(select);

  // Add prev/next buttons
  const currentIndex = chapters.findIndex(ch => ch.file === filename);
  if (currentIndex > 0) {
    const prevLink = document.createElement("a");
    prevLink.href = chapters[currentIndex - 1].file.replace(".txt", ".html");
    prevLink.textContent = "← Previous";
    prevLink.style.marginRight = "1em";
    dropdownContainer.parentElement.insertBefore(prevLink, dropdownContainer);
  }

  if (currentIndex < chapters.length - 1) {
    const nextLink = document.createElement("a");
    nextLink.href = chapters[currentIndex + 1].file.replace(".txt", ".html");
    nextLink.textContent = "Next →";
    nextLink.style.marginLeft = "1em";
    dropdownContainer.parentElement.appendChild(nextLink);
  }
}
