const problemSets = [
    {
        setName: "Numerical Reasoning",
        questions: [
            {
                question: "What comes next in the series: 2, 6, 12, 20, ...?",
                options: ["30", "28", "32", "36"],
                answer: 0 // Corresponds to "30"
            },
            {
                question: "If a car travels 150 miles at an average speed of 50 mph, how long does the journey take?",
                options: ["2 hours", "3 hours", "4 hours", "5 hours"],
                answer: 1 // Corresponds to 3 hours
            },
            {
                question: "How many 2-inch cubes can fit in a box that is 8 inches long, 8 inches wide, and 2 inches high?",
                options: ["8", "16", "32", "64"],
                answer: 1 // Corresponds to "16"
            },
            {
                question: "Which number does not belong: 2, 3, 6, 7, 8, 14, 15, 30?",
                options: ["3", "7", "8", "30"],
                answer: 2 // Corresponds to "8"
            },
            {
                question: "If 10 machines can make 10 widgets in 10 minutes, how many machines are needed to make 100 widgets in 5 minutes?",
                options: ["20", "40", "100", "200"],
                answer: 1 // Corresponds to "40"
            },
            {
                question: "A student scores 80, 85, and 90 in three math tests. What score must they achieve on the fourth test to have an average of 85?",
                options: ["80", "85", "90", "95"],
                answer: 1 // Corresponds to a score of 85 on the fourth test
            },
            {
                question: "What number is to 12 as 6 is to 3?",
                options: ["4", "24", "6", "36"],
                answer: 1 // Corresponds to "24"
            },
            {
                question: "In a class of 60 students, the ratio of boys to girls is 3:2. How many boys are in the class?",
                options: ["24", "30", "36", "40"],
                answer: 2 // Corresponds to 36 boys
            },
            {
                question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ...?",
                options: ["36", "35", "34", "33"],
                answer: 0 // Corresponds to "36"
            },
            {
                question: "Five years ago, Alice was three times as old as her cat. Today, she is twice as old. If the cat is now 10 years old, how old is Alice?",
                options: ["20 years", "22 years", "24 years", "25 years"],
                answer: 3 // Corresponds to 25 years old
            }
        ]
    },
    {
        setName: "Verbal Comprehension",
        questions: [
            {
                question: "What does 'ephemeral' mean?",
                options: ["Eternal", "Short-lived", "Transparent", "Complicated"],
                answer: 1 // Corresponds to "Short-lived"
            },
            {
                question: "As 'novel' is to 'book', 'film' is to:",
                options: ["Actor", "Director", "Cinema", "Movie"],
                answer: 3 // Corresponds to "Movie"
            },
            {
                question: "A person known for 'burning the candle at both ends' is likely:",
                options: ["Thrifty", "Tall", "Hardworking", "Careless"],
                answer: 2 // Corresponds to "Hardworking"
            },
            {
                question: "'All roses are flowers. Some flowers fade quickly. Therefore, ...'",
                options: ["Some roses are not flowers", "All roses fade quickly", "No roses fade quickly", "Some roses may fade quickly"],
                answer: 3 // Corresponds to "Some roses may fade quickly"
            },
            {
                question: "Which word is closest in meaning to 'ardent'?",
                options: ["Cold", "Passionate", "Indifferent", "Shy"],
                answer: 1 // Corresponds to "Passionate"
            },
            {
                question: "What is the opposite of 'benevolent'?",
                options: ["Kind", "Malevolent", "Generous", "Indifferent"],
                answer: 1 // Corresponds to "Malevolent"
            },
            {
                question: "In the phrase 'the elephant in the room', the 'elephant' refers to:",
                options: ["A large animal", "An obvious problem that's being ignored", "A decoration", "A surprise guest"],
                answer: 1 // Corresponds to "An obvious problem that's being ignored"
            },
            {
                question: "In the sentence 'His theories obfuscate the true meaning', what does 'obfuscate' mean?",
                options: ["Clarify", "Complicate", "Highlight", "Undermine"],
                answer: 1 // Corresponds to "Complicate"
            },
            {
                question: "If 'reclusive' most nearly means 'withdrawn', then 'gregarious' most nearly means:",
                options: ["Sociable", "Arrogant", "Miserable", "Curious"],
                answer: 0 // Corresponds to "Sociable"
            },
            {
                question: "What does the word 'cogent' most closely mean?",
                options: ["Confusing", "Weak", "Compelling", "Irrelevant"],
                answer: 2 // Corresponds to "Compelling"
            }
        ]
    },
    {
        setName: "Critical Thinking",
        questions: [
            {
                question: "Mary is 16 years old. She is 4 times older than her brother. How old will Mary be when she is twice his age?",
                options: ["That's impossible", "20", "24", "28"],
                answer: 2 // Corresponds to "24"
            },
            {
                question: "Which fraction is the biggest?",
                options: ["3/5", "5/8", "1/2", "4/7"],
                answer: 1 // Corresponds to "5/8"
            },
            {
                question: "A store reduces the price of one product by 20 percent. How many percent do you need to raise to the percentage to get the original price?",
                options: ["25", "27", "30", "35"],
                answer: 0 // Corresponds to "25"
            },
            {
                question: "There are 5 machines that make 5 parts in 5 minutes. How long does it take to make 100 parts on 100 machines?",
                options: ["5", "10", "15", "30"],
                answer: 0 // Corresponds to "5"
            },
            {
                question: "There is a lake on the surface of which water lilies float. The number of lilies doubles daily. If it takes 48 days to completely occupy the entire area of the lake, on which day did it occupy half the lake?",
                options: ["47", "46", "96", "108"],
                answer: 0 // Corresponds to "47"
            },
            {
                question: "A car travels at a speed of 40 mph over a certain distance and then returns over the same distance at a speed of 60 mph. What is the average speed for the total journey?",
                options: ["30 mph", "40 mph", "60 mph", "48 mph"],
                answer: 3 // Corresponds to "48 mph"
            },
            {
                question: "SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY. Which day is three days before the day immediately following the day two days before the day three days after the day immediately before Friday?",
                options: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
                answer: 1 // Corresponds to "Wednesday"
            },
            {
                question: "A cube is painted red and then cut into 27 smaller equal cubes. How many of these have paint on exactly two sides?",
                options: ["8", "12", "16", "24"],
                answer: 1 // Corresponds to "12"
            },
            {
                question: "Only one set of letters below can be arranged into a five-letter word. Can you find the word?",
                options: ["KIRCE", "ONTDI", "EMRUD", "ENCID"],
                answer: 2 // Corresponds to "EMRUD", which can be arranged to form the word "MURED"
            },
            {
                question: "A gardener plants three rows of four trees each. Each row has an apple tree, a cherry tree, a pear tree, and a plum tree. If no row can have the same tree type in the same position as another row, in how many different ways can the gardener plant the trees?",
                options: ["12", "24", "36", "48"],
                answer: 1 // Corresponds to "24" (4! permutations for each type of tree)
            }
        ]
    }
];



module.exports = problemSets;