export default [
    {
        _id: "QU101",
        quiz: "Q101",
        title: "Sample true false question",
        points: 4,
        details: "This is the sample question itself",
        questiontype: "TRUEFALSE",
        tf_answer: true,
    },
    {
        _id: "QU102",
        quiz: "Q101",
        title: "Sample multiple choice question",
        points: 5,
        details: "This is the sample question itself",
        questiontype: "MULTIPLECHOICE",
        choices: [
            {
                choice_no: 1,
                choice_text: "choice 1"
            },
            {
                choice_no: 2,
                choice_text: "choice 2"
            },
            {
                choice_no: 3,
                choice_text: "choice 3"
            },
            {
                choice_no: 4,
                choice_text: "choice 4"
            },
        ],
        multiple_answer: 2,
    },
    {
        _id: "QU103",
        quiz: "Q101",
        title: "Sample fill in blanks question",
        points: 5,
        details: "This is the sample question itself",
        questiontype: "FILLINBLANKS",
        blanks: [
            {
                blank_no: 1,
                label: "Answer 1",
                answer: "One"
            },
            {
                blank_no: 2,
                label: "Answer 2",
                answer: "Two"
            },
            {
                blank_no: 3,
                label: "Answer 3",
                answer: "Three"
            },
        ],
    }
]