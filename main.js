Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snap() {
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML='<img id="pic" src="'+data+'"/>';
    });
} 
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="the first prediction is"+prediction_1;
    speak_data2="the second prediction is"+prediction_2;
    utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(utterthis);
}