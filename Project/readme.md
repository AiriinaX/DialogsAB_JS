# Memory Cards

Flash card app for learning. Display, add and remove memory cards with questions and answers

## Project Specifications

- Create flip cards using CSS
- Create "Add new card" overlay with form
- Display question cards and flip for answer
- View prev and next cards
- Add new cards to local storage
- Clear all cards from local storage


## A LIST OF VARIABLES IN THE CODE

### DOM Elements:

cardsContainer – Represents the element with the ID cards-container.
prevBtn – Represents the element with the ID prev.
nextBtn – Represents the element with the ID next.
currentEl – Represents the element with the ID current.
showBtn – Represents the element with the ID show.
hideBtn – Represents the element with the ID hide.
questionEl – Represents the element with the ID question.
answerEl – Represents the element with the ID answer.
addCardBtn – Represents the element with the ID add-card.
clearBtn – Represents the element with the ID clear.
addContainer – Represents the element with the ID add-container.

### Variables for managing cards:

currentActiveCard – Tracks the index of the currently active card (initially set to 0).
cardsEl – An array that stores DOM elements for the cards.
cardsData – An array holding the data for the cards (question and answer pairs).

### Event listener-related variables:

question – Stores the value entered in the question input field.
answer – Stores the value entered in the answer input field.
newCard – Represents a newly created card object with question and answer properties.

## A LIST OF FUNCTIONS IN THE CODE

1. createCards()
  Purpose: Loops through the cardsData array and calls createCard() for each card to create them in the DOM.

2. createCard(data, index)
  Purpose: Creates a single card element in the DOM using the provided data (question and answer) and index. It also adds event listeners to handle card interactions like flipping and updates the cardsEl array and DOM.

3. updateCurrentText()
  Purpose: Updates the text inside the currentEl element to display the current active card number in relation to the total number of cards.

4. getCardsData()
  Purpose: Retrieves card data from local storage. If no cards are found, it returns an empty array.

5. setCardsData(cards)
  Purpose: Saves the current cards data to local storage and reloads the page to reflect the updated cards.

### Event Listeners (as functions)

6. nextBtn.addEventListener('click', () => {...})
  Purpose: Moves to the next card when the "Next" button is clicked. It updates the card classes to reflect the new active card.

7. prevBtn.addEventListener('click', () => {...})
  Purpose: Moves to the previous card when the "Previous" button is clicked. It updates the card classes to reflect the new active card.

8. showBtn.addEventListener('click', () => {...})
  Purpose: Shows the "add container" (for adding a new card) when the "Show" button is clicked.

9. hideBtn.addEventListener('click', () => {...})
  Purpose: Hides the "add container" when the "Hide" button is clicked.

10. addCardBtn.addEventListener('click', () => {...})
  Purpose: Adds a new card based on the input values (question and answer) and updates the cardsData array in local storage.

11. clearBtn.addEventListener('click', () => {...})
  Purpose: Clears the cards from local storage and resets the cards display in the DOM when the "Clear" button is clicked.


### A LIST OF OBJECTS IN THE CODE

1. cardsData (initially an array of objects)
  An array containing multiple card objects, each with the following properties:
- question: The question for the card.
- answer: The answer for the card.

3. cardsEl (an array of DOM elements)
  An array that holds the div elements representing each card in the DOM.

3. Event Objects.
   These are not explicitly created in the code but are used when attaching event listeners. They represent the event that is triggered by user actions:
- click events attached to buttons (e.g., nextBtn, prevBtn, showBtn, hideBtn, etc.).
- for example, the event object is passed into the event handler functions (like addEventListener for buttons), even though it's not used directly in most of the code.

4. newCard (an object)
  Represents a new card that is created when a user adds a new card. It has the following properties:
- question: the question entered by the user.
- answer: The answer entered by the user.

5. data (object)
  This represents each item in the cardsData array and is used in the createCard function. It has the following properties:
- question: The question for the card.
- answer: The answer for the card.

6. card (DOM element object)
  A div element created dynamically for each card, which is appended to the cardsContainer. It represents a single card in the DOM.

7. innerCard, innerCardFront, and innerCardBack (DOM element objects)
  These are nested div elements inside each card, representing the structure of a flip card with front and back sections.
  They are dynamically created and populated with content in the createCard function.


### A LIST OF THE CLASSES IN THE CODE

1. card
  This class is applied to each individual card element that is created. It is used to style the card's appearance.

2. active
  This class is applied to the currently active card, which is typically the card shown in the center. It is added dynamically to the first card initially and updated when navigating between cards.

3. inner-card
  A class applied to the container of each card's front and back sections. It wraps the content of the card.

4. inner-card-front
  A class applied to the front side of the card. This side contains the question of the card.

5. inner-card-back
  A class applied to the back side of the card. This side contains the answer to the card's question.

6. show-answer
  This class is toggled on the card element when the user clicks on a card. It is used to show the answer (by revealing the back of the card) when the card is clicked.

7. left
  This class is applied to a card when it is being moved to the left side (used in the transition when navigating backward through the cards).

8. right
  This class is applied to a card when it is being moved to the right side (used in the transition when navigating forward through the cards).

9. show
  This class is added to the add-container element when the "Show" button is clicked, making the container visible for adding a new card. It is removed when the "Hide" button is clicked to hide the container.


## A LIST OF THE OPERATORS IN THE CODE
1.  Assignment Operator (=)
  Used to assign values to variables.

2. Equality/Strict Equality Operators (==, ===)
  Used to compare values. The strict equality operator (===) compares both value and type.

3. Inequality/Strict Inequality Operators (!=, !==)
  Used to check if values are not equal (inequality) or not equal in value and type (strict inequality).

4. Addition (+)
  Used for adding numbers or concatenating strings.

5. Subtraction (-)
  Used for subtracting numbers.

6. Increment (++)
  Increases a variable's value by 1.

7. Decrement (--)
  Decreases a variable's value by 1.

8. Logical AND (&&)
  Used to check if both conditions are true.

9. Logical OR (||)
  Used to check if at least one of the conditions is true.

10. Ternary Operator (? :)
  A shorthand for if-else conditions. It evaluates a condition and returns one value if true, and another if false.

11. Template Literals (``)
  Used for embedding expressions inside strings.

12. Array Methods
  push(): Adds an item to the end of an array.
  forEach(): Iterates over each element in an array

13. Conditional (if/else)
  Used for controlling the flow based on conditions.

14. Event Listener Methods
  addEventListener(): Attaches an event handler to an element.
  removeEventListener(): Removes an event handler from an element (not used in the provided code but part of the event listener syntax).
