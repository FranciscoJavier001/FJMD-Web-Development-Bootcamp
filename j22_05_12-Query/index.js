//**_______________________________________________________________________________________________________________________________________________*/
// $("h1").css("color", "red") //** Cambie el estilo del h1 a color rojo */
// $("h1").addClass("big-title margin-50") //** Aqui no usamos el punto y puedo ingresar varias clases */
// $("h1").hasClass("margin-50") //** Asi podemos ver si tiene la clases y me regresa un booleano */
// $("h1").removeClass("big-title") //** Asi remuevo la clase */

// $("h1").text("Bye") //** Asi le cambio el texto al elemento, muestra lo que esta dentro de los "" */

// $("button").text("Don't Click Me")
// $("button").html("<em>Hey</em>") //** Le cambie el texto a los botones y lo puse en cursiva (solo mostro texto no etiquetas) */

// $("img").attr("src") //** Asi puedo ver las propiedades/atributos de la img */
// $("a").attr("href", "https://www.yahoo.com") //** Asi le puedo cambiar el hypervinculo */

// $("h1").attr("class") //** Asi puedo ver los atributos/propiedades de la clase h1 */

// $("h1").click(function() { //** Al hacer click en el h1, se lanza esta funcion anonima */
//     $("h1").css("color", "purple") //** Mediante la cual se cambia el color a morado */
// })

//** Funcion normal, pero sin jQuery */
// for (let i = 0; i < 5; i++) { //** Creamos un array con los 5 index */
//     document.querySelectorAll("button")[i].addEventListener("click", function () { //** Cuando hagamos click en un boton llamo esta funcion */
//         document.querySelector("h1").style.color = "purple" //** Que cambie el h1 a color morado */
//     })
// }

// $("button").click(function() { //** Asi seleccionamos todos los botones y mandamos esta funcion anonima */
//     $("h1").css("color", "purple") //** Accion es que va a cambiar el h1 a color purpura */
// })

// $("input").keypress(function(event) { //** En el input, cuando una tecla sea presionada, manda el evento de esta funcion */
//     console.log(event.key); //** Muestra del evento, que tecla fue presionada-(existen mas eventos, pero lo aislo con key) */
// })

// $(document).keypress(function(event) { //** Seleccionamos el documento entero, estando atento a una tecla presionada, llamando funcion anonima */
//     // console.log(event.key); //** Mostramos en consola la tecla presionada */
//     $("h1").text(event.key) //** El h1 va a ser cambiado por la tecla que se ha presionado */
// })

// $("h1").on("mouseover", function() { //** Seleccionamos el h1, donde cuando se mueva el mouse por encima llame esta funcion */
//     $("h1").css("color", "purple") //** El h1, va a cambiar de color a purpura */
// })

// $("h1").on("click", function() { //** Seleccionamos el h1, donde cuando dems click en el h1 llame esta funcion */
//     $("h1").css("color", "purple") //** El h1, va a cambiar de color a purpura */
// })

// $("h1").before("<button>New</button>") //** Asi creo un boton antes del h1 */
// $("h1").after("<button>New</button>") //** Asi creo un boton despues del h1 */
// $("h1").prepend("<button>New</button>") //** Asi creo un boton antes del h1, en la misma fila */
// $("h1").append("<button>New</button>") //** Asi creo un boton despues del h1 en la misma fila */

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").hide() //** El h1 desaparece */
// })

// $("h1").show() //** Asi lo vuelvo a aparecer */

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").toggle() //** El h1 desaparece o aparece */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").fadeOut() //** El h1 desaparece pero con efecto */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").fadeIn() //** El h1 aparece pero con efecto */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").fadeToggle() //** El h1 desaparece o aparece */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").slideUp() //** El h1 desaparece hacia arriba */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").slideDown() //** El h1 aparece hacia abajo */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").slideToggle() //** El h1 desaparece o aparece hacia arriba y abajo */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").animate({opacity: 0.5}) //** El h1 se hace un poco mas transparente, recuerda ponerlo entre curly brackers */
// })

// $("button").on("click", function() { //** Al hacer click en un boton */
//     $("h1").animate({margin: 20}) //** El h1 debo ponerlo entre curly brackers y aqui la animacion cambia el margen del elemento */
// })

$("button").on("click", function() { //** Al hacer click en un boton */
    //** H1, primero se va para arriba, luego se va para abajo, luego se hace mas transparente, todo animado */
    $("h1").slideUp().slideDown().animate({opacity: 0.5}) 
})