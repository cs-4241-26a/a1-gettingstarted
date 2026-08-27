const table = document.getElementById('technology-experience-table');

table.addEventListener('mouseover', (e) => {
  const row = e.target.closest('tr');
  if (row && row.parentNode.tagName === 'TBODY' || row.closest('table') === table) {
    row.classList.add('is-hovered');
  }
});

table.addEventListener('mouseout', (e) => {
  const row = e.target.closest('tr');
  if (row) {
    row.classList.remove('is-hovered');
  }
});