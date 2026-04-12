
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }



    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

//  start Animation
ScrollReveal().reveal('.hero-info' , {
    delay:100,                 // تاخير ظهور //
    duration:600,             // مده الحركه بالملي ثانيه // 
    distance:'50 px',         // مقدار التحرك قبل الظهور//
    origin: 'right',           //جهة الحركه //
    easing:'ease-in-out',    //  نوع الحركه //
});

ScrollReveal().reveal('.hero-img' , {
    delay:100,                 // تاخير ظهور //
    duration:600,             // مده الحركه بالملي ثانيه // 
    distance:'50 px',         // مقدار التحرك قبل الظهور//
    origin: 'left',           //جهة الحركه //
    easing:'ease-in-out',    //  نوع الحركه //
});

ScrollReveal().reveal('.boxes' , {
    delay:100,                 // تاخير ظهور //
    duration:600,             // مده الحركه بالملي ثانيه // 
    distance:'50 px',         // مقدار التحرك قبل الظهور//
    origin: 'bottom',           //جهة الحركه //
    easing:'ease-in-out',    //  نوع الحركه //
});

ScrollReveal().reveal('.categories' , {
    delay:100,                 // تاخير ظهور //
    duration:600,             // مده الحركه بالملي ثانيه // 
    distance:'50 px',         // مقدار التحرك قبل الظهور//
    origin: 'bottom',           //جهة الحركه //
    easing:'ease-in-out',    //  نوع الحركه //
});


ScrollReveal().reveal('.img-about' , {
    delay:100,                 // تاخير ظهور //
    duration:600,             // مده الحركه بالملي ثانيه // 
    distance:'50 px',         // مقدار التحرك قبل الظهور//
    origin: 'left',           //جهة الحركه //
    easing:'ease-in-out',    //  نوع الحركه //
});

//  end Animation

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    // mobile
    320: {
      slidesPerView: 1,
      spaceBetween: 20
      
    },
    // tablets
    640: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // desktop
    1024: {
      slidesPerView:3,
      spaceBetween: 12
     
    }
  }
});







































































































    