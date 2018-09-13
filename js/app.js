document.getElementById('question').innerHTML = "Hello, Seeker";
document.getElementById('answer').innerHTML = "What do you want to know?";

let questionsAnswers = [{
    question: 'What color are you most likely to wear?',
    answer1: 'Black',
    answer2: 'Blue',
    answer3: 'Bright Orange'
    },{
    question: 'Where are you most likely to hide trash?',
    answer1: 'Garbage Bag',
    answer2: 'Under the Bed',
    answer3: 'In a Drawer'
    },{
    question: 'What is the best source of inspiration?',
    answer1: 'Singing in the Shower',
    answer2: 'Singing in Public',
    answer3: 'Singing in Your Sleep'
    },{
    question: 'How often do you have ear worms?',
    answer1: 'Never',
    answer2: 'Always',
    answer3: "It's a world of Laughter, a world of tears..."
    },{
    question: 'Bananaphone?',
    answer1: 'Ring ring ring ring ring ring ring banana phone',
    answer2: 'Whippersnapper!',
    answer3: 'What?'
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