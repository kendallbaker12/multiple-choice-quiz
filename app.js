/*

// Example quiz object might look like:

var QUIZ = [
    {
        title: "Question 1",
        questionText: "What is the 3rd letter in the alphabet?",
        answers: [
            {text: "a", correct: false},
            {text: "b", correct: false},
            {text: "c", correct: true},
            {text: "d", correct: false}
        ],
        userAnswer: ""
    },
    {
        title: "Question 2",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""
    }
]

*/


Vue.component("title-page", {
    template: `
    <div>
        <p> Welcome to the best quiz ever</p><br>
        <button v-on:click= toquiz()>Click Me!</button>
    </div>
    `,
    data: function () {
        return {
        }
    },
    props: {
        "page": String,
        "toquiz": Function,
    },
    methods: {

    }
})

Vue.component("question", {
    template: `
       <div>
        <h2>{{question}}</h2> <br>
            <input type="radio" name ="favoriteTeacher" id="answer1" v-model='answer1'>
            <label for="answer1">{{answer1}}</label> <br>
            <input type="radio" id="answer2" name ="favoriteTeacher" v-model='answer2'>
            <label for="answer2">{{answer2}}</label> <br>
            <input type="radio" id="answer3" name ="favoriteTeacher" v-model='answer'>
            <label for="answer3">{{answer3}}</label> <br>
            <button v-on:click="pushanswer()">Submit Questions.</button>
        </div>
    `,
    data: function () {
        return {
        }
    },
    methods: {

    },
    props: {
        "question": String,
        "answer1": String,
        "answer2": String,
        "answer3": String,
        "pushanswer": Function,
        "answer": String,
    }
})

var app = new Vue({
    el: "#app",
    data: {
        // to attach your global quiz variable to a data variable:
        // myQuiz: QUIZ,
        page: "title",
        playerScore: 0,
        answer: "",
    },
    methods: {
        toquiz: function () {
            this.page = 'quiz';
        },
        pushanswer: function () {
            if (this.answer == "derek") {
                this.playerScore--;
                console.log("wrong choice!")
            } else {
                this.playerScore++;
                console.log("good answer!")
            }
        },
        // used for showing questions individually
        nextQuestion: function () { },

        // used for showing questions individually
        previousQuestion: function () { },

        setPage: function (page) { },

        calculateScore: function () { }
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        areAllQuestionsAnswered: function () { }
    }
});
