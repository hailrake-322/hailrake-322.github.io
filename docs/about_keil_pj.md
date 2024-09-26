# <center>About Keil Project


|<center>APP_MAIN |<center>Discription |
|--------|----------------------------------------------------------------------------|
|<center>assets.c |core file for working assets system [more about them here](/assets/) |
|<center>app_main.c |initialization all user platform, from CAN interface to UI   |
|<center>app_screens.c |here all our objects and screens are created, absolutely all graphics, with the appearance of each new screen we need to go down to the lowest of this file, and arrange the correct sequence for creating screens. |
|<center>app_handlers.c |there are timers set here from 1 millisecond to a second for any of your purposes (sending CAN messages, or processing something) |
|<center>app_events.c |all logic that interacts with graphics is will be written here, [all events work through lvgl](events_working) |
|<center>app_can.c |receiving CAN messages by the panel, from here you need to process the messages and send graphic events to the app_events file depending on the incoming message (for example)  |
|<center>gj1939_app.c |table of CAN messages that the panel will receive |
|<center>app_global_config.h |A project-wide configuration file that configures the debug depth level, the brightness level when starting using the display startup function, the time zone, and the application version. |




|<center>APP_UI |<center>Discription |
|--------|----------------------------------------------------------------------------|
|<center>app_ui.c |here screen presets for work are created and filled in [more about them here](/presets_working/) |
|<center>app_images.c |here the paths to your images are generated, which you convert in the converter, [more details here](/assets/) |
|<center>app_screens.c |here all our objects and screens are created, absolutely all graphics, with the appearance of each new screen we need to go down to the lowest of this file, and arrange the correct sequence for creating screens. |

---