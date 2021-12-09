$(document).ready(function(){
   $('.lottie').css("opacity", 0);
   $('.hero-bullet-points').css("opacity", 0);

   $(window).scroll(function(){
       var vh = $(window).height();
       var scroll_position = $(window).scrollTop() - vh;
       var fade_duration = 200;

       var bullet_1 = {
         fade_in_start: 0,
         fade_out_end: 1500,
         class_name: '._1'
       }

       var bullet_2 = {
         fade_in_start: 1500,
         fade_out_end: 4500,
         class_name: '._2'
       }

       var bullet_3 = {
         fade_in_start: 4500,
         fade_out_end: 5500,
         class_name: '._3'
       }

       var bullet_4 = {
         fade_in_start: 5500,
         fade_out_end: 7500,
         class_name: '._4'
       }
       var bullet_5 = {
         fade_in_start:7500,
         fade_out_end: 9500,
         class_name: '._5'
       }
       var bullet_6 = {
         fade_in_start:9500,
         fade_out_end: 11500,
         class_name: '._6'
       }
       var bullet_7 = {
         fade_in_start:11500,
         fade_out_end: 13500,
         class_name: '._7'
       }
       var bullet_8 = {
         fade_in_start:13500,
         fade_out_end: 15500,
         class_name: '._8'
       }
       var bullet_9 = {
         fade_in_start:15500,
         fade_out_end: 17500,
         class_name: '._9'
       }
       var bullet_10 = {
         fade_in_start:17500,
         fade_out_end: 20500,
         class_name: '._10'
       }

       function change(bullet){
         var fade_in_end = bullet["fade_in_start"] + fade_duration;
         var fade_out_start = bullet["fade_out_end"] - fade_duration;

         if (scroll_position >= bullet["fade_in_start"] && scroll_position <= fade_out_start){
           $(bullet["class_name"]).css("opacity", (scroll_position- bullet["fade_in_start"])/ fade_duration);
         } else if (scroll_position >= fade_out_start && scroll_position <= bullet["fade_out_end"]){
           $(bullet["class_name"]).css("opacity", 1-(scroll_position - fade_out_start)/ fade_duration);
         }
         // console.log("change", bullet["class_name"], scroll_position, $(bullet["class_name"]).css("opacity"));
       }

       function set_to_zero(bullet){
         $(bullet["class_name"]).css("opacity", 0);
         // console.log("set to 0", bullet["class_name"], scroll_position);
       }

       if (scroll_position >= bullet_1["fade_in_start"] && scroll_position <= bullet_1["fade_out_end"])
       {
         change(bullet_1);
       } else {
         set_to_zero(bullet_1);
       }

       if (scroll_position >= bullet_2["fade_in_start"] && scroll_position <= bullet_2["fade_out_end"])
       {
         change(bullet_2);
       } else {
         set_to_zero(bullet_2);
       }

       if (scroll_position >= bullet_3["fade_in_start"] && scroll_position <= bullet_3["fade_out_end"])
       {
         change(bullet_3);
       } else {
         set_to_zero(bullet_3);
       }

       if (scroll_position >= bullet_4["fade_in_start"] && scroll_position <= bullet_4["fade_out_end"])
       {
         change(bullet_4);
       } else {
         set_to_zero(bullet_4);
       }

       if (scroll_position >= bullet_5["fade_in_start"] && scroll_position <= bullet_5["fade_out_end"])
       {
         change(bullet_5);
       } else {
         set_to_zero(bullet_5);
       }

       if (scroll_position >= bullet_6["fade_in_start"] && scroll_position <= bullet_6["fade_out_end"])
       {
         change(bullet_6);
       } else {
         set_to_zero(bullet_6);
       }

       if (scroll_position >= bullet_7["fade_in_start"] && scroll_position <= bullet_7["fade_out_end"])
       {
         change(bullet_7);
       } else {
         set_to_zero(bullet_7);
       }

       if (scroll_position >= bullet_8["fade_in_start"] && scroll_position <= bullet_8["fade_out_end"])
       {
         change(bullet_8);
       } else {
         set_to_zero(bullet_8);
       }

       if (scroll_position >= bullet_9["fade_in_start"] && scroll_position <= bullet_9["fade_out_end"])
       {
         change(bullet_9);
       } else {
         set_to_zero(bullet_9);
       }

       if (scroll_position >= bullet_10["fade_in_start"] && scroll_position <= bullet_10["fade_out_end"])
       {
         change(bullet_10);
       } else {
         set_to_zero(bullet_10);
       }

   })
})
