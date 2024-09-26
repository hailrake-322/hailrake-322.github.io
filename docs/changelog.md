# <center>Changelog

## Update 1.2 is out now!
<br>

### Launcher
#### Meet the launcher, now it is responsible for installing and updating the project and everything connected with it, you can [download it on our server in discord](https://discord.com/invite/H8RTNTDSPR), in the release channel!
#### In addition to template projects, you can install various demo versions in the launcher, their number will constantly increase, we are aimed at long-term support of the launcher and increasing its functionality.
#### If you are too lazy to read the full guide to using the launcher, remember the main thing - download all projects into 1 folder, the folder should have the name of the working project, since it will contain a `projects` folder that contains a project for Keil and EEZ Studio

### Keil and EEZ projects
#### Now Keil and EEZ Studio projects updates independently of DFP, just as it update independently of them.
### Keil
* app_* files update

* project config created

* file with table for installing custom symbols on keyboard and more created

### EEZ Studio
* updating our studio fork to 0.17, integrating the ability to work with our simulator


### Simulator
#### We present you a simulator in Visual Studio, in it you can develop projects, directly working with the source files that the panel uses, it will be available for installation through the launcher a week after the release of update 1.2.

### SDK
#### We present our SDK for working with the panel, it includes various utilities necessary for comfortable work with the panel.
#### The SDK includes: 
* Firmware Creation - an application for creating firmware files via a bootloader, the application version is transferred to the project in the `user_global_config.h` file 

* FLM - files required for flashing the panel via a debugger, [check guide](/addflm/)

* Dithering Tool - an experimental utility for dithering images and giving them a better look for 565A8 performance mode.

* vcom_driver - the driver selected for the console, we recommend using Tera Term.

* Image Converter - a replacement for the nxp guider, now it is not necessary, all you need is to transfer your images to resource files in png format, then run the script and wait for it to complete, the output will generate 2 files that
need to be transferred to the root of the Keil project

### Device Family Pack
#### Now the project's DFP is updated separately from Keil
#### Briefly about the changes
* update to Lvgl 9 version

* major loader update

* significant optimization of CAN

* added global variable `ui_render_now`, it is needed for working with LVGL objects in CAN handlers and not only, just before working with an object outside of events add 

```C
 if (!ui_render_now) {
 /* youre working with objects */
 }
```

* optimized work with assets, as a result of which they became many times size smaller.

* major API change

* Multiple fixes.
