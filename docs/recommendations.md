# Recommendations
  
### Stylization

* It is recommended to repaint/replace objects only using states, and hide only using a flag

* Also define style changes only by states, which also need to be configured only in eez studio (with very rare exceptions)

* When creating an interface, it is recommended to limit yourself to the capabilities of EEZ Studio, but occasionally there are situations when it is necessary to use LVGL functions that are not yet integrated, to do this, simply write them in the `ui_init_events` function

### Example of object styling bypassing EEZ Studio
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

    /* add your styling after init events */
    lv_obj_set_style_bg_opa(obj, 0, LV_PART_MAIN | LV_STATE_DEFAULT); // for example, set opacity to 0 bypassing eez 

	return (0);
}
```