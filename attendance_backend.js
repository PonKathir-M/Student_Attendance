// Highlight present students
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      cb.closest("tr").classList.toggle("present", cb.checked);
    });
  });

  document.getElementById("selectAll").onclick = () => {
    checkboxes.forEach(cb => {
      cb.checked = true;
      cb.closest("tr").classList.add("present");
    });
  };

  document.getElementById("deselectAll").onclick = () => {
    checkboxes.forEach(cb => {
      cb.checked = false;
      cb.closest("tr").classList.remove("present");
    });
  };

  document.getElementById("attendanceForm").onsubmit = (e) => {
    e.preventDefault();
    const presentStudents = [];
    checkboxes.forEach(cb => {
      if (cb.checked) {
        const row = cb.closest("tr");
        const roll = row.cells[0].textContent;
        const name = row.cells[1].textContent;
        presentStudents.push(`${roll} - ${name}`);
      }
    });
    alert("Present Students:\n" + presentStudents.join("\n"));
  };
});
