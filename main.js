const items = document.querySelectorAll('.items');
items.forEach(item => {
    item.addEventListener('click', function() {
      items.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });