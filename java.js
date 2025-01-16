<script>
  const tooltip = document.getElementById('tooltip');

  document.querySelectorAll('.hover-area').forEach(area => {
    area.addEventListener('mouseenter', (e) => {
      const info = e.target.getAttribute('data-info');
      tooltip.textContent = info;
      tooltip.style.display = 'block';
    });

    area.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY + 10}px`;
    });

    area.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
</script>
