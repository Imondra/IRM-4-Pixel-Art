var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    $('#indicador-de-color').css('backgroundColor', colorActual);
  })
);

function generarPaleta() {
  for (var i = 0; i<nombreColores.length; i++){
    var color = $('<div>').addClass('color-paleta');
    color.css('backgroundColor', nombreColores[i]);
    $paleta.append(color);
  }
}

function grillaDePixeles(){
  for (var i=0; i<1749; i++){
    var pixel = $('<div>').addClass('pixel');
    $grillaPixeles.append(pixel);
  }
}

$paleta.click(function(e) {
  colorLlamado = $(e.target).css('backgroundColor');
  $('#indicador-de-color').css('backgroundColor', colorLlamado);
})

$grillaPixeles.click(function(e){
  $(e.target).css('backgroundColor', $('#indicador-de-color').css('backgroundColor'));
})

var apretado = false;

$grillaPixeles.mousedown(function(){
  apretado = true; 
})

$grillaPixeles.mouseover(function(e){
  if (apretado == true){
    $(e.target).css('backgroundColor', $('#indicador-de-color').css('backgroundColor')); 
  }
})  

$grillaPixeles.mouseup(function(){
  apretado = false;
})

$("#guardar").click(function (){
  guardarPixelArt();
})

$(".imgs").click(function(e){
  //No sale, no se porque
  var imagen = e.target.id;
  cargarSuperheroe(imagen);

  switch (e.target.id){
        case "batman":
          cargarSuperheroe(batman);
          break;
        case "wonder":
          cargarSuperheroe(wonder);
          break;
        case "flash":
          cargarSuperheroe(flash);
          break;
        case "invisible":
          cargarSuperheroe(invisible);
          break;
        }
});

$("#borrar").click(function(){
  $('#grilla-pixeles').children().animate({"background-color": "white"}, 900);
});

$(document).ready(function(){
generarPaleta();
grillaDePixeles();
  $("body").hide();
  $("body").fadeIn(1000);
})
  