const items = document.querySelectorAll('.items');
items.forEach(item => {
    item.addEventListener('click', function() {
      items.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const menu = document.querySelector('.menu');
  const menuBtn = document.querySelector('.menu-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  menuBtn.addEventListener('click', function(){
    menu.classList.add('active');
    menuBtn.classList.add('hide');
    cancelBtn.classList.remove('hide');
  });
  cancelBtn.addEventListener('click', function(){
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    cancelBtn.classList.add('hide');
  })