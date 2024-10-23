# Events

### To work with events, go to the `app_events.c` module.
### It has the `ui_init_events` function, it defines/initializes all events for objects on the display (LVGL objects)

## Event initialize example 
#### <center>`lv_obj_add_event_cb(youre_object, event_handler_youre_object, LV_EVENT_TYPE, NULL);`

| Parameter | Discription |
| ----------- | ----------- |
| `youre_object` | any lvgl object from your project |
| `event_handler_youre_object` | a void type function that accepts an event type |
| `LV_EVENT_TYPE` | event receiving by the object (most often `LV_EVENT_ALL` is used) |
| `NULL` | user data in lvgl (permanently = NULL) |

* in case you need to initialize one event handler for multiple objects, it is recommended to create an array in which you need to write all the objects and add the event in a for loop
```C 

/* Private define ------------------------------------------------------------*/
#define LIST_OBJ_NUM 10 // number of array objects

/* Private variables ---------------------------------------------------------*/

lv_obj_t *list_ico[LIST_OBJ_NUM]; // objects array
/* protorypes functions */
static void event_obj_enable(lv_event *e);

/*******************************************************************************
* Function Name  : ui_init_list_ico
* Description    : ...
*******************************************************************************/
static void ui_init_list_ico(void) {

	list_ico[0] = objects.obj1;
	list_ico[1] = objects.obj2;
	list_ico[2] = objects.obj3;
	list_ico[3] = objects.obj4;
	list_ico[4] = objects.obj5;
	list_ico[5] = objects.obj6;
	list_ico[6] = objects.obj7;
	list_ico[7] = objects.obj8;
	list_ico[8] = objects.obj9;
	list_ico[9] = objects.obj10;
}

/*******************************************************************************
* Function Name  : ui_init_events
* Description    : init all events & anims
*******************************************************************************/
int ui_init_events(void) {

    /* init list ... */	
	ui_init_list_ico();
	


	/* events for all buttons for freq */
	for (int obj_num = 0; obj_num < LIST_OBJ_NUM; obj_num++) {
		lv_obj_add_event_cb(list_freq[obj_num], event_obj_enable, LV_EVENT_RELEASED, NULL);
	}
	return 0;

/*******************************************************************************
* Function Name  : event_button_released
* Description    : ...
*******************************************************************************/
static void event_obj_enable(lv_event_t *e) {

    /* get event type */
    lv_event_code_t event_code = lv_event_get_code(e);

    /* get object target */
    lv_obj_t * target = lv_event_get_target(e);
    
           /* check event code */
    if (event_code == LV_EVENT_RELEASED) {
        if (target == objects.obj1) // object from array
            ui_state_modify(target, LV_STATE_CHECKED, UI_MODIFY_STATE_ADD); // for example add checked state
        else if (target == objects.obj2) 
            /* logic */

        /* etc */
    }
}

}
```

## Event handler example

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
}
``` 
