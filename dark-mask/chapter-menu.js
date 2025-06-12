
function generateChapterDropdown(currentPage) {
  const chapters = [
    { file: "chapter1.html", label: "Chapter 1" },
    { file: "chapter2.html", label: "Chapter 2" },
    { file: "chapter3.html", label: "Chapter 3" },
    // Add future chapters here
  ];

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

  const container = document.querySelector(".chapter-dropdown");
  if (container) container.appendChild(select);
}
