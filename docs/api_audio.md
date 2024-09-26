## UI API

## UI

#### `ui_preset_screen_create(preset, screen_background, screen_ico)`

Creates a new preset with screens.

- **Arguments**:
  - `preset` (Screen_Preset*): Pointer to the preset structure.
  - `screen_background` (lv_obj_t*): Pointer to the screen background object.
  - `screen_ico` (lv_obj_t*): Pointer to the screen icon object.

#### `ui_preset_screen_load(preset, update_bg, update_ico)`

Loads a new preset with screens.

- **Arguments**:
  - `preset` (Screen_Preset*): Pointer to the preset structure.
  - `update_bg` (bool): Flag to update the background.
  - `update_ico` (bool): Flag to update the icon.

#### `ui_preset_screen_delete(preset)`

Deletes the preset.

- **Arguments**:
  - `preset` (Screen_Preset*): Pointer to the preset structure.

#### `ui_arc_set_value(target, old_val, val)`

Sets the value for the arc.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the arc object.
  - `old_val` (int): Old value.
  - `val` (int): New value.

#### `ui_slider_increment(target, val, anm)`

Increments the value of the slider.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the slider object.
  - `val` (int): Value to increment.
  - `anm` (int): Animation flag.

#### `ui_bar_set_text_value(trg, src, prefix, postfix)`

Sets the text for the bar.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `src` (lv_obj_t*): Pointer to the source bar object.
  - `prefix` (const char*): Prefix of the text.
  - `postfix` (const char*): Postfix of the text.

#### `ui_set_text_from_value_slider(trg, src, prefix, postfix)`

Sets the text from the slider value.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `src` (lv_obj_t*): Pointer to the source slider object.
  - `prefix` (const char*): Prefix of the text.
  - `postfix` (const char*): Postfix of the text.

#### `ui_set_text_from_with_division_value_arc(trg, src, prefix, postfix, division)`

Sets the text from the arc value with division.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `src` (lv_obj_t*): Pointer to the source arc object.
  - `prefix` (const char*): Prefix of the text.
  - `postfix` (const char*): Postfix of the text.
  - `division` (uint8_t): Division factor.

#### `ui_set_text_from_value_arc(trg, src, prefix, postfix)`

Sets the text from the arc value.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `src` (lv_obj_t*): Pointer to the source arc object.
  - `prefix` (const char*): Prefix of the text.
  - `postfix` (const char*): Postfix of the text.

#### `ui_set_value_text_from_variable(trg, value)`

Sets the text from a variable.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `value` (int): Value to set.

#### `ui_bar_set_property(target, id, val)`

Sets the bar value.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the target object.
  - `id` (int): Property ID.
  - `val` (int): Value to set.

#### `ui_basic_set_property(target, id, val)`

Sets basic properties (position, width, height).

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the target object.
  - `id` (int): Property ID.
  - `val` (int): Value to set.

#### `ui_dropdown_set_property(target, id, val)`

Sets the selected item in a dropdown.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the dropdown object.
  - `id` (int): Property ID.
  - `val` (int): Value to set.

#### `ui_image_set_property(target, id, val)`

Sets the image source.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the image object.
  - `id` (int): Property ID.
  - `val` (uint8_t*): Image source.

#### `ui_text_set_property(target, id, val)`

Sets the text of a label.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the label object.
  - `id` (int): Property ID.
  - `val` (const char*): Text value.

#### `ui_roller_set_property(target, id, val)`

Sets the selected item in a roller.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the roller object.
  - `id` (int): Property ID.
  - `val` (int): Value to set.

#### `ui_slider_set_property(target, id, val)`

Sets the value of a slider.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the slider object.
  - `id` (int): Property ID.
  - `val` (int): Value to set.

#### `ui_keyboard_set_target(keyboard, textarea)`

Sets the target for a keyboard.

- **Arguments**:
  - `keyboard` (lv_obj_t*): Pointer to the keyboard object.
  - `textarea` (lv_obj_t*): Pointer to the textarea object.

#### `ui_flag_modify(target, flag, value)`

Modifies flags of an object.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the target object.
  - `flag` (int32_t): Flag to modify.
  - `value` (int): Modification type (toggle, add, clear).

#### `ui_state_modify(target, state, value)`

Modifies states of an object.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the target object.
  - `state` (int32_t): State to modify.
  - `value` (int): Modification type (toggle, add, clear).

#### `scr_unloaded_delete_cb(e)`

Callback for deleting unloaded screens.

- **Arguments**:
  - `e` (lv_event_t*): Pointer to the event.

#### `ui_opacity_set(target, val)`

Sets the opacity (alpha) of an object.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the target object.
  - `val` (int): Opacity value.

#### `ui_anim_callback_free_user_data(a)`

Frees user data from an animation.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_set_x(a, v)`

Sets the X position in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): X position value.

#### `ui_anim_callback_set_y(a, v)`

Sets the Y position in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): Y position value.

#### `ui_anim_callback_set_width(a, v)`

Sets the width in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): Width value.

#### `ui_anim_callback_set_height(a, v)`

Sets the height in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): Height value.

#### `ui_anim_callback_set_opacity(a, v)`

Sets the opacity in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): Opacity value.

#### `ui_anim_callback_set_image_zoom(a, v)`

Sets the image zoom in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): Zoom value.

#### `ui_anim_callback_set_image_angle(a, v)`

Sets the image angle in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): Angle value.

#### `ui_anim_callback_set_image_frame(a, v)`

Sets the image frame in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.
  - `v` (int32_t): Frame value.

#### `ui_anim_callback_get_x(a)`

Gets the X position in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_get_y(a)`

Gets the Y position in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_get_width(a)`

Gets the width in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_get_height(a)`

Gets the height in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_get_opacity(a)`

Gets the opacity in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_get_image_zoom(a)`

Gets the image zoom in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_get_image_angle(a)`

Gets the image angle in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_anim_callback_get_image_frame(a)`

Gets the image frame in an animation callback.

- **Arguments**:
  - `a` (lv_anim_t*): Pointer to the animation.

#### `ui_checked_set_text_value(trg, src, txt_on, txt_off)`

Sets the text value based on the checked state.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `src` (lv_obj_t*): Pointer to the source object.
  - `txt_on` (const char*): Text when checked.
  - `txt_off` (const char*): Text when not checked.

#### `ui_spinbox_step(target, val)`

Increments or decrements the spinbox value.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the spinbox object.
  - `val` (int): Value to step.

## UI Camera API

#### `ui_camera_enable(enable)`

Enables or disables the camera.

- **Arguments**:
  - `enable` (bool): True to enable, false to disable.

#### `ui_camera_select(camera)`

Selects the camera.

- **Arguments**:
  - `camera` (uint8_t): Camera ID.

## UI Time API

#### `ui_set_time_text_from_rtc(trg, prefix, postfix, tick)`

Sets the time text from the RTC module.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `prefix` (const char*): Prefix of the text.
  - `postfix` (const char*): Postfix of the text.
  - `tick` (bool): Flag to use tick format.

#### `ui_set_date_text_from_rtc(trg, prefix, postfix)`

Sets the date text from the RTC module.

- **Arguments**:
  - `trg` (lv_obj_t*): Pointer to the target object.
  - `prefix` (const char*): Prefix of the text.
  - `postfix` (const char*): Postfix of the text.

## UI GPS API

#### `ui_get_speed_gps()`

Returns the speed from the GPS.

#### `ui_set_arc_value_from_speed_gps(target)`

Sets the arc value based on the GPS speed.

- **Arguments**:
  - `target` (lv_obj_t*): Pointer to the target object.
