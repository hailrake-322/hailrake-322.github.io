* If you get board before release 1.0.0 version, youre board haven't bootloader, for him load use [jtag](/flm/)
* How to add bootloader into youre project 
* open pack manager in keil & enable `incbin_boot` in DFT pack (utils sectore) 
## USB
#### Now you can connect usb to board, if all correctly you will be see new disk
#### After ever build project in keil cm7 generated firmware binary file `image.bin`, copy him in new disk & reload board, she start update after next enable, for check this see to back on led 
##### <center> DO NOT DISABLE BOARD ON UPDATE TIME