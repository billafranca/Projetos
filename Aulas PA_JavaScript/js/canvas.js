let campoIdade
function setup(){
    campoIdade = createInput("your age: ");
}

function draw(){
    background(0);

if (campoIdade.value()>=12){
    if(campoIdade.value()<=18){
    Text("filme para maiores de idade",width/2, height/2);
}
    else{
        Text("filme para menores de idade",width/2, height/2);
    }
}
}