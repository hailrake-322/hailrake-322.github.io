# <center> Screen Presets

### Presets are variable structures with 2 LVGL screens, this is necessary to ensure the best performance of the panel, for convenience it is recommended to name the screens in `eez studio` as follows:
<center>`Preset_Example_Screen_Ico`<br></center>
<center>`Preset_Example_Screen_Background `</center>

### Presets are initialized in the function `ui_init` (app_ui.c) and the loading screen is selected in it, this function needs to be written from `eez studio`

## <center>Example of filling `ui_init`

```C
/* Variables */
Screen_Preset preset_example; 

/*******************************************************************************
* Function Name  : ui_init
* Description    : Initializes ... (Priviliged Mode)
* Input          : -
* Output         : -
* Return         : -
*******************************************************************************/
void ui_init() {

	/*  create all screens & objects   */
	create_screens();
	    
	/*  create events   */
	ui_init_events();
	
	/* creating presets */
	ui_preset_screen_create(&preset_example, objects.preset_example_screen_background, objects.preset_example_screen_ico);
	
    /* starting screen */
    ui_preset_screen_load(&preset_example, true, true);
    
}
```

###### <center> It is important that you cannot change/add anything in this function that is not related to presets


###  It is also necessary to call the screen creation functions in the correct order, this is done at the very bottom of the `app_screens.c` module, the `create_screens` function, this is done in the eez studio code editor (as everything that eez generates)
## <center>Example of filling `create_screens`

```C
/*******************************************************************************
* Function Name  : create_screens
* Description    : init all screens
* Input          : -
* Output         : -
* Return         : -
*******************************************************************************/
void create_screens(void) {
	
	/* init backgrounds */
	lv_disp_set_default(disp_background);
    create_screen_preset_example_screen_background();
	
	/* init ico */
	lv_disp_set_default(disp_ico);
    create_screen_preset_example_screen_ico();

}
```