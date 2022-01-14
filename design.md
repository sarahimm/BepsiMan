game
|Property |Type| Description|
--- | ---| ---|
|velocity|Float|Speed at which the back layer of the background moves
|Urls|Str array|Stores urls for all image resources used in game
|Backgrounds|Image array|Stores all 3 background layer image objects
|backgroundPos|Int array|Stores positions for all background layers
|
|bepsiMan|bepsiMan|Character object
|cans|sodaCan[]|Array of all soda cans currently on the screen
|canIcon|Image object|Stores image for all can objects
|canProb|float|Probability a can will be generated in each frame
|cansCollected|int|Counts cans player has collected during game
|canvas|Canvas|HTML element to display the game
|context|2dCanvasContext|2d canvas context for drawing the game
|timer|int|Decrements to 0 to end game
|starttime|int|Initial value of timer; caps amount of extra time bonuses players can collect
|||
|Methods||
|||
|update|anon function|Moves all game objects, calls checkCollision() and draw()
|checkCollision|anon function|Checks to see if BepsiMan is colliding with any cans; if so, increment timer and velocity and remove the can
|draw|anon function|Render page with updated values

bepsiMan
|Property |Type| Description|
--- | ---| ---|
|inAir | Boolean| True when jumping; prevents double-jumps
|jumpHeight |Float|Height of a single jump; const
|cansCollected|Int|# of cans collected so far
|posY|Float|Current y-position of the character
|posX|Float|X-position of the character (const)
|length|Float|Height of the character's hitbox
|width|Float|Width of the character's hitbox
|runAnim|Image Array|Stores animation frames for running
|jumpAnim|Image Array|Stores animation frames for jumping
|curFrame|Int|Tracks current frame in relevant animation image array
|yVelocity|Int|Stores velocity for jump (set by lowJump() and highJump())
|gravity|Int|Stores acceleration for jump
|||
|Methods||
|||
|lowJump|anon function|Adjusts position and inAir properties so BepsiMan jumps|
|highJump|anon function|Adjusts position and inAir properties so BepsiMan jumps|


sodaCan
|Property |Type| Description|
--- | ---| ---|
|posY|Float|Current y-position of the can
|posX|Float|X-position of the can
|height|Float|Height of the can's hitbox
|width|Float|Width of the can's hitbox
