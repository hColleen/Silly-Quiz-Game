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
    question: 'Badger?',
    answer1: 'Badger Badger Mushroom Mushroom',
    answer2: '...',
    answer3: 'Weasels?'
    },{
    question: 'What was your first meme?',
    answer1: 'Hamster Dance',
    answer2: 'LOLCats',
    answer3: 'Harlem Shake'
    },{
    question: 'What is the internet?',
    answer1: 'A Series of Tubes',
    answer2: 'A Raging Pit of Fire',
    answer3: 'An Information Sharing Platform'
    },{
    question: 'Your favorite site?',
    answer1: 'YouTube',
    answer2: 'FaceBook',
    answer3: "I'm Just Going to Say Something Smart Like Wikipedia"
    },{
    question: 'Your favorite number?',
    answer1: '7',
    answer2: '13',
    answer3: 'OVER 9000'
    },{
    question: 'How much time do you spend on the computer per day?',
    answer1: '8 hours',
    answer2: '36 hours',
    answer3: "I'm Going to Lie, So.... 2 hours"
    },{
    question: 'What kind of food would you bring to a potluck?',
    answer1: 'Cake',
    answer2: 'Cassarole',
    answer3: "Potato Chips (They're a Veggie, Right?)"
    },{
    question: 'What kind of games do you like to play?',
    answer1: 'Computer-based',
    answer2: 'Table Top based',
    answer3: 'Psychological'
    },{
    question: 'What time of day do you like best?',
    answer1: 'The Liminal Times',
    answer2: 'Noon',
    answer3: 'Night'
    },{
    question: 'Complete the following: The sun is...',
    answer1: 'A Great Big Ball of Incandescent Gas',
    answer2: 'Trying to Kill Me',
    answer3: 'A Thing, I Suppose. I Haven\'t Seen It'
    },{
    question: 'Complete the following: I work because...',
    answer1: 'Bills, Bills, Bills',
    answer2: 'Sometimes It\'s Fun',
    answer3: 'Work...What\'s That?'
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