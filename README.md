**OS and Compiler**  
This code will work with macOS, Windows, or Linux, and any IDE. This code was tested successfully on a macOS version Sequoia 15.3.1, and in the IntelliJ IDE.  
No compiler is needed; the program runs in the Electron application in JavaScript.

**Instructions**

Install Sonic Pi from https://sonic-pi.net/  
Install npm: npm install  
Install Electron: npm install --save-dev electron@40.4.1   
Install OSC: npm install osc

Download this project code into any IDE.
Open a workspace in Sonic Pi, and paste the following code:

use_osc "127.0.0.1", 57121  
live_loop :test_osc do   
    osc "/instrument/drum", 1  
    sample :bd_haus  
    sleep 1
end

Press run. You should hear a single drum beat playing on a loop.

Now, in your IDE terminal, run the following command:  

npm start

The terminal will display messages showing that it is receiving the drum beat.


