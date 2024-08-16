document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('.task-list-item input[type="checkbox"]');

  let delay = 0;
  checkboxes.forEach((checkbox, index) => {
    setTimeout(() => {
      checkbox.checked = true;
      checkbox.disabled = true;
    }, delay);
    delay += 1000;
  });
});