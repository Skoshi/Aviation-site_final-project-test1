/**
 * @author HTsao
 */

//login starts here


var attempt = 3; // Variable for counting login attempts. 3 attempts total
// function for login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "DaVinci" && password == "password"){
alert ("Login successfully. Thank you for testing");
//window.location = "anotherpage.html"; // Redirecting to other page, but disable this feature here
return false;
}
else{
attempt --;// Decrementing by one.
alert("Incorrect User Name or Password. You have "+attempt+" attempt(s)  left");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

//login ends here

//page transition starts       
$(document).ready(function(){
    $("body").css("display", "none");
    $("body").fadeIn(4500);
    $(".no_blank").click(function(event){
      
        //however, this prevents target="_blank"
        event.preventDefault();
        linkLocation=this.href;
        
        $("body").fadeOut(1800, redirectPage);
    });
    
    function redirectPage(){
        window.location = linkLocation;
       
    }
    
});
//page transation ends

////////Date, Clock js starting here. this one is NON GMT //
//http://www.sitepoint.com/create-jquery-digital-clock-jquery4u/-->
//http://www.sitepoint.com/10-cool-jquery-clock-tutorials-analog-digital/-->

$(document).ready(function() {
// Create two variable with the names of the months and days in an array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year   
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
    // Create a newDate() object and extract the seconds of the current time on the visitor's
    var seconds = new Date().getSeconds();
    // Add a leading zero to seconds value
    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);
    
setInterval( function() {
    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
    
setInterval( function() {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);   
});
/////NON GMT date clock ends here.

///////GMT ZULU clock starts there. modified by Spike/////////


 function gmtClock(){
   
/* Basic gmt clock */
var time = new Date();
var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
var gmtTime = new Date(gmtMS);
var hour = gmtTime.getHours();
var minute = gmtTime.getMinutes();
var second = gmtTime.getSeconds();
var temp = "" + ((hour < 10) ? "0" : "") + hour;
temp += ((minute < 10) ? ":0" : ":") + minute;
temp += ((second < 10) ? ":0" : ":") + second;
document.getElementById("clockForm").innerHTML = temp;
setTimeout("gmtClock()",1000);
};



///////GMT clock ends there/////////

////////////////////Date Clock js ends here//////

/////////axial compressor img shake starting here
//might need use css to add a frame sound the image
 $(document).ready(function(){
          $("#axialcompressor_img").click(function(){
              $("#axialcompressor_img").effect("shake",
               {direction: "down", distance:15, time:5
                   
               }, 1000);});

});
////////axia compressor img shake ends here


///MFDs individualy (power on/off) fadeIn & fadeOut with jQuery. ONLOAD or refresh homepage will automatically turn MFD power on. need to use hide in order to get the fadein effect.//
//when MFD power off, added setTimeout in order to remove text content after the fadeOut. subpages may have different mfd layout//     
         $(document).ready(function(){
            $("#power_off_mfdL").click(function(){
                $("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA, #pclubmfdL1, #pclubmfdL2").fadeOut(2000);$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").setTimeout(function(){$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").text("");},500);});
                
               $("#power_on_mfdL").click(function(){
               $("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").hide();$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").fadeIn(2000);$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").css("color","white", "font-size","1.25em");});

            
            $("#power_off_mfdR").click(function(){
               $("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").fadeOut(2000);$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").setTimeout(function(){$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").text("");},500);});
                
             $("#power_on_mfdR").click(function(){
               $("#homeairbasemfdR1, #homeairbasemfdR2,#g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").hide();$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").fadeIn(2000);$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").css("color","white", "font-size","1.25em");});
        
        });
        
        
///////////MAIN POWER on/off starting here for all systems///////////////////////// 
//Main power ON when window onload (without click) , make Main power on btn neon, and eyebrow message blinking.
$(window).load(function(){
$("#mainpower_on_btn").addClass("mainpower_on_btnclass");//neon
$("#eyebrow_parap").hide();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2,  #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").hide();$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","white");$("#eyebrow_parap").css("font-size","1.25em");$("#eyebrow_parap").text("Main power on system scan in progress");

//next line has call back function to change text and color 
 $("#eyebrow_parap").fadeOut(1000, function(){$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","black");$("#eyebrow_parap").text("Flight System is now ready");
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeOut(2000);$("#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeIn(3000);
 $("#homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara,  #pclublower_centerpara, #pclublower_Rightpara").show();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").css("color","white", "font-size","1.25em");

 });   
 });



//Main power manually CLICK ON , make Main power on btn neon, and eyebrow message blinking.
$(document).ready(function(){
$("#mainpower_on_btn").click(function(){
$("#mainpower_on_btn").addClass("mainpower_on_btnclass");//neon
$("#eyebrow_parap").hide();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").hide();$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","white");$("#eyebrow_parap").css("font-size","1.25em");$("#eyebrow_parap").text("Main power on system scan in progress");

//next line has call back function to change text and color 
 $("#eyebrow_parap").fadeOut(1000, function(){$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","black");$("#eyebrow_parap").text("Flight System is now ready");
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeOut(2000);$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeIn(3000);
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").show();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").css("color","white", "font-size","1.25em");

 });   
 });
 });
        
  
 //Main power manually CLICK OFF make Mainpower on btn style normal (without neon). //then callback to stop eyebrow message's multiple fadeIn and fadeOuts,
 // then remove text for both eyebrows and mfds
 $(document).ready(function(){
 $("#mainpower_off_btn").click(function(){
    
    $("#mainpower_on_btn").removeClass("mainpower_on_btnclass");
    $("#eyebrow_parap").stop(function(){$("#eyebrow_parap").stop();});
    $("#eyebrow_parap").text("");
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").hide();

    });
    });

//////////////MAIN power on/off ends here////////////////////////////////////////////


//span jQuery ui animation test script starting here
        
        $(document).ready(function(){
            $("#spantest1_1").click(function(){
                $("#f20cockpitopen_1").toggle("blind", {direction:"up", distance:"5px", easing:"easeOutBounce"},2000);});
              });
              
        $(document).ready(function(){
             $("#spantest1_2").click(function(){
                $("#f20scramble_1").toggle("blind", {direction:"down", distance:"5px", easing:"easeOutBounce"},2000);});
              });
              
         $(document).ready(function(){
             $("#spantest1_3").click(function(){
                $("#f20frontview_1").toggle("blind", {direction:"up", distance:"5px", easing:"easeOutBounce"},2000);});
              });
   
      
          $(document).ready(function(){
            $("#spantest2_1").mouseenter(function(){
                $("#f16airtog1small_1").effect("shake", {direction:"down", distance:5, times:10} ,200);});
              });
              $(document).ready(function(){
            $("#spantest2_2").mouseenter(function(){
                $("#f16airtoa1small_1").effect("shake", {direction:"down", distance:5, times:10} ,200);});
              });
               $(document).ready(function(){
            $("#spantest2_3").mouseenter(function(){
                $("#f16airtog2small_2").effect("shake", {direction:"down", distance:5, times:10} ,200);});
              });
              $(document).ready(function(){
            $("#spantest2_4").mouseenter(function(){
                $("#f16airtoa2small_2").effect("shake", {direction:"down", distance:5, times:10} ,200);});
              });
              
         $(document).ready(function(){
            $("#spantest3_1").click(function(){
                $("#jetenginesmall_1").toggle("explode", {pieces:16},300);});
          });
       $(document).ready(function(){
            $("#spantest3_2").mouseenter(function(){
                $("#jetenginesmall_2").effect("shake", {direction:"right", distance:5, times:10} ,2000);});
            });
               
        $(document).ready(function(){
            $("#spantest3_3").mouseenter(function(){
                $("#jetengineaxialsmall_1").effect("shake", {direction:"down", distance:5, times:5} ,3000);});
             });
             
          $(document).ready(function(){
            $("#spantest3_4").click(function(){
                $("#g1, #g2, #g3, #g4, #g5, #g6").toggle("blind", {direction:"up", distance:"5px", easing:"easeOutBounce"},2500);});
             });
                 
        //span jQuery ui animation test script ends here




      
 ///////////toggle engine switches and sounds starting here
 function toggleEnginesound()
        {
            //var courtesy = document.getElementById("photocourtesy");//not using this syntax here
            //var image_of_f110 = document.getElementById("f110engine");//not showing this img for Powerplant site
            var turboimg = document.getElementById("turboreacteur_forsl");
            var image_of_togggle = document.getElementById("toggle");
            var mainpower_switch_sound = document.getElementById("mainpowerswitch_sound");
            var enginesound_startup_shutdown = document.getElementById("engine_sound");
            if (toggle.src.match("img/toggle_on.png"))
            {toggle.src="img/toggle_off.png";
            //image_of_f110.style.visibility="hidden"; disable this line for Powerplant site
            //courtesy.style.visibility="hidden";// disable this line for Powerplant site
            turboimg.style.opacity="0.2";
            mainpowerswitch_sound.src="toggle_off_mainpower.mp3";
           mainpower_switch_sound.play();
           engine_sound.src="f16_engineshotdown.mp3";
            engine_sound.play();
            }
            else
            {
                toggle.src="img/toggle_on.png";
                //image_of_f110.style.visibility="visible"; //not showing this img in this site
                //courtesy.style.visibility="visible";// disable this line in this site
               // image_of_f110.src="F110-burner_pic from Lockheed Martin.jpg";//not showing this img in this site
                
                mainpowerswitch_sound.src="toggle_on_mainpower.mp3";
                mainpower_switch_sound.play();
                engine_sound.src="f16_enginestartup.mp3";
                setTimeout(function(){turboimg.style.opacity="1";}, 3000);
               
            engine_sound.play();
            }
             
        }     
 ///////////toggle engine switches and sounds ends here     
      
      
      
        
        
//////////Gauges javaScript strarting here//       
            
            var g1, g2, g3, g4, g5, g6;
      
      window.onload = function(){
      var g1 = new JustGage({
        id: "g1", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 120,
        title: "Throttle Level",
        label: "", 
         levelColors: [
          "#1172bc",
          
        ],             
        //gaugeWidthScale: 0.2          
      });
      
      var g2 = new JustGage({
        id: "g2", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "Temp",
        label: "",    
        shadowOpacity: 1,
        shadowSize: 0,
        shadowVerticalOffset: 10        
      });
      
      var g3 = new JustGage({
        id: "g3", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "RPM x 1000",
        label: "",  
        levelColors: [
          "#0fa300",
          "#ffd300",
          "#ff0000"
        ]          
      });
      
      var g4 = new JustGage({
        id: "g4", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "Nozzle Position",
        showMinMax: true       
      });
     
      
      var g5 = new JustGage({
        id: "g5", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "Nozzle Temp",
        label: "",  
        startAnimationTime: 2000,
        startAnimationType: ">",
        refreshAnimationTime: 1000,
        refreshAnimationType: "bounce"                
      });
      
      var g6 = new JustGage({
        id: "g6", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 10000,
        title: "Fuel Flow PPH",//pound per hour
        label: "",  
        showMinMax: true,
        gaugeColor: "#fff",
        levelColors: [
        "#00e6e6", 
        "ed31ec", 
        "1d0370",
        
        ],
        showInnerShadow: true,        
        startAnimationTime: 1,
        startAnimationType: "linear",
        refreshAnimationTime: 1,
        refreshAnimationType: "linear"          
      });
      
        setInterval(function() {
          g1.refresh(getRandomInt(0, 100));
          g2.refresh(getRandomInt(0, 100));          
          g3.refresh(getRandomInt(0, 100));
          g4.refresh(getRandomInt(0, 100));
          g5.refresh(getRandomInt(0, 100));          
          g6.refresh(getRandomInt(593, 10000));
        }, 2500);
      };
           
//Gauges javaScript ends here


//slide show starting here 
  
$(window).load(function(){
        var pages = $('#lower_center_monitortd li'), current=0;
        var currentPage,nextPage;
        var timeoutID;
        var buttonClicked=0;

        var handler1=function(){
            buttonClicked=1;
            $('#hlower_center_monitortd .button').unbind('click');
            currentPage= pages.eq(current);
            if($(this).hasClass('prevButton'))
            {
                if (current <= 0)
                    current=pages.length-1;
                    else
                    current=current-1;
            }
            else
            {

                if (current >= pages.length-1)
                    current=0;
                else
                    current=current+1;
            }
            nextPage = pages.eq(current);   
            currentPage.fadeTo('slow',0.3,function(){
                nextPage.fadeIn('slow',function(){
                    nextPage.css("opacity",1);
                    currentPage.hide();
                    currentPage.css("opacity",1);
                    $('#lower_center_monitortd .button').bind('click',handler1);
                }); 
            });         
        }

        var handler2=function(){
            if (buttonClicked==0)
            {
            $('#lower_center_monitortd .button').unbind('click');
            currentPage= pages.eq(current);
            if (current >= pages.length-1)
                current=0;
            else
                current=current+1;
            nextPage = pages.eq(current);   
            currentPage.fadeTo('slow',0.3,function(){
                nextPage.fadeIn('slow',function(){
                    nextPage.css("opacity",1);
                    currentPage.hide();
                    currentPage.css("opacity",1);
                    $('#lower_center_monitortd .button').bind('click',handler1);             
                }); 
            });
            timeoutID=setTimeout(function(){
                handler2(); 
            }, 4000);
            }
        }

        $('#lower_center_monitortd .button').click(function(){
            clearTimeout(timeoutID);
            handler1();
        });

        timeoutID=setTimeout(function(){
            handler2(); 
            }, 4000);
        
});

 //slide show ends here   

