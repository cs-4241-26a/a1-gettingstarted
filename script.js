document.querySelectorAll('.dropdown').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      const rows = details.querySelectorAll('tr');
      rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('td, th');
        cells.forEach((cell) => {
          cell.style.animation = 'none';
          cell.style.opacity = 0;
          cell.offsetHeight; 
          cell.style.animation = `fadeSlideIn 0.4s ease forwards`;
          cell.style.animationDelay = `${rowIndex * 80}ms`;
        });
      });
    }
  });
});