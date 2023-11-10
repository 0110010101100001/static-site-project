const quotes = [
    {"author": "Barbara Oakley", "quote": "Learning is not about memorizing facts, but about understanding concepts."},
    {"author": "Terrence Sejnowski", "quote": "The brain is remarkably adaptable; it can learn from experience and change throughout life."},
    {"author": "Rita Levi-Montalcini", "quote": "Learning is the only thing the mind never exhausts, never fears, and never regrets."},
    {"author": "Oliver Sacks", "quote": "We see with the eyes, but we see with the brain as well."},
    {"author": "Eric Kandel", "quote": "Learning is the process whereby synaptic strengths are altered in such a way as to make our thoughts more or less likely to occur."},
    {"author": "Barbara Arrowsmith-Young", "quote": "The brain, like a muscle, gets stronger with exercise."},
    {"author": "Daniel Levitin", "quote": "Learning changes the physical structure of the brain."},
    {"author": "John Medina", "quote": "The brain does much more than just recollect. It inter-compares, it synthesizes, it analyzes, it generates abstractions."},
    {"author": "Rosalind Picard", "quote": "We can change our brain circuitry in ways that support learning throughout life."},
    {"author": "Michael Merzenich", "quote": "Our brain is continuously changing its patterns and its responses to the patterns of events we go through."},
    {"author": "Barbara Oakley", "quote": "Learning involves the forming and pruning of synapses."},
    {"author": "Terrence Sejnowski", "quote": "The brain is a learning machine; it is a mistake to think that it stops learning after childhood."},
    {"author": "Vilayanur S. Ramachandran", "quote": "The brain is the organ of destiny. It holds within its humming mechanism secrets that will determine the future of the human race."},
    {"author": "Elizabeth Loftus", "quote": "Memory works a little bit more like a Wikipedia page: you can go in there and change it, but so can other people."},
    {"author": "John Ratey", "quote": "Learning is how we keep our minds alive, just as physical activity is how we keep our bodies alive."},
    {"author": "Marion Diamond", "quote": "Every animal is endowed with certain skills and predispositions, but the brain is a highly adaptable organ."},
    {"author": "Patricia Churchland", "quote": "Learning how to learn is life's most important skill."},
    {"author": "Andrew Weil", "quote": "The function of education is to help you from childhood, not to imitate anybody, but to be yourself all the time."},
    {"author": "Sandra Aamodt", "quote": "Learning changes the physical structure of the brain and makes new neural pathways."},
    {"author": "Barbara Oakley", "quote": "It is not that you are not smart enough, it's that you haven't learned how to learn yet."},
    {"author": "Terrence Sejnowski", "quote": "Our brains are the most complex structures in the known universe, and learning is the mechanism by which they adapt."},
    {"author": "Rita Carter", "quote": "The brain is a vast, largely unexplored world."},
    {"author": "John Ratey", "quote": "Learning is the process whereby you get to know things and apply them."},
    {"author": "Oliver Sacks", "quote": "It is the brain, the little gray cells on which one must rely. One must seek the truth within--not without."},
    {"author": "Eric Kandel", "quote": "Learning involves the modification of synaptic strengths."},
    {"author": "Michael Merzenich", "quote": "The brain is plastic and continues to change and evolve throughout our lives."},
    {"author": "Rosalind Picard", "quote": "Our brain's learning capacity is incredibly powerful."},
    {"author": "Vilayanur S. Ramachandran", "quote": "The essence of learning is figuring out what works and then adjusting our future actions accordingly."},
    {"author": "Elizabeth Loftus", "quote": "Learning is not about acquiring knowledge; it is about acquiring the ability to think."},
    {"author": "John Ratey", "quote": "The brain's incredible ability to reshape itself holds true when it comes to learning and memory."},
    {"author": "Marion Diamond", "quote": "The human brain has 100 billion neurons, each neuron connected to 10 thousand other neurons. Sitting on your shoulders"},
    {"author": "David Goggins", "quote": "The only easy day was yesterday."},
    {"author": "Jillian Michaels", "quote": "Your body can stand almost anything. It's your mind that you have to convince."},
    {"author": "Arnold Schwarzenegger", "quote": "Strength does not come from winning. Your struggles develop your strengths."},
    {"author": "Dwayne 'The Rock' Johnson", "quote": "Blood, sweat, and respect. The first two you give, the last one you earn."},
    {"author": "Mia Hamm", "quote": "Celebrate what you've accomplished, but raise the bar a little higher each time you succeed."},
    {"author": "Chris Powell", "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."},
    {"author": "Serena Williams", "quote": "You have to believe in yourself when no one else does. That makes you a winner right there."},
    {"author": "Laird Hamilton", "quote": "Make sure your worst enemy doesn't live between your own two ears."},
    {"author": "Rich Froning Jr.", "quote": "Don't be afraid of failure. This is the way to succeed."},
    {"author": "Manny Pacquiao", "quote": "It's not about how much you have, but what you do with what you have."},
    {"author": "Dan Gable", "quote": "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts."},
    {"author": "Camille Leblanc-Bazinet", "quote": "Train because you love your body, not because you hate it."},
    {"author": "Lou Holtz", "quote": "Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it."},
    {"author": "Shawn Johnson", "quote": "The only limits that exist are the ones in your own mind."},
    {"author": "Michael Phelps", "quote": "You can't put a limit on anything. The more you dream, the farther you get."},
    {"author": "Herschel Walker", "quote": "My ability to conquer my challenges is limitless; my potential to succeed is infinite."},
    {"author": "Gabby Douglas", "quote": "Hard days are the best because that's when champions are made."},
    {"author": "Chris Heria", "quote": "Every morning you have two choices: continue to sleep with your dreams or wake up and chase them."},
    {"author": "Alvin Toffler", "quote": "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."},
    {"author": "Carl Sagan", "quote": "Somewhere, something incredible is waiting to be known."},
    {"author": "Aristotle", "quote": "Education is the best provision for old age."},
    {"author": "Albert Einstein", "quote": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."},
    {"author": "Nelson Mandela", "quote": "Education is the most powerful weapon which you can use to change the world."},
    {"author": "Maya Angelou", "quote": "Do the best you can until you know better. Then, when you know better, do better."},
    {"author": "Malcolm X", "quote": "Education is our passport to the future, for tomorrow belongs to the people who prepare for it today."},
    {"author": "Mahatma Gandhi", "quote": "Live as if you were to die tomorrow. Learn as if you will live forever."},
    {"author": "Benjamin Franklin", "quote": "Tell me and I forget, teach me and I may remember, involve me and I learn."},
    {"author": "Plato", "quote": "Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds."},
    {"author": "Confucius", "quote": "Real knowledge is to know the extent of one's ignorance."},
    {"author": "Margaret Mead", "quote": "Children must be taught how to think, not what to think."},
    {"author": "B. F. Skinner", "quote": "Education is what survives when what has been learned has been forgotten."},
    {"author": "Lao Tzu", "quote": "The journey of a thousand miles begins with one step."},
    {"author": "Stephen Hawking", "quote": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."},
    {"author": "Marie Curie", "quote": "You cannot hope to build a better world without improving the individuals. To that end, each of us must work for our own improvement."},
    {"author": "Richard Feynman", "quote": "Study hard what interests you the most in the most undisciplined, irreverent, and original manner possible."},
    {"author": "Socrates", "quote": "I know that I am intelligent because I know that I know nothing."},
    {"author": "John Dewey", "quote": "Education is not preparation for life; education is life itself."},
    {"author": "George Washington Carver", "quote": "Education is the key to unlock the golden door of freedom."},
    {"author": "Michael Pollan", "quote": "Eat food. Not too much. Mostly plants."},
    {"author": "Hippocrates", "quote": "Let food be thy medicine and medicine be thy food."},
    {"author": "Alice Waters", "quote": "Eating is an agricultural act."},
    {"author": "Ann Wigmore", "quote": "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison."},
    {"author": "Joel Salatin", "quote": "Don't eat anything your great-grandmother wouldn't recognize as food."},
    {"author": "Ina May Gaskin", "quote": "You can't eat beauty; it doesn't sustain you. What is fundamentally beautiful is compassion for yourself and for those around you."},
    {"author": "Wendell Berry", "quote": "People are fed by the food industry, which pays no attention to health, and are treated by the health industry, which pays no attention to food."},
    {"author": "Julia Child", "quote": "The best way to execute French cooking is to get good and loaded and whack the hell out of a chicken. Bon appétit."},
    {"author": "Jamie Oliver", "quote": "If you want people to eat better, don't give them a lecture, give them a recipe."},
    {"author": "Ella Woodward", "quote": "Be kind to yourself and your body. It's the only place you have to live."},
    {"author": "Jack LaLanne", "quote": "Exercise is king, nutrition is queen. Put them together and you have a kingdom."},
    {"author": "Michael Pollan", "quote": "Don't eat anything your great-grandmother wouldn't recognize as food."},
    {"author": "Sally Fallon Morell", "quote": "The wise man lets his own appetite for healthful foods be his guide."},
    {"author": "Mark Hyman", "quote": "Food is not just fuel. Food is information. It talks to your DNA and tells it what to do. The most powerful tool to change your health, environment, and entire world is your fork."},
    {"author": "T. Colin Campbell", "quote": "The foods you eat can heal you faster and more profoundly than the most expensive prescription drugs, and more dramatically than the most extreme surgical interventions, with only positive side effects."},
    {"author": "Joel Fuhrman", "quote": "The more you eat fruits and vegetables, the more you reduce your risk of all chronic diseases, including cancer."},
    {"author": "Andrew Weil", "quote": "A balanced diet and physical activity are vital to academic performance. A healthy diet has a direct link to increased cognitive function and memory skills, decreased absenteeism from school, and improved mood."},
    {"author": "Toni Morrison", "quote": "You wanna fly, you got to give up the shit that weighs you down."},
    {"author": "David Wolfe", "quote": "To insure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life."},
    {"author": "Eleanor Roosevelt", "quote": "It is not fair to ask of others what you are not willing to do yourself."}    
]

// return a random quote with author from a list of quotes
const getQuote = (q = quotes) => {
    // Generate a random number between 0 and quotes.length - 1
    let random = Math.floor(Math.random() * q.length);
    return q[random];
}

// refresh quote box quote and manipulate progress bar
const refreshQuote = () => {
    // grab all associated divs
    let bar = document.getElementById("progressBar");
    let progress = document.getElementById("progress");
    let percentage = 0;
    let quoteMain = document.getElementById("quote");

    // get new quote
    let quote = getQuote();
    let q = quote["quote"] + " ~ " + quote["author"];

    // loop through 1/2 second
    for(let i = 0; i < 10; i++) {
        setTimeout(function () {
            percentage += 10;
            bar.style.width = percentage + "%";
            progress.setAttribute("aria-valuenow", percentage);
            console.log(bar.width);
        }, 50)
    }

    // match progress bar delay
    setTimeout(function() {
        quoteMain.innerHTML = q;
        bar.style.width = 0 + "%";
        progress.setAttribute("aria-valuenow", percentage);
    }, 500)
}

// add a quote to div
document.addEventListener("DOMContentLoaded", setTimeout(function() {
    // get temporary div
    let loadingTemp = document.getElementById("loadingTemp");
    // assimilate div
    let quoteMain = document.createElement("p");
    quoteMain.setAttribute("id", "quote");
    quoteMain.setAttribute("class", "fs-1")
    let quote = getQuote();
    let q = quote["quote"] + " ~ " + quote["author"];
    quoteMain.innerHTML = q;
    // replace divs
    loadingTemp.replaceWith(quoteMain);
}, 500));