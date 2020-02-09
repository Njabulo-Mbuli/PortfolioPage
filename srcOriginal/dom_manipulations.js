
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll("hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
  
        hamburgers.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

    function reveal_menu_items() {
  var x = document.getElementById("sliding_menu");
  if (x.className.indexOf("menu_reveal") == -1) {  
    x.className = "menu_reveal";
    document.querySelectorAll("hamburger").classList.toggle("is-active");
  } else { 
    x.className = x.className.replace("menu_reveal", "menu_hidden");
  }
}
var counter = 0;
var hello_txt = 'Hello;'; /* The text */
var my_name_txt = 'My name is Njabulo an';
var complete_details='d I am a web developer :)';
var speed = 90; /* The speed/duration of the effect in milliseconds */

function typing(){
	setTimeout(type_Hello, 2700);
}

function type_Hello() {
  if (counter < hello_txt.length) {
  	document.getElementById("first_flash").style.display="none";
    document.getElementById("hello").innerHTML += hello_txt.charAt(counter);
    counter++;
    setTimeout(type_Hello, speed);
  }
  else{
  	counter=0;
document.getElementById("hello").innerHTML += "<span class=\"flashing\" id=\"third_flash\" style=\"color:black;\">  |</span>";
  	setTimeout(type_My_Name, 2000);
  }
}

function type_My_Name() {
	document.getElementById("third_flash").style.display="none";
	if(counter<my_name_txt.length){
	document.getElementById("my_name").innerHTML += my_name_txt.charAt(counter);
	counter++;
	setTimeout(type_My_Name, speed);
    }
    else{
		document.getElementById("my_name").innerHTML+="<span class=\"flashing\" id=\"second_flash\">  |</span>";
		counter=0;
		setTimeout(complete, 1500);
	}

function complete(){
	document.getElementById("second_flash").style.display="none";
	if(counter<complete_details.length){
	document.getElementById("my_name").innerHTML += complete_details.charAt(counter);
	counter++;
	setTimeout(complete, speed);
    }
    else{
		document.getElementById("my_name").innerHTML+="<span class=\"flashing\" id=\"second_flash\">  |</span>";
	}
}
}