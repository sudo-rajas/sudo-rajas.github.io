$( document ).ready(function() {
    console.log( "ready!" );
    /*******************************************************************/
    /*  Update Age and Copyright Year                                  */
    /*******************************************************************/
    var currentYear = new Date().getFullYear();
    var age = currentYear - 2000;
    /*console.log(currentYear);*/


    /*******************************************************************/
    /*  Typing effect   */
    /*******************************************************************/
    var command = '<p><span class="lightBlueText">root@rkulkarni.com         :~#</span><span class="whiteText whoami">whoami</span></p><p id="typingName"><span class="whiteText">Hey, I\'m Rajas,</span></p><p id="typingRole"><span class="lightBlueText">Cybersecurity Intern at Neumetric.</span></p><p><span class="whiteText">Welcome, I live in Pune and I am passionate about IT and technologies in general.<br>I have completed by Bachelors in Computer Engineering.<br>And I aspire to find a job in the world of computer security.<br>Here is some more information about me:<br></span></p><div id="typingInformations"><div class="typingRow"><p class="rowTitle whiteText">About me :</p><p class="rowDot"><span class="lightBlueText">    .Name :</span><span class="whiteText">"Rajas Kulkarni"</span></p><p class="rowDot"><span class="lightBlueText">    .Currently :</span><span class="whiteText">"Intern | Neumetric"</span></p><p class="rowDot"><span class="lightBlueText">    .Age :</span><span id="Age" class="whiteText">"'+ age +'"<br></span></p></div><div class="typingRow"><p class="rowTitle whiteText">Education :</p><p class="rowDot"><span class="lightBlueText">    .Savitribai Phule Pune University (Pune) :</span><span class="whiteText">"Computer Networks, Information & Cybersecurity, Data Structure & Algorithm."</span></p></div>             <div class="typingRow"><p class="rowTitle whiteText">Contact :</p><p class="rowDot"><span class="lightBlueText">    .Mail :</span><span class="darkBlueText"><a href="mailto:rkulkarni7299@gmail.com" class="typingLink">"rkulkarni7299@gmail.com"</a></span></p><p class="rowDot"><span class="lightBlueText">    .LinkedIn :</span><span class="darkBlueText"><a href="https://www.linkedin.com/in/rajaskulkarni/" target="_blank" class="typingLink">"../in/rajaskulkarni"</a></span></p><p class="rowDot"><span class="lightBlueText">    .Twitter :</span><span class="darkBlueText"><a href="https://twitter.com/rkulkarni7299" target="_blank" class="typingLink">"@rkulkarni7299"</a></span></p><p class="rowDot"><span class="lightBlueText">    .GitHub :</span><span class="darkBlueText"><a href="https://github.com/sudo-rajas" target="_blank" class="typingLink">"sudo-rajas"</a></span></p></div></div>',
    i = 0,                                        
    htmlTag,
    text,
    paused = false;
    /* Typing effect function */
    (function type() {

 		//Slice var "command" and increase counter
    text = command.slice(0, ++i);
   
    //get "Typing" Div in console
    document.getElementById('typingText').innerHTML = text;
		
    //Stop the loop when all text is typed
    if(text == command){
    	return;
    }
    
    //Check if html tag
    var char = text.slice(-1);
    if( char === '<' ){
    	htmlTag = true;
    }
    if( char === '>' ){
    	htmlTag = false;
    } 
		//If true, Stop typing to hide it otherwise it appears for a second
    if (htmlTag){
    	return type();
    }
    
    //Type fast everything except command => simulate typed by user
    if(i >= 66 && i <= 104){
    	if(paused){
      	setTimeout(type, 250);
      }
      else{
      	paused = true;
      	setTimeout(type, 2000);
      }
    }
    else{
      //Remove the cursor -and the flex display so- if we typed the "whoami"
    	if(i == 105){
    		$('#typingText').css("display","block");
    	}
    	setTimeout(type, 10);
    }
  }());

  /* Website Slider Animation */
  setTimeout(websiteSlider, 5000);
    
  /* Testimonials Switch Animation */
  setTimeout(testimonialsSwitch, 5000);
});




/*******************************************************************/
/*  Website Slider                                                 */
/*******************************************************************/
function websiteSlider(){
  $('.wSI3').css('animation', 'moveToRightCard 1.5s forwards ease-in');
  
  setTimeout(function(){ 
    $('.wSI2').css('animation', 'moveToRightCard 1.5s forwards ease-in');
  }, 5000);
  
  setTimeout(function(){ 
    $('.wSI2').css('animation', 'resetPosCard 1.5s forwards ease-out');
  }, 10000);

  setTimeout(function(){ 
    $('.wSI3').css('animation', 'resetPosCard 1.5s forwards ease-out');
  }, 15000);

  setTimeout(websiteSlider, 35000);
};

/*******************************************************************/
/*  Testimonials SWitch                                            */
/*******************************************************************/
var testimonialsIndex = 0;
function testimonialsSwitch(){
  $('.oneTestimonial').eq(testimonialsIndex).removeClass("activeTestimonial");
  if(testimonialsIndex == 4){
    testimonialsIndex = 0;
  }
  else{
    testimonialsIndex++;
  }
  $('.oneTestimonial').eq(testimonialsIndex).addClass("activeTestimonial");
  $('.oneTestimonial').eq(testimonialsIndex).css('animation', 'fadeIn ease 2.5s');
  
  setTimeout(testimonialsSwitch, 5000);
};