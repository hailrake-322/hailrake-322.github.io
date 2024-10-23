# UI API Documentation

## Table of Contents
1. [UI API](#ui-api)
2. [UI Animation API](#ui-animation-api)
3. [UI Camera API](#ui-camera-api)
4. [UI Time API](#ui-time-api)
5. [UI GPS API](#ui-gps-api)

## UI API

### `ui_preset_screen_create`
Creates a new preset with screens.

- **Parameters:**
  - `Screen_Preset* preset` — Pointer to the preset structure.
  - `lv_obj_t* screen_background` — Pointer to the background screen object.
  - `lv_obj_t* screen_ico` — Pointer to the icon screen object.

- **Return value:** None.

### `ui_preset_screen_load`
Loads a preset with options to update the background and icon.

- **Parameters:**
  - `Screen_Preset* preset` — Pointer to the preset to load.
  - `bool update_bg` — Flag indicating whether to update the background.
  - `bool update_ico` — Flag indicating whether to update the icon.

- **Return value:** None.

### `ui_preset_get_active`
Returns the last loaded preset.

- **Parameters:** None.
- **Return value:** `Screen_Preset` — The last loaded preset.

### `ui_preset_screen_delete`
Deletes a preset by setting its screen objects to `NULL`.

- **Parameters:**
  - `Screen_Preset* preset` — Pointer to the preset to delete.

- **Return value:** None.

### `ui_arc_set_value`
Sets the value of an arc object.

- **Parameters:**
  - `lv_obj_t* target` — The arc object.
  - `int old_val` — The previous value of the arc.
  - `int val` — The new value to set.

- **Return value:** `int` — Always returns 0.

### `ui_slider_increment`
Increments the value of a slider.

- **Parameters:**
  - `lv_obj_t* target` — The slider object.
  - `int val` — The increment value.
  - `int anm` — Animation flag (1 for animated, 0 for static).

- **Return value:** None.

### `ui_set_text_from_bar_value`
Sets text based on a bar's value.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object.
  - `lv_obj_t* src` — The bar object.
  - `const char* prefix` — Prefix text for the label.
  - `const char* postfix` — Postfix text for the label.

- **Return value:** None.

### `ui_set_text_from_value_slider`
Sets text based on a slider's value.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object.
  - `lv_obj_t* src` — The slider object.
  - `const char* prefix` — Prefix text for the label.
  - `const char* postfix` — Postfix text for the label.

- **Return value:** None.

### `ui_set_text_from_value_arc`
Sets text based on an arc's value.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object.
  - `lv_obj_t* src` — The arc object.
  - `const char* prefix` — Prefix text for the label.
  - `const char* postfix` — Postfix text for the label.

- **Return value:** None.

### `ui_set_text_from_with_division_value_arc`
Sets text based on an arc's value divided by a specified factor.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object.
  - `lv_obj_t* src` — The arc object.
  - `const char* prefix` — Prefix text for the label.
  - `const char* postfix` — Postfix text for the label.
  - `uint8_t division` — The factor by which to divide the arc's value.

- **Return value:** None.

### `ui_set_value_text_from_variable`
Sets text based on a given integer value.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object.
  - `int value` — The integer value to set.

- **Return value:** None.

### `ui_bar_set_property`
Sets properties for a bar object.

- **Parameters:**
  - `lv_obj_t* target` — The bar object.
  - `int id` — Property identifier (`UI_BAR_PROPERTY_VALUE_WITH_ANIM` or `UI_BAR_PROPERTY_VALUE`).
  - `int val` — The value to set.

- **Return value:** None.

### `ui_basic_set_property_pos`
Sets the position or size properties of a basic UI element.

- **Parameters:**
  - `lv_obj_t* target` — The target UI element.
  - `int id` — Property identifier (`UI_BASIC_PROPERTY_POSITION_X`, `UI_BASIC_PROPERTY_POSITION_Y`, `UI_BASIC_PROPERTY_WIDTH`, `UI_BASIC_PROPERTY_HEIGHT`).
  - `int val` — The value to set.

- **Return value:** None.

### `ui_dropdown_set_property`
Sets a property for a dropdown object.

- **Parameters:**
  - `lv_obj_t* target` — The dropdown object.
  - `int id` — Property identifier (`UI_DROPDOWN_PROPERTY_SELECTED`).
  - `int val` — The value to set.

- **Return value:** None.

### `ui_image_set_property`
Sets a property for an image object.

- **Parameters:**
  - `lv_obj_t* target` — The image object.
  - `int id` — Property identifier (`UI_IMAGE_PROPERTY_IMAGE`).
  - `uint8_t* val` — Pointer to the image source.

- **Return value:** None.

### `ui_text_set_property`
Sets a property for a text label.

- **Parameters:**
  - `lv_obj_t* target` — The text label object.
  - `int id` — Property identifier (`UI_LABEL_PROPERTY_TEXT`).
  - `const char* val` — The text string to set.

- **Return value:** None.

### `ui_roller_set_property`
Sets a property for a roller object.

- **Parameters:**
  - `lv_obj_t* target` — The roller object.
  - `int id` — Property identifier (`UI_ROLLER_PROPERTY_SELECTED_WITH_ANIM`, `UI_ROLLER_PROPERTY_SELECTED`).
  - `int val` — The value to set.

- **Return value:** None.

### `ui_slider_set_property`
Sets a property for a slider object.

- **Parameters:**
  - `lv_obj_t* target` — The slider object.
  - `int id` — Property identifier (`UI_SLIDER_PROPERTY_VALUE_WITH_ANIM`, `UI_SLIDER_PROPERTY_VALUE`).
  - `int val` — The value to set.

- **Return value:** None.

### `ui_keyboard_set_target`
Sets the target textarea for a keyboard object.

- **Parameters:**
  - `lv_obj_t* keyboard` — The keyboard object.
  - `lv_obj_t* textarea` — The textarea object to link.

- **Return value:** None.

### `ui_flag_modify`
Modifies a flag for a UI object.

- **Parameters:**
  - `lv_obj_t* target` — The target UI object.
  - `int32_t flag` — The flag to modify.
  - `int value` — Action type (`UI_MODIFY_FLAG_TOGGLE`, `UI_MODIFY_FLAG_ADD`, `UI_MODIFY_FLAG_REMOVE`).

- **Return value:** None.

### `ui_state_modify`
Modifies a state for a UI object.

- **Parameters:**
  - `lv_obj_t* target` — The target UI object.
  - `int32_t state` — The state to modify.
  - `int value` — Action type (`UI_MODIFY_STATE_TOGGLE`, `UI_MODIFY_STATE_ADD`, `UI_MODIFY_STATE_REMOVE`).

- **Return value:** None.

### `ui_opacity_set`
Sets the opacity of a UI object.

- **Parameters:**
  - `lv_obj_t* target` — The target UI object.
  - `int val` — The opacity value (0-255).

- **Return value:** None.

### `ui_checked_set_text_value`
Sets the text value of a label based on the checked state of another object.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object.
  - `lv_obj_t* src` — The source object with a checked state.
  - `const char* txt_on` — Text to display when checked.
  - `const char* txt_off` — Text to display when unchecked.

- **Return value:** None.

### `ui_spinbox_step`
Increments or decrements the value of a spinbox.

- **Parameters:**
  - `lv_obj_t* target` — The spinbox object.
  - `int val` — The increment value (positive for increment, negative for decrement).

- **Return value:** None.
- **Return value:** None.

## UI Animation API

### `ui_anim_callback_set_x`
Sets the X position of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The new X position.

- **Return value:** None.

### `ui_anim_callback_set_y`
Sets the Y position of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The new Y position.

- **Return value:** None.

### `ui_anim_callback_set_width`
Sets the width of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The new width.

- **Return value:** None.

### `ui_anim_callback_set_height`
Sets the height of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The new height.

- **Return value:** None.

### `ui_anim_callback_set_opacity`
Sets the opacity of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The new opacity (0-255).

- **Return value:** None.

### `ui_anim_callback_set_image_zoom`
Sets the zoom level for an image during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The new zoom value.

- **Return value:** None.

### `ui_anim_callback_set_image_angle`
Sets the angle of an image during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The new angle in degrees.

- **Return value:** None.

### `ui_anim_callback_set_image_frame`
Sets the image frame during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.
  - `int32_t v` — The frame index.

- **Return value:** None.

### `ui_anim_callback_get_x`
Gets the current X position of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current X position.

### `ui_anim_callback_get_y`
Gets the current Y position of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current Y position.

### `ui_anim_callback_get_width`
Gets the current width of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current width.

### `ui_anim_callback_get_height`
Gets the current height of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current height.

### `ui_anim_callback_get_opacity`
Gets the current opacity of an object during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current opacity.

### `ui_anim_callback_get_image_zoom`
Gets the current zoom level of an image during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current zoom value.

### `ui_anim_callback_get_image_angle`
Gets the current angle of an image during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current angle in degrees.

### `ui_anim_callback_get_image_frame`
Gets the current frame of an image during an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** `int32_t` — The current frame index.

### `ui_anim_callback_free_user_data`
Frees the user data associated with an animation.

- **Parameters:**
  - `lv_anim_t* a` — The animation structure.

- **Return value:** None.

## UI Camera API

### `ui_camera_enable`
Enables or disables the camera.

- **Parameters:**
  - `bool enable` — If `true`, enables the camera. If `false`, disables the camera.

- **Return value:** None.

### `ui_camera_select`
Selects the active camera.

- **Parameters:**
  - `uint8_t camera` — The camera index to select.

- **Return value:** None.

## UI Time API

### `ui_set_time_text_from_rtc`
Sets the time text based on the RTC module.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object where the time will be displayed.
  - `const char* prefix` — The prefix text to be displayed before the time.
  - `const char* postfix` — The postfix text to be displayed after the time.
  - `bool tick` — If `true`, include seconds in the display; otherwise, display hours and minutes only.

- **Return value:** None.

### `ui_set_date_text_from_rtc`
Sets the date text based on the RTC module.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object where the date will be displayed.
  - `const char* prefix` — The prefix text to be displayed before the date.
  - `const char* postfix` — The postfix text to be displayed after the date.

- **Return value:** None.

### `ui_set_timedate_text_from_rtc`
Sets both the time and date text based on the RTC module.

- **Parameters:**
  - `lv_obj_t* trg` — The target label object where the time and date will be displayed.
  - `const char* prefix` — The prefix text to be displayed before the time and date.
  - `const char* postfix` — The postfix text to be displayed after the time and date.

- **Return value:** None.

## UI GPS API

### `ui_get_speed_gps`
Retrieves the current speed from the GPS module.

- **Parameters:** None.
- **Return value:** `int` — The current speed reported by the GPS.

### `ui_set_arc_value_from_speed_gps`
Sets the value of an arc object based on the current GPS speed.

- **Parameters:**
  - `lv_obj_t* target` — The arc object where the speed value will be set.

- **Return value:** None.

---
 