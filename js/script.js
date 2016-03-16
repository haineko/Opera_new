var loader = new PxLoader();
    loader.addImage('img/bg.jpg');
var btn = document.querySelector(".entry__btn");
var curtain = document.querySelector(".curtain-back");
var enrty = document.querySelector(".entry");
var dish = document.querySelector(".description__link");
var descr = document.querySelector(".description");
var curtainFooter = document.querySelectorAll(".curtain-footer");

var descrLink = document.querySelector(".description__link");
var descr = document.querySelector(".description");
var dish = document.querySelector(".dish");
var slider = document.querySelector(".slider--dish");
var intro = document.querySelector(".main--intro");
var myMap = document.getElementById("map");

loader.addCompletionListener(function() { 
    $('body').addClass('loaded');
    $(document).ready(function(){
      $('.banner').slick({
          autoplay: true,
          dots: true,
          autoplaySpeed: 2800,
          pauseOnDotsHover: true,
          arrows: false
      });
    });

});

function upCurtain() {
  if (curtain) {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      curtain.classList.add('curtain--hide');
      enrty.classList.add('entry--hide');
      for (var i = 0; i < curtainFooter.length; i++) {
        curtainFooter[i].classList.add('curtain-footer--show');
      }
    });
  } else {
    console.log("занавеса нет!");
  }
}

function dishSlider() {
  if (descrLink) {
    descrLink.addEventListener('click', function(event) {
      event.preventDefault();
      intro.classList.add('main--hide');
      dish.classList.add('dish--show');
      slider.classList.add('slider--show');
      $('.dish__wrap').slick({
          autoplay: true,
          dots: true,
          fade: true,
          autoplaySpeed: 9000,
          asNavFor: '.slider__wrap--dish',
          arrows: false
      });
      $('.slider__wrap--dish').slick({
          autoplay: true,
          dots: false,
          fade: true,
          autoplaySpeed: 9000,
          asNavFor: '.dish__wrap',
          arrows: false
      });
    });
  } 
}

function stageSlider() {
    if (document.querySelector(".background--stage")) {
      $('.description-stage').slick({
          autoplay: true,
          dots: false,
          fade: true,
          autoplaySpeed: 9000,
          asNavFor: '.slider__wrap',
          arrows: false
      });
      $('.slider__wrap').slick({
          autoplay: true,
          dots: false,
          fade: true,
          autoplaySpeed: 9000,
          asNavFor: '.description-stage',
          arrows: false
      });
  } 
}

function Scroll() {
    if (document.querySelector(".scrollbar-inner")) {
    jQuery(document).ready(function(){
      jQuery('.scrollbar-inner').scrollbar({
        autoScrollSize: false
      });
    });
  }
}

function initialize() {
    
      var myLatlng = new google.maps.LatLng(53.8924836,27.5782985);

      var myOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#b5a57c"
        }, {
          "lightness": 39
        }
      ]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    }, {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    }, {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a29061"
        }
      ]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a29061"
        }
      ]
    }
  ],
        scrollwheel: false
      };
      var map = new google.maps.Map(document.getElementById("map"), myOptions); 
      var map_point = new google.maps.MarkerImage("img/map-point1.png", new google.maps.Size(164, 106), new google.maps.Point(0,0), new google.maps.Point(70, 53));	
      var nerds = new google.maps.LatLng(53.8924836,27.5782985);
      var marker = new google.maps.Marker({
        position: nerds,
        map: map,
        icon: map_point,
        title: "Casino Opera",
        zIndex: 8
      });

    
	}

if (myMap) {
	google.maps.event.addDomListener(window, "load", initialize);
} 

loader.start();
upCurtain();
dishSlider();
stageSlider();
Scroll();