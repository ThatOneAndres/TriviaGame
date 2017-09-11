# TriviaGame
Trivia Game is a trvia game based on the popular HBO series *Game Of Thrones*.
* There are a total of 10 question and they are given in a random order.
* You have 20 seconds to answer each question or it will be marked as incorrect.
* Upon timeout or answering a question you will get your result and answer (if incorrect). There will also be an image pertaining to the answer
* Once you complete all 10 question, your result will display with the option to play again.
* To **mute** audio press icon found in bottom left corner.

## Functionality
**Javascript and JQuery** was used to buld the trivia application. I created a **class** TriviaGame which can be used to create other trivias based on a different team. The class TriviaGame uses and **object** TriviaQuestion which is used to create individual question and answers to make the game. I used **setTimeout** and **setInterval** to limit amount fo time spent on question and change background on website.
