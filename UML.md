game
|Property |Type| Description|
--- | ---| ---|
|velocity|Float|Speed at which the front layer of the background moves
|bepsiMan|bepsiMan|
|cans|sodaCan[]|Array of all soda cans currently on the screen
|canvas|
|||
|init|anon function
|update|anon function|Checks for collisions, updates timer and velocity on collision, moves background and cans, checks for user input and moves bepsiMan
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
|||
|jump|anon function||
|highJump|anon function||


sodaCan
|Property |Type| Description|
--- | ---| ---|
|posY|Float|Current y-position of the can
|posX|Float|X-position of the can
|length|Float|Height of the can's hitbox
|width|Float|Width of the can's hitbox