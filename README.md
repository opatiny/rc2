# Development of a remote control cylinder that rolls when its gravity center is displaced

---

This repository contains all the data that was used and produced to realize this project. Which means:

- schemes
- pictures (in https://github.com/opatiny/tm/tree/master/pictures)
- models
- bits of code useful to understand bases of C and JS programming
- various links to videos explaining the project

## Abstract

This one year project consists in the development of a remote controlled cylinder that uses servo motors to displace its center of mass, which leads the cylinder to accelerate linearly. This implies that very diversified fields such as mathematics, physics, programming, electronics and mechanics had to be explored and partly understood to be combined in the final prototype. This prototype has an acrylic glass base structure with a diameter of 32 cm, it is controlled using a C.H.I.P. Pro (a micro-controller similar to Raspberry Pi) and a customized dedicated extension board. The board includes a driver for four servo motors and a 6 axis accelerometer. Finally, the power supply consists of a pack of three AA batteries. All the programming was made using JavaScript scripts that are run using Node.js and a Shell. In addition, the cylinder is remotely controlled through a web page, which make it easy and intuitive for the user. The final features of this robotic cylinder are the following: it can roll forwards and backwards, stop and keep itself balanced on a gentle slope . Also, it is only working well on flat, hard surfaces, though it could easily be adapted to rougher surfaces. The possibility has also been considered of creating a sphere that uses the same technologies as the cylinder that was constructed in this project. Finally, this work is meant to be as open-source as possible. Therefore, the software that was developed is under MIT licence, whereas the hardware is under CERN OHL. The results of the project can be seen easily on: https://youtu.be/QggOjoGjJhA.

## Concept

The goal of this project was to realise a remote control cylinder that rolls when its center of mass is displaced. The approach chosen to make the mass move is to use three servos (MG995) screwed on the boarder of the cylinder, these are connected to the mass using rigid metallic bars. To induce the movement, it was needed to be able to make the mass move on a circular path of given radius, so we demonstrated the formula allowing to have the angles of the servos depending on the position of the mass in the cylinder and we implemented this fomula into a JavaScript code (https://github.com/opatiny/tm/tree/master/javascript). The micro-controller we use in the final version of the project is a C.H.I.P. Pro with a dedicated board including two peripherals: a PCA9685 for the servos control and a MPU6050, which is a 6 axis accelerometer (the eagle files of the board can be found on https://github.com/opatiny/tm/tree/master/eagle). The final cylinder is controlled through a web page and has the features to go forward, backwards and stop. It can also remain balanced on a gentle slope.

## Programming

All the code that allows the control of the cylinder is contained in the following repository:
https://github.com/opatiny/chip

All the programming has been done in JavaScript and HTML for the web page that allows the control of the cylinder.

## Documentation

You might find a lot more of documentation about this project on the latex document that can be found in the following repository:
https://github.com/opatiny/TM.ltx

## Links

General description of the project: https://youtu.be/ukGI9wgj91s

Cardboard model of the cylinder mechanism: https://youtu.be/4SuPhpwOK5g

The mass of cylinderPrototype2 moving on a circle using atMega32u4: https://youtu.be/1zOCNZ_r5pY

Last cylinder prototype presentation video:
https://youtu.be/QggOjoGjJhA

## Pictures

Here are a few pictures of the project.

<img src="documentation/pictures/cardboardModel.jpg" alt="drawing" width="70%"/>

_Cardboard model of the cylinder_

<img src="documentation/pictures/cp1.JPG" alt="drawing" width="70%"/>

_First prototype of the cylinder_
