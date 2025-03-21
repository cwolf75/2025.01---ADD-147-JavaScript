const prompts = new Map([
    ["fiction", [
        "You find a birth certificate for your secret twin, who was given up at birth.",
        "You wake up one day and find that you're suddenly seventeen again.",
        "You were given $1000 and had to spend it in just thirty minutes.",
        "You are able to time travel forward to the time of your death.",
        "You wake up one day and find that you're suddenly seventeen again.",
        "You have one magical power; what is it?",
        "You are able to have a conversation with one person from history; who is it?",
        "You find out that you're the secret heir to a great fortune",
        "What would need to happen to make this the best year of your life?",
        "You get to design your dream home; what does it look like?",
        "If you could go back in time, what one thing would you do differently?",
        "A long-lost relative suddenly appears on your doorstep."
    ]],
    ["nonfiction", [
        "Write the history of yourself as a writer.",
        "Describe your favorite childhood vacation.",
        "Describe yourself to a blind person.",
        "Something silly you believed to be true as a child.",
        "Tell the story of your time in high school.",
        "A skill that you'd like to develop.",
        "Describe your most embarrassing moment.",
        "Write an obituary for an old flame -- the one who got away.",
        "Write a letter of apology to someone.",
        "Write a letter in which you tell someone off who has wronged you."
    ]],
    ["poetry", [
        "Write a haiku about the sounds of the forest.",
        "Describe a childhood memory using free verse.",
        "Write a three-word poem:  Sum-up your day in one word, your week in one word, and your month in one word.",
        "Write a Shakespearean/Elizabethan sonnet about spring.",
        "Write a Petarchan/Italian sonnet about Venice.",
        "Write a limerick in which you tell a joke.",
        "Write a poem using only rhyming couplets.",
        "Write an ode to your favorite possession.",
        "Write a poem using a persona, and describe a murder.",
        "Write a poem in which each word begins with a different letter of the alphabet.",
        "Write a poem using iambic pentameter.",
        "Write a poem using alliteration, assonance, and consonance.",
        "Write a poem that uses enjambment."
    ]]
]);

function generatePrompt() {
    const category = document.getElementById("category").value;
    const categoryPrompts = prompts.get(category);  
    const randomIndex = Math.floor(Math.random() * categoryPrompts.length);
    const promptText = categoryPrompts[randomIndex];

    document.getElementById("prompt").innerHTML = "<h3><u>Here's your prompt:  </u></h3>" + promptText;
}

document.getElementById("generate").addEventListener("click", generatePrompt);
