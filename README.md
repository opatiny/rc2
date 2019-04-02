# Remote Control Cylinder

---

Most importantly, this README is not the main source of information for this project. A detailled paper can be found [here](https://github.com/opatiny/rc2/blob/master/documentation/RemoteControlCylinder.pdf).

<img src="documentation/pictures/cp3.JPG" alt="drawing" width="70%"/>  

_Final cylinder prototype_

## Abstract
This one year project consists in the development of a remote controlled cylinder that uses servo motors to displace its center of mass, which leads the cylinder to accelerate linearly. This implies that very diversified fields such as mathematics, physics, programming, electronics and mechanics had to be explored and partly understood to be combined in the final prototype. This prototype has an acrylic glass base structure with a diameter of 32 cm, it is controlled using a C.H.I.P. Pro (a micro-controller similar to Raspberry Pi) and a customized dedicated extension board. The board includes a driver for four servo motors and a 6 axis accelerometer. Finally, the power supply consists of a pack of three AA batteries. All the programming was made using JavaScript scripts that are run using Node.js and a Shell. In addition, the cylinder is remotely controlled through a web page, which make it easy and intuitive for the user. The final features of this robotic cylinder are the following: it can roll forwards and backwards, stop and keep itself balanced on a gentle slope . Also, it is only working well on flat, hard surfaces, though it could easily be adapted to rougher surfaces. The possibility has also been considered of creating a sphere that uses the same technologies as the cylinder that was constructed in this project. Finally, this work is meant to be as open-source as possible. Therefore, the software that was developed is under MIT licence, whereas the hardware is under CERN OHL. The results of the project can be seen easily in [this movie](https://youtu.be/QggOjoGjJhA).

## Concept

Initially the project was inspired by a rover realized by [Octanis](https://www.octanis.org/), a student's association specialized in electronics. The rover was supposed to be send to Antarctica and be able to analyse it's environment autonomously. Seeing the Rover tested on a Glacier on a windy day made me wonder what would be the best design for a windproof robot and I immediately thought of a spherical robot. However, once I got back home and looked for similar ideas, I realized that they were already existing projects that consisted in a spherical robot. One of the most famous being the [Sphero](https://www.sphero.com/), a spherical robot toy.

Looking further, I also realized that most of the projects use a similar approach to move the sphere: I call it the hamster wheel approach. It basically is a little car which wheels lay on the outer, rigid shell that induces the movement. I, on the contrary, had imagined a completely different system: I would displace the center of mass of the cylinder to make it roll.

## Programming

All the code that allows the control of the cylinder is contained in the following repository:
[https://github.com/opatiny/chip](https://github.com/opatiny/chip).

The programming has been done in JavaScript (using Node.js) and HTML for the web page that allows the control of the cylinder. Websocket was used to make the web page dynamic.

## Documentation

You might find a lot more of documentation about this project can be found in the [documentation](https://github.com/opatiny/rc2/tree/master/documentation) section of this repository. There, you will find pictures, a developed abstract, and the paper about this project.

## Videos

Cardboard model of the cylinder's mechanism: [https://youtu.be/4SuPhpwOK5g](https://youtu.be/4SuPhpwOK5g)

The mass of cylinderPrototype2 moving on a circle using an atMega32u4: [https://youtu.be/1zOCNZ_r5pY](https://youtu.be/1zOCNZ_r5pY)

Final cylinder's prototype presentation video:
[https://youtu.be/QggOjoGjJhA](https://youtu.be/QggOjoGjJhA)

## Repository structure

In this section, we explain what the different folders of this repository contain and what it was used for.

__Note:__ Three main prototypes were built during this project. TO refer to them, we use the acronyms cp1, cp2 and cp3 ("cp" stands for "cylinderPrototype"). You can see pictures of the prototypes in the [Pictures section](#pictures).

### arduino
Very basic programs in Arduino that allowed to test the movement of the mass with cp2. The values of the angles of the servos motors depending on the mass position were exported from the [GeoGebra model](https://github.com/opatiny/rc2/blob/master/movingMassOnCircle/geogebra/cylinderPrototype2/cylinderPrototype2.ggb) that we designed.

### datasheets
Datasheets of the electronical components used in this project: servo motors (MG995), accelerometer (MPU6050), servos driver (PCA9685) and C.H.I.P..

### documentation
Main source of information about this project, contains a pdf of the paper, a presentation, posters and an abstract. You will also find pictures there.

### freecad
FreeCAD is the software we used to create the designs of the cylinder. The "exports" subfolder contains files that can be directly used to laser cut the different parts (.dxf).

### javascript
First JavaScript programs that implemented the mathematical formula that returns the angles of the servos depending on the position of the mass. This code is the base of the [chip](https://github.com/opatiny/chip) GitHub repository, which contains the final code.

### movingMassOnCircle
Contains the GeoGebra models of the cylinder's mass movement and files commenting the observations made based upon them.

### pcb
Contains the Eagle and KiCAD files of the extension boards. They are two different boards, because when working on the project after a year, I realized that the cylinder was no longer functionning. I therefore had to change the micro-controller, because C.H.I.P. had made bankrupt. I decided to switch to a Raspberry Pi Nano W.

### raspberry
Procedure allowing to format a Raspberry Pi to make it act as a WiFi rooter.

## Pictures

Here are a few pictures of the project.

<img src="documentation/pictures/cardboardModel.jpg" alt="drawing" width="60%"/>

_Cardboard model of the cylinder_

<img src="documentation/pictures/cp1.JPG" alt="drawing" width="60%"/>

_First prototype of the cylinder_

<img src="documentation/pictures/proto2Ggebra.png" alt="drawing" width="60%"/>

_[GeoGebra](https://www.geogebra.org/) model allowing to see the movement of the servo motors_

<img src="documentation/pictures/close-upCp2.JPG" alt="drawing" width="60%"/>

_Close-up of the second prototype_

<img src="documentation/pictures/metalLathe.png" alt="drawing" width="60%"/>

_Metal turning a part of cp3_

<img src="documentation/pictures/pcb.JPG" alt="drawing" width="60%"/>

_PCB extension allowing the connection of two I2C peripherals to the C.H.I.P. Pro (accelerometer and servo driver)_

<img src="documentation/pictures/longApPic.JPG" alt="drawing" width="60%"/>

_Long aperture picture of the mass moving on a spiral (cp3), max radius is 40mm_

<img src="documentation/pictures/webpage.png" alt="drawing" width="90%"/>

_Final control web page_
