# <center>Recommendations
  
## This article provides guidelines for working while creating a UI.

### <center>Stylization

#### It is recommended to repaint/replace objects only using states, and hide only using a flag

#### Also define style changes only by states, which also need to be configured only in eez studio (with very rare exceptions)

#### When creating an interface, it is recommended to limit yourself to the capabilities of EEZ Studio, but occasionally there are situations when it is necessary to use LVGL functions that are not yet integrated, to do this, simply write them in the `ui_init_events` function

### <center>Example of object styling bypassing EEZ Studio
```C
/*******************************************************************************
* Function Name  : ui_init_events
* Description    : init all events & anims
* Input          : -
* Output         : -
* Return         : -
*******************************************************************************/
int ui_init_events(void) {

    /* init your evets */
        /* ... */

    /* after init events */
    lv_obj_add_style(objects.your_obj, &style_main, LV_PART_MAIN);
    lv_obj_add_style(objects.your_obj, &style_indicator, LV_PART_INDICATOR);
    lv_obj_add_style(objects.your_obj, &style_pressed_color, LV_PART_INDICATOR | LV_STATE_PRESSED);
    lv_obj_add_style(objects.your_obj, &style_knob, LV_PART_KNOB);
    lv_obj_add_style(objects.your_obj, &style_pressed_color, LV_PART_KNOB | LV_STATE_PRESSED);


	return (0);
}

```