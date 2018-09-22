//question/answer array
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
    question: 'Complete the following: Girls...',
    answer1: 'Girls, Girls',
    answer2: 'Just Wanna Have Fun',
    answer3: 'In Uniform'
    },{
    question: 'What is the best time to party?',
    answer1: '1999',
    answer2: 'All Night and All of the Day',
    answer3: 'Good Times'
    },{
    question: 'Which is the best TV show?',
    answer1: 'M*A*S*H',
    answer2: 'Night Court',
    answer3: 'Star Trek'
    },{
    question: 'How many red balloons do you need?',
    answer1: '1',
    answer2: '0, They Fly Away More Than Other Color Balloons',
    answer3: '99'
    },{
    question: 'Which is the best cookie?',
    answer1: 'Sugar',
    answer2: 'Chocolate Chip',
    answer3: 'White Chocolate Macadamia'
    },{
    question: 'Define \'insanity\'',
    answer1: 'Doing the Same Think Over and Over and Expecting Different Results',
    answer2: 'Politics',
    answer3: 'Don\'t Be So Rude!'
    },{
    question: '"\uD83D\uDC4D"',
    answer1: 'You Got It, Dude',
    answer2: 'Heeeeey',
    answer3: 'Who\'s Got Two Thumbs? This Dude!'
    },{
    question: 'Pluto',
    answer1: 'Mickey\'s Dog',
    answer2: 'A planetoid on the inner edge of the Kuiper Belt',
    answer3: 'You Hear About Pluto? That\'s Messed Up, Right?'
    },{
    question: 'You told me to do it.',
    answer1: 'I Did?',
    answer2: 'I Did',
    answer3: 'What, You Listened to Me?'
}];

/*fortune/answer array
from https://www.funny-jokes-quotes-sayings.com/funny-fortune-cookie-sayings.html and 
https://www.brainyquote.com/topics/funny */

let fortunes = [
    "Some days you are pigeon, some days you are statue. Today, bring umbrella.",
    "Two days from now, tomorrow will be yesterday.",
    "You are cleverly disguised as responsible adult.",
    "Life is sexually transmitted condition.",
    "Be nice to friends. You might need them to empty your bedpan.",
    "Fortune not found? Abort, Retry, Ignore.",
    "If this is coffee, please bring me some tea; but if this is tea, please bring me some coffee.",
    "Your fake plants died because you did not pretend to water them.",
    "Everything is funny, as long as it's happening to somebody else.",
    "Electricity is really just organized lightning.",
    "We are all born mad. Some remain so.",
    "Common sense is the collection of prejudices acquired by age eighteen.",
    "The most exciting phrase to hear in science, the one that hearlds new discoveries, is not 'Eureka!' but 'That's funny...'",
    "If two wrongs don't make a right, try three.",
    "Be obscure clearly.",
    "Let's have some new cliches.",
    "Conversations would be vastly improved by the constant use of four simple words: I do not know.",
    "Housework can't kill you, but why take a chance?",
    "Spend a year dead for tax reasons.",
    "Everything you like is either illegal, immoral, or fattening.",
    "Only the mediocre are always at their best."
    ];

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

//define variables

let quizArray = [], quest, quizHTML = [], quizLength = 5, displayedQuestion = [];
let holder = document.getElementById('quizQuestion');
let fortune = document.getElementById('quizAnswer');
let question = document.getElementsByClassName('question');
let nextButton = document.getElementById('nextButton');
let startButton = document.getElementById('startButton');

//create question/answer array

function createQuizArray() {
    for (let i = 0; i < quizLength; i++){
        quest = questionsAnswers[getRandomQuestion[i]];
        quizArray.push(quest);
    }
}

createQuizArray();

//create HTML to display questions

for (let i = 0; i < quizArray.length; i ++) {
    quest = quizArray[i];
    let questInfo = `<div class ='question hidden'><h3>${quest.question}</h3>
    <input type = 'radio' name = 'answer' value = '${quest.answer1}'> ${quest.answer1}<br>
    <input type = 'radio' name = 'answer' value = '${quest.answer2}'> ${quest.answer2}<br>
    <input type = 'radio' name = 'answer' value = '${quest.answer3}'> ${quest.answer3}<br>
    </div>`
    quizHTML.push(questInfo);
}

holder.innerHTML = quizHTML.join(" ");

//display questions one at a time
//start button working
nextButton.classList.add('hidden');

startButton.addEventListener('click', function(e){
    question[0].classList.remove('hidden');
    startButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
    displayedQuestion.push(question[0]);
})

//make button advance to next question
for (let i = 0; i < question.length; i ++){
    nextButton.addEventListener('click', function(){
        question[i + 1].classList.remove('hidden')
        displayedQuestion.push(question[i + 1]);
            if (displayedQuestion.length == 2) {
                displayedQuestion[0].classList.add('hidden');
                displayedQuestion[1].classList.remove('hidden');
                displayedQuestion.splice(0,1);
            }
    })
}

//select random fortune

//display fortune