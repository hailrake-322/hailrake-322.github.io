# <center>About Keil Project

<table>
<tr>
<th><center>APP_MAIN</th>
<th>
<center>Discription
</th>
</tr>
<tr>
<td><center>assets.c</td>
<td>
<center>core file for working assets system
</td>
</tr>
<tr>
<td><center>app_main.c</td>
<td><center>Initialization all user platform, from CAN interface to UI  </td>
</tr>
<tr>
<td><center>app_handlers.c</td>
<td><center>there are timers set here from 1 millisecond to a second for any of your purposes (sending CAN messages, or processing something)</td>
</tr>
<tr>
<td><center>app_events.c</td>
<td><center>all logic that interacts with graphics is will be written here, all events work through lvgl</td>
</tr>
<tr>
<td><center>app_can.c</td>
<td><center>receiving CAN messages by the panel, from here you need to process the messages and send graphic events to the app_events file depending on the incoming message (for example)</td>
</tr>
<tr>
<td><center>gj1939_app.c</td>
<td><center>table of CAN messages that the panel will receive</td>
</tr>
</table>

|<center>APP_UI |<center>Discription |
|--------|----------------------------------------------------------------------------|
|<center>app_ui.c |<center>here screen presets for work are created and filled in [more about them here](in%20working) |
|<center>app_images.c |<center>here the paths to your images are generated, which you convert in the converter, [more details here](here the paths to your images are generated, which you convert in the converter, more details here) |
|<center>app_screens.c |<center>here all our objects and screens are created, absolutely all graphics, with the appearance of each new screen we need to go down to the lowest of this file, and arrange the correct sequence for creating screens. |

---