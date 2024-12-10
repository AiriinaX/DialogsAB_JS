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

- cardsContainer – Represents the element with the ID cards-container.
- prevBtn – Represents the element with the ID prev.
- nextBtn – Represents the element with the ID next.
- currentEl – Represents the element with the ID current.
- showBtn – Represents the element with the ID show.
- hideBtn – Represents the element with the ID hide.
- questionEl – Represents the element with the ID question.
- answerEl – Represents the element with the ID answer.
- addCardBtn – Represents the element with the ID add-card.
- clearBtn – Represents the element with the ID clear.
- addContainer – Represents the element with the ID add-container.

### Variables for managing cards:

- currentActiveCard – Tracks the index of the currently active card (initially set to 0).
- cardsEl – An array that stores DOM elements for the cards.
- cardsData – An array holding the data for the cards (question and answer pairs).

### Event listener-related variables:

- question – Stores the value entered in the question input field.
- answer – Stores the value entered in the answer input field.
- newCard – Represents a newly created card object with question and answer properties.

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
-  This class is applied to each individual card element that is created. It is used to style the card's appearance.

2. active
-  This class is applied to the currently active card, which is typically the card shown in the center. It is added dynamically to the first card initially and updated when navigating between cards.

3. inner-card
-  A class applied to the container of each card's front and back sections. It wraps the content of the card.

4. inner-card-front
-  A class applied to the front side of the card. This side contains the question of the card.

5. inner-card-back
-  A class applied to the back side of the card. This side contains the answer to the card's question.

6. show-answer
-  This class is toggled on the card element when the user clicks on a card. It is used to show the answer (by revealing the back of the card) when the card is clicked.

7. left
-  This class is applied to a card when it is being moved to the left side (used in the transition when navigating backward through the cards).

8. right
-  This class is applied to a card when it is being moved to the right side (used in the transition when navigating forward through the cards).

9. show
-  This class is added to the add-container element when the "Show" button is clicked, making the container visible for adding a new card. It is removed when the "Hide" button is clicked to hide the container.


## A LIST OF THE OPERATORS IN THE CODE
1.  Assignment Operator (=)
-  Used to assign values to variables.

2. Equality/Strict Equality Operators (==, ===)
-  Used to compare values. The strict equality operator (===) compares both value and type.

3. Inequality/Strict Inequality Operators (!=, !==)
-  Used to check if values are not equal (inequality) or not equal in value and type (strict inequality).

4. Addition (+)
-  Used for adding numbers or concatenating strings.

5. Subtraction (-)
-  Used for subtracting numbers.

6. Increment (++)
-  Increases a variable's value by 1.

7. Decrement (--)
-  Decreases a variable's value by 1.

8. Logical AND (&&)
-  Used to check if both conditions are true.

9. Logical OR (||)
-  Used to check if at least one of the conditions is true.

10. Ternary Operator (? :)
-  A shorthand for if-else conditions. It evaluates a condition and returns one value if true, and another if false.

11. Template Literals (``)
-  Used for embedding expressions inside strings.

12. Array Methods
-  push(): Adds an item to the end of an array.
-  forEach(): Iterates over each element in an array

13. Conditional (if/else)
-  Used for controlling the flow based on conditions.

14. Event Listener Methods
-  addEventListener(): Attaches an event handler to an element.
-  removeEventListener(): Removes an event handler from an element (not used in the provided code but part of the event listener syntax).


## THE SEQUENCE OF OPERATIONS 

The sequence of operations in the provided code can be broken down into several steps that correspond to the user interactions and the resulting updates to the user interface and data storage. Below is a description of the sequence of operations, also known as the algorithm or business logic.

1. Initial Setup
- DOM Element References.
The first operations involve retrieving references to various DOM elements using document.getElementById(). These elements include containers, buttons, and inputs related to cards.
- Initialize Variables.
The currentActiveCard variable is initialized to 0 to track the index of the currently active card.
An empty array cardsEl is initialized to store DOM elements for the cards.
The cardsData array is populated using the getCardsData() function. If no cards exist in local storage, it returns a default set of card objects.

2. Card Creation (createCards() & createCard() Functions)
- createCards().
This function is called immediately to render all the existing cards on the page.
It loops through the cardsData array and calls createCard(data, index) for each card object.

- createCard(data, index).
This function dynamically creates a div element for each card, assigns it the card class, and sets the content (question and answer) using the data object passed to it.
It also checks if the current card is the first one (index === 0) and adds the active class to highlight it.
Each card gets a click event listener to toggle the show-answer class, which reveals or hides the answer when the card is clicked.
The card is then added to the cardsEl array and appended to the cardsContainer in the DOM.
The function calls updateCurrentText() to update the display of the current active card number.

3. Navigation Between Cards (Next and Previous Buttons)
- Next Button (nextBtn.addEventListener('click', ...)).
When the "Next" button is clicked, the current card is moved out of view by applying the left class.
currentActiveCard is incremented by 1, ensuring it doesn't exceed the total number of cards.
The new card is assigned the active class, and updateCurrentText() is called to reflect the new active card in the UI.

- Previous Button (prevBtn.addEventListener('click', ...)).
When the "Previous" button is clicked, the current card is moved out of view by applying the right class.
currentActiveCard is decremented by 1, ensuring it doesn't go below 0.
The new card is assigned the active class, and updateCurrentText() is called to reflect the new active card in the UI.

4. Show and Hide Add Card Form
- Show Add Container (showBtn.addEventListener('click', ...)).
When the "Show" button is clicked, the addContainer is displayed by adding the show class to it.

- Hide Add Container (hideBtn.addEventListener('click', ...)).
When the "Hide" button is clicked, the addContainer is hidden by removing the show class.

5. Add New Card
- Add Card Button (addCardBtn.addEventListener('click', ...)).
When the "Add Card" button is clicked, the function checks if the questionEl and answerEl fields are not empty using the trim() method.
If both fields contain valid values, a new card object (newCard) is created with the provided question and answer.
The new card is passed to createCard(newCard) to render it on the page.
The input fields are cleared, and the addContainer is hidden by removing the show class.
The new card is added to the cardsData array, and the updated cardsData is stored in local storage using the setCardsData() function.
The page is reloaded to reflect the newly added card.

6. Clear All Cards
- Clear Button (clearBtn.addEventListener('click', ...)).
When the "Clear" button is clicked, all card data is removed from local storage using localStorage.clear().
The cardsContainer is emptied by setting its inner HTML to an empty string, effectively removing all cards from the page.
The page is reloaded to reflect the cleared state.

7. Updating the Current Card Display
- updateCurrentText().
This function is called whenever the active card changes (either by navigating through the cards or adding a new card).
It updates the currentEl element's inner text to show the current active card number in the format currentActiveCard + 1 / total number of cards.

8. Local Storage Management
- getCardsData().
This function retrieves the cards stored in local storage, if any. If no cards are found, it returns an empty array.

- setCardsData(cards).
This function saves the updated cards array to local storage and reloads the page to reflect any changes (such as adding a new card).

### Flow Summary
- On Page Load. The createCards() function runs to render all cards stored in local storage (or the default set if none exist).
- Navigating Cards. The user can navigate through the cards using the "Next" and "Previous" buttons, which update the active card and display the current card number.
- Adding a Card. The user can click "Add Card," enter a question and answer, and then save the new card to local storage and the UI.
- Clearing Cards. The user can clear all cards from the page and local storage using the "Clear" button.

