# Updater
  
Updater allows you to reflash the panel, download the firmware from the git repository, and see what it sends to the terminal.

## Installation:
* The updater requires [Python](https://www.python.org/downloads/) version 3.12 or higher and a [Git](https://git-scm.com/downloads) client to be installed.

* Download Updater client and drivers
[![Download Updater](https://img.shields.io/badge/Download-Updater-blue)](Vega RS Updater.exe)
[![Download Disk Driver](https://img.shields.io/badge/Download-diskDriver-blue)](cdc.cat)
[![Download USB Driver](https://img.shields.io/badge/Download-usbDriver-blue)](fsl_ucwxp.inf)


* Before installing/launching the application, install the driver that comes with the standalone version installer (`fsl_ucwxp`).
* After that, launch the panel and connect it to the computer via USB. If the driver is installed correctly, you will see the panel name, application version, and dfp version.
* If for some reason the panel is not recognized, try reinstalling the driver.

## Working

### Flashing the panel if you already have the application file
* Press the `Select Firmware file` button
* If the application file is correct, the button for uploading the file to the panel will be unlocked 
* If the file upload to the panel was successful, the flashing start button will be unlocked

### Flashing the panel if you do not have the application file
* Press the `Get Firmware` button
* In the window that opens, you will need to specify a link to the repository with the firmware files (for example, https://github.com/example/example), if you are not a developer, request this link from the company selling you the panel.
* After entering the link and pressing the enter key, we will see a list of available firmware, select the one you need and close the installation window.
* All subsequent steps are identical to the method when you already have the firmware file.

### Creating firmware

##### <center>available only in the Evolved version, available only to the developer, it is part of the SDK</center>
* To create firmware, compile the Keil project, then simply click the `Create firmware` button, the firmware is generated in the `output` folder, which is located in the root of the updater.
* To release firmware on git, you just need to create a tag inside the repository that will include only the image.bin file (firmware file).
* If the repository is private, you need to give access to the repository to the account of the person who will flash the panel, or you can create an account, give access to repository and provide account to those who will flash the panel.
* If the repository is open, no action is required