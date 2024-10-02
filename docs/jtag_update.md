## JTAG update firmware


### Firmware loader
The utility for updating the firmware of the JTAG is included in our SDK starting from version 1.1 and below, `SDK->MCU-LINK_installer_3.140`

### Updating MCU-Link Pro firmware
To update the MCU-Link’s firmware it must be powered up in (USB) ISP mode. To do
this insert jumper J4 then connect MCU-Link Pro to your host computer using a micro B
USB cable connected to J1. The red STATUS LED (LED3) should light and stay on (for
further information on LED status information refer to Section 4.7. The board will
enumerate on the host computer as a HID class device. Navigate to the MCULINK_installer_Vx_xxx directory (where Vx_xxx indicates the version number, e.g.
V3.108), then follow the installation instructions in the readme.txt to find and run the
firmware update utilities for CMSIS-DAP or J-Link versions. After updating the firmware
using one of these scripts, unplug the board from the host computer, remove J4 and
then reconnect the board.
 
###  Firmware Installation Guide

This firmware installation guide is suitable for Windows, Linux and macOS environments

Scripts are supplied to enable the programming of NXP CMSIS-DAP and SEGGER J-Link firmware
images into MCU-Link.

To make use of this functionality, place the board in ISP USB mode using the
appropriate jumper on your MCU-Link board, then connect it to the host computer via USB.
Refer to the board documentation for more information.

To install CMSIS-DAP firmware, open a command prompt and call the program script:
    <Install Dir>\scripts\program_CMSIS

To install J-Link firmware, open a command prompt and call the program script:
    <Install Dir>\scripts\program_JLINK

The script programs the firmware image into flash using blhost utility.
Once completed, follow the on-screen instructions to make use of the programmed debug probe.

Further information about the use of blhost is available in the User Guide
https://www.nxp.com/docs/en/user-guide/MCUBLHOSTUG.pdf

Note:
    The script offers the option to repeat the programming sequence to enable
    multiple debug probes to be programmed in sequence.
