# Development of a remote control cylinder that rolls when its gravity center is displaced
------
This repositroy will contain all the data that was used and produced to realize this project. Wich means:
* schemes
* pictures (in https://github.com/opatiny/tm/tree/master/pictures)
* models
* bits of code useful to understand bases of C and JS programming
* various links to videos explaining the project

## Concept
The goal of this project is to realise a remote controll cylinder that will roll when its center of mass is displaced. The approach chosen to make the mass move is to use three servos (MG995) screwed on the boarder of the cylinder, these are connected to the mass using rigid metallic bars. To induce the movement, it was needed to be able to make the mass move on a circular path of given radius, so we demonstrated the formula allowing to have the angles of the servos depending on the position of the mass in the cylinder and we implemented this fomula into a JavaScript code (https://github.com/opatiny/tm/tree/master/javascript) The micro-controller we use in the final version of the project is a C.H.I.P. Pro with a dedicated board including two peripherals: a PCA9685 for the servos control and a MPU6050, which is a 6 axis accelerometer (the eagle files of the board can be found on https://github.com/opatiny/tm/tree/master/eagle). The final cylidner is controlled through a web page and hace the features to go forward, backwards and stop. It can also remain balanced on a gentle slope. 

## Programming
All the code that allows the control of the cylinder is contained in the following repository:
https://github.com/opatiny/chip

## Documentation
You might find a lot more of documentation about this project on the latex document that can be found in the following repository:
https://github.com/opatiny/TM.ltx

## Links
General description of the project: https://youtu.be/ukGI9wgj91s

Cardbord model of the cylinder mechanism: https://youtu.be/4SuPhpwOK5g

The mass of cylinderPrototype2 moving on a circle using atMega32u4: https://youtu.be/1zOCNZ_r5pY



## Pictures
Here are a few pictures of the project.

![wp_20161220_18_45_09_pro](https://cloud.githubusercontent.com/assets/17711389/23223822/5ec8fcf0-f92c-11e6-929f-96fda3b4c0c6.jpg)
*Carpboard model of the cylinder*
         
 
![photo_2016-12-19_20-16-44](https://cloud.githubusercontent.com/assets/17711389/23224038/19a97658-f92d-11e6-8920-69330bea1507.jpg)
*First prototype of the cylinder*




 
