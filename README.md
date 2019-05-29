# bithackathon
Code and Ideas for BIT Hackathon by SONAE MC for team Pyto

* [Hackathon Homepage](https://bithackathon.sonae.pt/)
* [TAIKAI](https://taikai.network/bit/challenges/bithackathon)
* [Slack](https://bithackathonworkspace.slack.com/)

## Agenda
#### Day 1 - Thursday, May 30th Time
* 13:30 Check-in
* 14:00 Opening Session
* 15:00 Let the games begin! The clock is ticking...
* You'll be visited by mentors during the afternoon.
* 20:00 Dinner (Checkpoint)*
#### Day 2 - Friday, May 31st Time
* 08:30 Breakfast (Checkpoint)*
* 12:00 Lunch
* 13:00 Intermediate evaluation
* 15:00 TIME's UP! Deadline to submit presentations
* 16:00 Showtime! It's your time to shine!
* 17:30 Deliberation... or should we say Investment time!?
* 18:00 And the winner is ******
* 18:30 Farewell

## Ideas 

### 1 - CONtinente Assistant

- A in-store voice assistant
- Integrated into Google Assistant to respond to queries 
- Would respond to queries such as 
    - Where is the <product>, e.g., "Where is the beer? -> It's on aisle 6"
    - What is the cheapest <type_of_product>, e.g., "What is the cheapest portuguese beer? -> Sagres (?)"
    - Are there any <product | type_of_product> here?, e.g., "Are there any Milka bars here? -> Yes, on aisle 4."
- Can suggest products based on association info on queried products

#### Cons
- Depends heavily on whether or not we have location info on Continente's API
- Creating a not-so-basic PoC is hard. A super simple demo integrating [Google Actions](https://developers.google.com/actions/) on a mock app might work
- Can simply be a feature of another app

### 2 - In-Store Cart Manager / Social Continente / Gamification
- App to phisically track your cart during a stay at Continente
- Products are tracked via smartphone camera on barcode 
- Useful metrics tracked
    - Total price
    - Nutritional Values (this feature can be extented into a standalone app)
- Additional features
    - When adding something to cart, e.g., rice, the app may suggest something along the lines of "Hey, Banco Alimentar is also looking for rice, would you like to donate some?". If you comply, the price is added to the cart, but you don't take the item home, Continente then donates it for you.
        - Multiple causes can be donated to
        - A public leaderboard can be created based on donation ammounts (per week, month, year), with prizes. Gamification :check
    - "Make it social" 
        - Ability to purchase items to friends
            - Useful because it's fun, and more humane than sending money
            - Parents can purchase specific items for children to pickup. Same applies for friends
            - The user would be notified via notification when a gift is received
            - Next time you're in the store, you can take the item for free
            - "Gift suggestions" for friends could be applied, but ethics/privacy questions arise. Make it opt-in, whishlist based?

#### Cons
- Is this the "heatmap" of Bithackathon?

### 3 - NutriContinente

- Base is same as 2, "app to phisically track your cart during a stay at Continente"
- Focused on nutritional information on what is on the cart
- You can set nutritional goals/macros, through either calorie ammounts, percentages of different types 
- You can set restrictions based on your diet, e.g., diabetic person, vegetarian, no gluten, etc.
- Use cases
    - "Sporty person" wants to eat 14000 kcal during next week, 50% protein, 30% carbs, etc. The app tracks how close to those goals they are, during their purchase(s)
    - Diabetic person is looking specifically for low carb products
- Products can be suggested based on goals/preferences set
    - There's room for product recommendation based on stock shortages. Value for Continente

#### Cons
- Product suggestion based on nutritional value might raise concerns form nutricionists
    - Professional "handmande" pool of products?
- Again, is this the "heatmap" of Bithackathon?

### 4 - Some Other Fun Ideas / Generic Features

#### ContinenteGO
- Bluetooth beacons randomly spread accross stores would give discounts/portion of discount when passed by
- Can me extensively gamified
    - N beacons per day, per store. Streak days can lead to discounts
    - Leaderboards

#### Continente Track
 - Bluetooth beacons spread accross stores on all aisles so that we can track the user throughout the store
 - Use this to do something with the customer's real experience
 Pros:
    . `Product Data Enrichment` which is one of the explicit goals of the contest
    . 
    
#### Continente Data Science (CDS)
 - Use APIs and Datasets to produce intreresting visualization techniques that Sonae likes to see

# How to Win
The voting criteria used by our judges will be based on:
1. Innovation level
2. Relevance to retail
3. Developed prototype
4. Feasibility and reproducibility
5. Presentation
