function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qxK0IEF19/model.json",modelReady)
    
}

function modelReady() {
 classifier.classify(gotResult);  
}

function gotResults(error, result) {
if (error) {
    console.log(result);
} else {
    console.log(result);
    random_number_r = Math.floor(Math.random()*225)+1;
    random_number_g = Math.floor(Math.random()*225)+1;
    random_number_b = Math.floor(Math.random()*225)+1;

    document.getElementById("result_label").innerHTML = 'Can you hear me singing -'+ results[0].label;
    document.getElementById("result_confidence").innerHTML ='Accuracy -' + (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r + "," + random_number_g +"," + random_number_b + ")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r + "," + random_number_g +"," + random_number_b + ")";
  img = document.getElementById('alien1');
  img1 = document.getElementById('alien2');
  img2 = document.getElementById('alien3');
  img3 = document.getElementById('alien4');
  if (results[0].label == "Bones") {
   img.scr = 'alien-01.gif'
   img1.scr = 'alien-02.png'
   img2.scr = 'alien-03.png'
   img3.scr = 'alien-04.png' 
  } else if (results[0].label == "Sharks") {
    img.scr = 'alien-01.png'
    img1.scr = 'alien-02.gif'
    img2.scr = 'alien-03.png'
    img3.scr = 'alien-04.png' 
   } else if (results[0].label == "Natural") {
    img.scr = 'alien-01.png'
    img1.scr = 'alien-02.png'
    img2.scr = 'alien-03.gif'
    img3.scr = 'alien-04.png' 
   } else {
   img.scr = 'alien-01.png'
   img1.scr = 'alien-02.png'
   img2.scr = 'alien-03.png'
   img3.scr = 'alien-04.gif'
   }
}
}