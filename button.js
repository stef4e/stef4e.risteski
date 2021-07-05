window.addEventListener('scroll', function()
    {
     var scroll = document.querySelector('.to-top');
     scroll.classList.toggle("active", window.scrollY > 50)
    }
)