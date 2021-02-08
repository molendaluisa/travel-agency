 const menuToggle = document.querySelector('.toggle');
 const menuList = document.querySelector('.menu')

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menuList.classList.toggle('active');
      })    