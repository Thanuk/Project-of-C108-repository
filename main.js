function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ABu-3JODQ/model.json" , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function gotResults(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results); 

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - "+ (results[0].confidence * 100) + " %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById("Background_Noise");

        if(results[0].label == "Meowing"){
            img.src = "Cat.jpg";
            cat = cat + 1;
            document.getElementById("number_of_cats").innerHTML = cat;
        }else if(results[0].label == "Barking"){
            img.src = "Dog.jpg";
            cat = cat + 1;
            document.getElementById("number_of_dogs").innerHTML = dog;
        }else if(results[0].label == "Roaring"){
            img.src = "Lion.jfif";
            lion = lion + 1;
            document.getElementById("number_of_lions").innerHTML = lion;
        }else if(results[0].label == "Mooing"){
            img.src = "Cow.jpg";
            cow = cow + 1;
            document.getElementById("number_of_cows").innerHTML = cow;
        }
        else{
            img.src = "Background Noise hearing.jfif";
        }
    }
}
