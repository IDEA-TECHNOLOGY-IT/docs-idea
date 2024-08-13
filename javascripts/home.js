const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const centerX = card.offsetLeft + cardWidth / 2;
  const centerY = card.offsetTop + cardHeight / 2;

  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  const percentX = deltaX / (cardWidth / 2);
  const percentY = deltaY / (cardHeight / 2);

  const angleX = percentY * 10;
  const angleY = -percentX * 10;

  card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0) rotateY(0)';
});
