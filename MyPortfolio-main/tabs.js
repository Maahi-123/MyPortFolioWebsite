// Tab controls
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Mobile navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  const icon = document.querySelector('.nav-toggle i');
  links.classList.toggle('open');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});
