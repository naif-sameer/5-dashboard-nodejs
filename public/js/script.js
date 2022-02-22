//  nav bar script
$('.nav-item').on('click', (e) => {
  console.log('click');

  e.target.classList.add('active');
});
