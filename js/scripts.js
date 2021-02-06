(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        /*
                var logo = document.getElementById('logo');
                console.log(logo);
                //logo.hasAttribute('class') Podemos saber si la variable tiene una clase u otras cosas.
                //logo.getAttribute('class') Podemos conocer la clase de la variable. 
                var navegacion = document.getElementById('navegacion');
                // navegacion.style.display = 'none'; // Me permite eliminarlo*/
        /*
                getElementsByClassName('');
                var navegacion = document.getElementsByClassName('navegacion');
                console.log(navegacion[0]);
                var contenido = document.getElementsByClassName('contenido');
                console.log(contenido[0]);
                contenido[0].style.display = none;*/

        //getElementsByTagName()
        /*
        var enlaces = document.getElementsByTagName('a');
        console.log(enlaces.length);
        for (var i = 0; i < enlaces.length; i++) {
            enlaces[i].setAttribute('target', '_blank'); //targe = "_blank" abre el enlace en una nueva pestaña.

        }
        var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
        console.log(enlacesSidebar);
        for (var i = 0; i < enlacesSidebar.length; i++) {
            enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
        }*/

        //querySelector() y querySelectorAll()
        /*var logo = document.querySelector('#logo');
        console.log(logo);

        var encabezado = document.querySelectorAll('h2, footer p');
        console.log(encabezado[0].innerText); //innerText permite saber qué texto hay en el elemento.
        console.log(encabezado);
        var enlaces = document.querySelectorAll('a'); //Internet Explorer 7 no soporta querySelector.
        console.log(enlaces);*/
        /*
                var enlaces = document.querySelectorAll('a');
                console.log(enlaces);*/
        /*for (var i = 0; i < enlaces.length; i++) {
            console.log(enlaces[i].innerText);
        }*/
        /*enlaces.forEach(function(enlace) {
            console.log(enlace);
        });*/
        /*enlaces.forEach(enlace => {
            console.log(enlace);
        });*/
        /*let arrayEnlaces = enlaces.map(enlace => enlace); //Retorna los valores del arreglo para guardarlos.
        console.log('==============='); //este no me funcionó no sé que pasó ahí.
        console.log(arrayEnlaces);*/
    });
})();
$(function() {
    'use strict';
    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');
    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();
        return false;
    }
});