$(function(){
    $("#table").css("display","hidden");
    var random1,random2,random3,random4,random5,random6;
    

    

    var timer = setInterval(incCounter, 1000) ;
    
    let counter = localStorage.getItem("counter") ;
    counter = 3;
    $("#counter").text(counter) ;
    let high = localStorage.getItem("high") ;
    high = high === null ? 0 : high ;
    function incCounter() {
        var counter = parseInt($("#counter").text()) ;
        var counter = parseInt($("#counter").text()) ;
        counter--;
        if(counter===1){
           clearInterval(timer);
           $("counter").css("display","none");
           $("body").css("background","white");
           $("body").css("transition","2s");
           $("#barr").css("display","inherit");
           const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
}, 5)
$(".progress-bar").css("background-color","white");


           
           


        }
        
        localStorage.setItem("counter", counter)
        $("#counter").text(counter)
        
        
    }
    var highscore = localStorage.getItem("highscore") ;
    $("#highscore").text(highscore)
    $(function(){

        var timerr = setInterval(inccCounter, 1000) ;
   
    let counterr = localStorage.getItem("time") ;
    
    highscore = highscore === null ? 0 : highscore ;
    counterr = 12;
    $("#time").text(counterr) ;
    function inccCounter() {
        var counterr = parseInt($("#time").text()) ;
        
        counterr--;
        if(counterr===0){
           clearInterval(timerr);
           
           $("p").css("display","inherit");
           
           
           if("#scoree">"#highscore"){
              highscore==scoree;
              $('#highscore').text(Number($('#scoree').text()));
              var temp=parseInt($("#highscore").text());
              localStorage.setItem("score", temp);
              $("h2").css("display","inherit");
              $("h2").css("position","absolute");
              
              var confettiSettings = { target: 'my-canvas' };
              var confetti = new ConfettiGenerator(confettiSettings);
              confetti.render();
              
            }
            else if("#scoree"<"#highscore"){
                $("h1").css("display","inherit");
                $("h1").css("position","absolute");

            }
            
        }
       

        localStorage.setItem("time", counterr)
        $("#time").text(counterr)
        
    }
    
        random1 = Math.floor(Math.random()*15)+1;
        
        $("#"+random1).css("background-color","black");
        
        random2 = Math.floor(Math.random()*15)+1;
        if(random1!=random2){
           $("#"+random2).css("background-color","black");
        }
        else{
           random2 = Math.floor(Math.random()*15)+1; 
           $("#"+random2).css("background-color","black");
        }
        random3 = Math.floor(Math.random()*15)+1;
        if(random2!=random3 && random1!=random3){
          $("#"+random3).css("background-color","black");
        }
        else{
           random3 = Math.floor(Math.random()*15)+1; 
           $("#"+random3).css("background-color","black"); 
        }
        
        

        
        
        
        $('div.box').click(function(){
        var id = $(this).attr('id');
        

        if(id == random1){
            var flag = random1;
            
            $("#" + random1).css("transition", "1s");
            $("#" + random1).css("background", "white");

            while(flag != -1){
                random1 = Math.floor(Math.random() * 15)+1;

                if(random1!=random2&&random1!=random3&&random1!=flag){
                    flag = -1;
                    
                }
            }
            $("#" + random1).css("background", "black");
            $('#scoree').text(Number($('#scoree').text())+5);
            
        }else if(id ==  random2){
            var flag = random2;
            $("#" + random2).css("transition", "1s");
            $("#" + random2).css("background", "white");

            while(flag != -1){
                random2 = Math.floor(Math.random() * 15)+1;

                if(random2 != random1 && random2 != random3 && random2 != flag){
                    flag = -1;
                    
                }
            }
            $("#" + random2).css("background", "black");
            $('#scoree').text(Number($('#scoree').text())+5);
        }else if(id == random3){
            var flag = random3;
            $("#" + random3).css("transition", "1s");
            $("#" + random3).css("background", "white");

            while(flag != -1){
                random3 = Math.floor(Math.random() * 15)+1;

                if(random3 != random1 && random3 != random2 && random3 != flag){
                    flag = -1;
                    
                }
            }
            $("#" + random3).css("background", "black");
            $('#scoree').text(Number($('#scoree').text())+5);
        }
    });
        
        
        
    })
    
})