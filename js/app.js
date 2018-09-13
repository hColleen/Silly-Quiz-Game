document.getElementById('question').innerHTML = "Hello, Seeker";
document.getElementById('answer').innerHTML = "What do you want to know?";

let questionsAnswers = [{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
    },{
    question: '',
    answer1: '',
    answer2: '',
    answer3: ''
}];

//select random questions/answers from array, preventing repeats (tutorial from here: https://inteist.com/javascript-generate-pseudo-random-set/ )

function numArr(limit){
	list = [];
	for (let i = 0; i < limit; i ++){
		list.push(i);
	}
	return list;
}

function shuffle(array){
	let i = array.length,
		j = 0,
		temp;
	while (i --){
		j = Math.floor(Math.random() * (i + 1))
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

let getRandomQuestion = shuffle(numArr(questionsAnswers.length));

let quizArray = [], quizLength = 5;

function createQuzArray() {
    for (let i = 0; i < quizLength; i++){
        let quest = questionsAnswers[getRandomQuestion[i]];
        quizArray.push(quest);
    }
}