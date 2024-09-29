// Select all links in the navigation
   document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section's ID
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);

        // Scroll into view with smooth animation
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Top to Button 
var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Animation Js
AOS.init();