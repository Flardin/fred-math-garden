
var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    const prediction = predictImage();
    console.log('prediction' + prediction);
    console.log('answer' + answer);
    if(prediction == answer){
        score++; 
        if(score<=6){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Well done! your gardent is in full bloom! Want to start again ?')
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }
    } else {
        if(score!=0){
            alert('oops! check your calculations !')
            score--;
            backgroundImages.pop();
            setTimeout(function(){ document.body.style.backgroundImage = backgroundImages}, 2000);
            };
    }
    console.log('score' + score);
}