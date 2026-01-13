(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

// Reforma Tributaria CountDown
// Set the date we're counting down to
var countDownDate = new Date("May 1, 2026 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dia-d-reforma").innerHTML = "<h2 style='text-align:center; color:white'>Sua emissão de notas fiscais vai parar em 1º de maio de 2026?</h2>"
  + "<div class='col-sm-6 col-lg-3 text-center wow ' data-wow-delay='0.1s'>"
  + "   <h1 class='display-4 text-white' data-toggle='counter-up'>" + days + "</h1>"
  + "   <span class='fs-5 text-white'>Dias</span>"
  + "   <hr class='bg-white w-25 mx-auto mb-0'>"
  + "</div>" 
  + "<div class='col-sm-6 col-lg-3 text-center wow ' data-wow-delay='0.1s'>" 
  + "   <h1 class='display-4 text-white' data-toggle='counter-up'>" + hours + "</h1>"
  + "   <span class='fs-5 text-white'>Horas</span>"
  + "   <hr class='bg-white w-25 mx-auto mb-0'>"
  + "</div>" 
  + "<div class='col-sm-6 col-lg-3 text-center wow ' data-wow-delay='0.1s'>" 
  + "   <h1 class='display-4 text-white' data-toggle='counter-up'>" + minutes + "</h1>"
  + "   <span class='fs-5 text-white'>Minutos</span>"
  + "   <hr class='bg-white w-25 mx-auto mb-0'>"
  + "</div>" 
  + "<div class='col-sm-6 col-lg-3 text-center wow fadeIn' data-wow-delay='0.1s'>"   
  + "   <h1 class='display-4 text-white' data-toggle='counter-up'>" + seconds + "</h1>"
  + "   <span class='fs-5 text-white'>Segundos</span>"
  + "   <hr class='bg-white w-25 mx-auto mb-0'>"
  + "</div>"
  + "<h5 style='text-align:center; color:white'>A contagem regressiva para a Reforma Tributária começou, e a adaptação dos seus sistemas não é opcional.</h5>" 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
  // Disable the submit button after form submission
  var form = document.getElementById('form-inscricao');
  var btn = form.querySelector('button._submit');

  form.addEventListener('submit', function() {
    btn.classList.add('processing');
    btn.disabled = true;
  });
  
});

/* Google-Sheet */
const form = document.getElementById('form-inscricao');
const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value,
        tag: document.getElementById('tag').value
      };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzuUyiU8XVzxPBqrjnQCrrOxrV_AH8URcU80L4oziaTm_ywMIb4-BMybosEhd6uvxk8/exec', {
          method: 'POST',
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          switch(formData.tag) {
            case '202511-FRI':
              window.location.href = "https://www.expertfiscaltributario.com.br/descomplicando-cst-cclasstrib-notas-fiscais/obrigado/fri/";
              break;
            case '202511-QNT':
              window.location.href = "https://www.expertfiscaltributario.com.br/descomplicando-cst-cclasstrib-notas-fiscais/obrigado/qnt/";
              break;
            default:
              window.location.href = "https://www.expertfiscaltributario.com.br/descomplicando-cst-cclasstrib-notas-fiscais/obrigado/org/";
          }
        } else {
          responseMessage.textContent = 'Erro ao enviar a mensagem. Por favor, tente novamente.';
        }

      } catch (error) {
        responseMessage.textContent = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
      }
    });