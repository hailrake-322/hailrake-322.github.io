# <center>Events

### To work with events, go to the `app_events.c` module.
### It has the `ui_init_events` function, it defines/initializes all events for objects on the display (LVGL objects)

## <center>Event initialize example 
#### <center>`lv_obj_add_event_cb(youre_object, event_handler_youre_object, LV_EVENT_TYPE, NULL);`

| Parameter | Discription |
| ----------- | ----------- |
|  `youre_object` | any object from your project |
| `event_handler_youre_object` | a void type function that accepts an event type |
| `LV_EVENT_TYPE` | event receiving by the object (most often `LV_EVENT_ALL` is used) |

## <center>Event handler example

```C 
/* protorypes functions */
static void event_button_released(lv_event *e);

/* Init event */
lv_obj_add_event_cb(objects.your_button, event_button_released, LV_EVENT_ALL, NULL);
    
/*******************************************************************************
* Function Name  : event_button_released
* Description    : ...
*******************************************************************************/
static void event_button_released(lv_event_t *e) {

    /* get event type */
    lv_event_code_t event_code = lv_event_get_code(e);

    /* get object target */
    lv_obj_t * target = lv_event_get_target(e);
    
    if (event_code == LV_EVENT_RELEASED) {
        audio_PlayBeep(_888Hz, 50, minus_30dB);
    }

    /* you can handle any LV_EVENT_TYPE */
}
``` 