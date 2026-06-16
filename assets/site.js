(function () {
  const search = document.getElementById("archiveSearch");
  const table = document.getElementById("archiveTable");

  if (!search || !table) return;

  search.addEventListener("input", function () {
    const query = search.value.trim().toLowerCase();
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(function (row) {
      const text = row.textContent.toLowerCase();
      row.hidden = query.length > 0 && !text.includes(query);
    });
  });
})();
