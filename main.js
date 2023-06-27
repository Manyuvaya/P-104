Webcam.set({
  width:350,
  height:300,
  image_format:"png",
  png_quality:100
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'/>";

  })
}


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UmQJHfCXP/model.json",modelLoaded)

function modelLoaded(){

  console.log("ml5",ml5.version)
  console.log("modeLoaded")
}
function check(){
  img=document.getElementById("selfie")
  classifier.classify(img,got_result)
}
function got_result(error,result){
if(error){
  console.log(error)
}else{
  console.log(result)
    
  
  document.getElementById("result_object_name").innerHTML=result[0].label
  document.getElementById("result_object_accuracy").innerHTML=(result[0].confidence*100).toFixed(3)


}
}
