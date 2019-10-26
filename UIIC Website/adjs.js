// JavaScript Document
$(document).ready(function(){
"use strict";
	
    
    $( ".btn, .btn-primary, .btn-info, .btn-sm1" ).click( function( ) {
      $( ".btn, .btn-primary, .btn-info, .btn-sm1" ).button();
  
  } );	
    $( "#user" ).click( function(){
    $( "#user" ).selectmenu();
  } );
	
	$(".btn, .btn-primary, .btn-info, .btn-sm1").hover(function(){
		$("this").toggleClass("btn-active");
		
	});
	var tooltips;
    $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    $( "<button>" ).click(function(){
        tooltips.tooltip("open");
	$( "<button>" ).insertAfter( "form" );
      });
	
    $( ".rowacccover-radio-1" ).click(function(){
    $( "#radio-1" ).prop("checked",true);
  } );
	
	$( ".rowacccover-radio-2" ).click(function(){
    $( "#radio-2" ).prop("checked",true);
  
  } );
});

