$("<style type='text/css'>#boxMX{display:none;background: #1161ee;padding: 10px;border: 2px solid #ddd;float: left;font-size: 1.6em;position: fixed;top: 50%; left: 50%;z-index: 99999;box-shadow: 0px 0px 100px #808080; -moz-box-shadow: 0px 0px 20px #999; -webkit-box-shadow: 0px 0px 20px #999; border-radius:6px 6px 6px 6px; -moz-border-radius: 6px; -webkit-border-radius: 6px; font:20px Arial, Helvetica, sans-serif; padding:6px 6px 4px;width:350px; color: white;}</style>").appendTo("head");
function alertMX(t){
    $( "body" ).append( $( "<div id='boxMX'><p class='msgMX'></p><p>CLOSE</p></div>" ) );
    $('.msgMX').text(t); var popMargTop = ($('#boxMX').height() + 24) / 2, popMargLeft = ($('#boxMX').width() + 24) / 2; 
    $('#boxMX').css({ 'margin-top' : -popMargTop,'margin-left' : -popMargLeft}).fadeIn(600);
    $("#boxMX").click(function() { $(this).remove(); });  };

//let submitButton = document.getElementById('solution');


document.getElementById('solution').addEventListener('click', ()=>{
    var carModel = document.querySelector('.car-model').value
    var carType = document.querySelector('.car-type').value
    var symptom = document.querySelector('.symptoms').value
  
    var stringArray = carType.split(/(\s+)/);
    console.log(stringArray);
    var selectedModel = stringArray[0]

    console.log(selectedModel);
    if (carModel != '' && carType != '' && symptom !=''){
        if(selectedModel == carModel){
            if(carModel, carType, symptom == 'Unresponsive Brakes'){
                alertMX("Check hydraulic fluid, refill then if too low")         
            }
            if(carModel, carType, symptom == 'Hard Steering'){
                alertMX('Check steering fluid level, refil if necceassry, or check for fliud leaks')
            }
            if(carModel, carType, symptom == 'Dark Exhaust Fumes'){
                alertMX('Check oil seal rings and piston seal rings, change them if necessary')
            }
            if(carModel, carType, symptom == 'Car Overheating and Engine Knocks'){
                alertMX('Check raditor leaks or clogged cooling fins')
            }
            if(carModel, carType, symptom == 'Car Takes Longer To Start'){
                alertMX('Please checkm your starter and change it if neccessary')
            }
            if (carModel == 'SUBARU' && carType == 'Subaru STI' && symptom == 'Loss of Power in 4WD drive'){
                    alertMX('Check Turbo pump')
            }
        
        }else{
            alertMX("Selected Models doesn't match")
        }
    }else{
        alertMX('Fill in neccesary details')
    }
})