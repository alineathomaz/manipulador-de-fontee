
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);
  

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x; //código para buscar a coordenada x do pulso esquerdo, na matriz results vinda do modelo posenet, armazenando-a na variável correspondente
        rightWristX = results[0].pose.rightWrist.x; //código para buscar a coordenada x do pulso direito, na matriz results vinda do modelo posenet, armazenando-a na variável correspondente
        difference = floor(leftWristX - rightWristX); // código para encontrar a diferença, subtraindo a coordenada x do pulso esquerdo e direito, removendo os decimais dessa diferença calculada usando a função floor() e armazenando na variável correspondente, ou seja, difference
    }
}
function draw(){
    background('#969A97');
    textSize(difference); //textSize() deve conter um número para o tamanho da letra, nesse caso, foi solicitado atualizar com a variável que contém a diferença calculada, ou seja, difference
    fill('#FFE787'); //deve definir uma cor dentro da função fill() passando uma string de nome de cor, código HEX ou RGB
    text('Sofia', 100, 200); //a string deve ser apresentada entre aspas dentro dos parâmetros de text()
  }


