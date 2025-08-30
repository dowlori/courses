window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script4 = function()
{
  const welcome = object('66lJdG1ZLkE');
// Get the Storyline player
var player = GetPlayer();

// Function to create typewriter effect
function typeWriter() {
    if (i < textToType.length) {
        // Append one character at a time
        player.SetVar("InstructionText", textToType.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect
typeWriter();
}

window.Script5 = function()
{
  
function typewriterEffect(elementId, text, speed = 50) {
    const textBox1 = object('5mgCDwr98cK');
    if (!textBox1) return;
    
    element.innerHTML = '';
    let i = 0;
    
    function typeChar() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}
}

window.Script6 = function()
{
  const callTranscript = object('6jJ9a1YcUmV');

var storylinePlayer = GetPlayer();
var newIncomingText = storylinePlayer.GetVar("newText");
var newOutgoingText = "";
var myArray = newIncomingText.split("");
var arrayLength = myArray.length;

function typeText() {
  newOutgoingText = newOutgoingText + myArray[0];
  myArray.shift();
  storylinePlayer.SetVar("01CallTranscript",newOutgoingText);
  arrayLength = myArray.length;
  if (arrayLength == 0) {
     clearInterval(myInterval);
     }
  }

// A letter is typed every 100ms, adjust the typing speed by changing the 100 number below
var myInterval = setInterval(typeText, 50); 
}

window.Script7 = function()
{
  const 02CallTranscript = object('5Zd1rXwza1r');
// Get the Storyline player
var player = GetPlayer();

// Text to display with typewriter effect
var textToType = "";
var speed = 100; // Speed in milliseconds per character
var i = 0;

// Function to create typewriter effect
function typeWriter() {
    if (i < textToType.length) {
        // Append one character at a time
        player.SetVar("02CallTranscript", textToType.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect
typeWriter();
}

window.Script8 = function()
{
  const callTranscript = object('6YZEM0egray');
// Get the Storyline player
var player = GetPlayer();

// Text to display with typewriter effect
var textToType = "";
var speed = 100; // Speed in milliseconds per character
var i = 0;

// Function to create typewriter effect
function typeWriter() {
    if (i < textToType.length) {
        // Append one character at a time
        player.SetVar("03CallTranscript", textToType.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect
typeWriter();
}

window.Script9 = function()
{
  const 04CallTranscript = object('6V7Q5SpsWtS');
// Get the Storyline player
var player = GetPlayer();

// Text to display with typewriter effect
var textToType = "";
var speed = 100; // Speed in milliseconds per character
var i = 0;

// Function to create typewriter effect
function typeWriter() {
    if (i < textToType.length) {
        // Append one character at a time
        player.SetVar("04CallTranscript", textToType.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect
typeWriter();
}

window.Script10 = function()
{
  const callTranscript = object('6YZEM0egray');
// Get the Storyline player
var player = GetPlayer();

// Text to display with typewriter effect
var textToType = "";
var speed = 100; // Speed in milliseconds per character
var i = 0;

// Function to create typewriter effect
function typeWriter() {
    if (i < textToType.length) {
        // Append one character at a time
        player.SetVar("05CallTranscript", textToType.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect
typeWriter();
}

};
