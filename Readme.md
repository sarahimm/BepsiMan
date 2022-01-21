# GP3 - JavaScript Game Object Design
Class: CS301 – Internet Applications Development   
Last Modified: 1/7/2022
Authors: Kent Jones, Peter Tucker, and other CS Faculty

## Overview
The goal of this third group project is to finish your side-scrolling JavaScript game. 
* Visual Design: Make a game that will attract your intended audience to your website.
* User Interface Design: Make a game that lets users easily discover how to operate it. 
* Business Considerations: If you wanted to collect revenue from your game by advertising on this website, how would design it so advertizing does not distract from the game, but, still allows customers to see it.
* Technical Implementation and Design: Make a game that's easy to understand how it work and easy for future developers to maintain.


### Grade Break Down
| Part                                     |     | Points  |
|------------------------------------------|-----|---------|
| visual layout and visual design          |  25 |  25 pts |
| Technical Design                         |  21 |  25 pts |
| Game works                               |  25 |  25 pts |
| Presentation                             |  25 |  25 pts |
| TOTAL                                    |  96 | 100 pts |

* Visual Layout and design
    + looks really good, like bepsi man is actually running!
    + Cool that he turns into a can when he jumps
    + the heath bar thing is also awesome
    + controls were a bit hard to notice at first
* Technical Design
    + design looks good, make sure you check what .md files look like on whitgit when you upload them, some formatting is off
    + nice flow chart
    + good comments, but no headers in files
* Game works good!
##### Class Critiques
* Artistic Design: Layout easy to understand and focuses user attention appropriately. (1 - needs improvement to 5 - Excellent)
    + 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5
* Artistic Design: Effective writing (1 - needs improvement to 5 - Excellent)
    + 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5
* Artistic Design: Fonts/Typefaces easy to read (1 - needs improvement to 5 - Excellent)
    + 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5
* Artistic Design: Good use of complementary colors (1 - needs improvement to 5 - Excellent)
    + 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5
* Artistic Design: Effective images (1 - needs improvement to 5 - Excellent)
    + 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
* Artistic Design: Effective images (1 - needs improvement to 5 - Excellent)2
    + 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
* Artistic Design: Good navigation elements (1 - needs improvement to 5 - Excellent)
    + 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
* Artistic Design: Mobile friendly design (1 - needs improvement to 5 - Excellent)
    + 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5
* Please give any additional feedback to the group from a artistic design perspective
    + awesome work getting the running animation there! its super cool and adds another element of fun to the game!
    + Your usage of colors and theme is really good and consistent. Your assets are also very well made. I do not really have much feedback on this. 
    + my group, am biased
    + I love the graphics and everything!!! 
* Please rank how well the website establishes a "brand" or "identity". (1- weak to 5 - excellent)
    + 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
* Based on the design, what age group / demographic do you think the group is targeting?
    + teen to young adult
    + all ages
    + young people who like funny memes and computer games!
    + Teenagers/Millenials
    + 11-30
    + 10;18
    + Anyone who knows the original Pepsi man game
    + Teens/young adults
    + teenagers
    + 12-19
    + pepsi man
    + 10-20
* Do you have any additional suggestions for the group regarding brand, identity, copyright, or other suggestions from a business and marketing perspective?
    + bepsi is a very funny identity, and you establish it well!
    + I do wonder if you would run into issues with Pepsi if you wanted to monetize the game. 
    + Idk if Pepsi Man is copyright or not
    + strong identity, my group, am biased
    + Make sure to still give reference to pepsi trademarks (it looks really similar)
* HTML and CSS is well formatted with good use of indents and comments. 1 - weak to 5 - excellent
    + 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5
* HTML uses lowercase except where required. 1 - weak to 5 - excellent
    + 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5
* HTML passes the validator on https://validator.w3.org/nu/. 1 - weak to 5 - excellent
    + 3, 4, 4, 4, 5, 5, 5, 5, 5, 5
* HTML uses alt attribute fallbacks for multimedia and images. 1 - weak to 5 - excellent
    + 3, 4, 4, 4, 4, 5, 5, 5, 5, 5
* Any other HTML or CSS suggestions for this group?
    + comments more! code is good, would be easier to understand with comments
    + HTML and CSS look clean and well formatted. 
    + no suggestions, my group, am biased
### Evaluation Criteria
* 25 pts Good visual layout and visual design (5 pts will be class critique) (use of color, negative space, relationship between visual elements, etc.)
* 25 pts Good Technical Design:  Good repository commit comments, Good documentation in the JavaScript code and header comments in ALL the js/html files, References to any resources used from the web, Good design of JavaScript code and objects, included both Design.md and ControllerDesign.png as described below in the directions, Good  use of JavaScript functions, works on different platforms (mobile, ipad, desktop)
* 25 pts Game works and functions for presentation
* 25 pts Presentation

### Directions
1.	As a group, identify the main objects for your game. List them.
2.	What properties and methods will each object need? Do not write code yet. Design a psuedo UML diagram, like I have illustrated below, for each object. Identify the properties ( key : variable value) pairs and the methods ( key : anonymous function value) pairs. Use the Coyote object as an example. Put this in a file called Design.md and save it in your repository folder. Your class diagram (in the Design.md file) should look like this:

| aGameObjectName - short description of purpose                                     |
|------------------------------------------------------------------------------------|
| property_name_1  :  property_type_1 ( short description of propterty 1 )           |
| property_name_2  :  property_type_2 ( short description of propterty 2 )           |
| ...  :  ...                                                                        |
| method_name_1  :  anonymous function ( short description purpose of the method 1 ) |
| method_name_2  :  anonymous function ( short description purpose of the method 2 ) |
| ...  :  ...                                                                        |

3.	Design a rough outline for the main controller script flow diagram.  Do not write code yet. Make a picture/drawing called ControllerDesign.png and put a copy in your repository folder. 
4. Identify the tasks do you want your main controller script to do? (A controller script will be called roughly once every 25 ms) Here are the tasks my controller does. What do you want yours to do?
a.	Registers one or more callback functions (more on this next class)
b.	Update each objects
c.	Checks for collisions (if collisions implemented)
d.	What else do you want?
5. Now you can start working on code. Each of you should have a branch of the project. 
6. I recommend either (a) breaking into pairs and coding that way or (b) coding as a group. Make sure to share development time. 
7. Remember, each of you must have your own branch of the project! 
8. Branch early, commit and synch often, and make sure to use descriptive comments each of your commits!
5.	For grading this exercise, we will look at the requirements listed above! Make sure to have someone in your group check that you are meeting the requirements!

