var swiper = new Swiper('.swiper-container', 
  {
    
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    keyboard:true,
    autoplay: {
      delay: 4000, // 4 сек на прокрутку
      disableOnInteraction: false, 
    },
  });
  swiper.on('click', '.swiper-pagination-bullet', function() {
    // При нажатии на элемент пагинации
    let paginationBullet = this;
    
    // Увеличиваем размер пагинации
    let currentSize = parseInt(paginationBullet.style.width || paginationBullet.offsetWidth);
    let newSize = currentSize + 10; 
    paginationBullet.style.width = newSize + 'px';
  });