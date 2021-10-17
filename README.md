# Action Component
This project was created cloning the 'component-library-template'

## Run
To run this project first use `npm install` to make sure all the dependencies are installed.
Then to run the project, run `npm start`

## Development Process
This project was developed in approximately 8 hours. With the first 3 to 4 hours being used to do the setup, install all the dependencies and undestand a little bit of StencilJS and Storybook.
There were more that I wanted to add and/or fix in the final result. However, I tried to stick to the 8 hours asked.

## Possible Improvements 
Some of the things that I wanted to improve or add in the project were:
 - Fix the layout of the 'Contact Box'. The right side of the box continues to the end of the screen, differently than the other components that left a little margin. I think this is because I used `position: absolute`. When I removed this property, I managed to achieve what I wanted. However, that way I the small "up arrow" in the box didn't stay where I wanted. I think I could have removed the position property and tried to position the arrow in the right place, but, as mentioned before, I didn't want to spend more than 8 hours.
 - I thought about not implementing the buttons as I did and use the Action funcionality of Storybook instead. But since I had never used Storybook I decided to start with what I knew and, if there were enough time left, I would try to change it.
 - I don't reallt know why but, in the large phone screen, the box would modify itself to be responsive (as it should) but some of the text would be cut. This didn't happen in the small phone screen. In the small one the text would reposition itself correctly. 


