## OTHER API

## PWM

#### `UI_Manage_Display_Power`

This function manages the display's power state by smoothly adjusting the display brightness through PWM (Pulse Width Modulation).

- **Arguments**:
  - `enable` (Screen_Preset*): A bool to determine whether the display should be enabled (`true`) or disabled (`false`).
- **Functionality**:
  - If enable is true, the display brightness is gradually increased by incrementing val_enable until it reaches PWM_DISPLAY_ENABLE_VALUE.
  - If enable is false, the brightness is decreased by decrementing val_disable until it reaches PWM_DISPLAY_DISABLE_VALUE.
  - A delay of 6 ticks (vTaskDelay(6)) is applied between each brightness adjustment to smooth the transition.

#### `pwm_set_value`

- **Arguments**:
  - `value` The target PWM value to set the brightness
- **Functionality**:
  - If the current brightness (`brightness_global_value`) is less than `value`, it is incremented until it matches `value`.
  - If it is greater than `value`, it is decremented until it matches.
  - The final brightness is clamped between PWM_MIN_VALUE and PWM_MAX_VALUE to avoid exceeding allowed limits.

## RTC_SetTimeDate_GPS

This function sets the system time and date using data from the GPS module.

## AUDIO

### audio_SetVolume

**Description**:  
Sets the volume using the `AUDIO_BeepVolume` enum. This function adjusts the audio volume by communicating with the audio driver over I2C.

**Parameters**:  
- Volume: An 8-bit value that represents the volume level to be set. The value corresponds to a level in the `AUDIO_BeepVolume` enum, ranging from +6dB to -56dB.

**Return**:  
None.

---

### audio_PlayBeep

**Description**:  
Plays a beep sound at a specified frequency and duration.

**Parameters**:  
- val_hz: The frequency of the beep in Hz.
- val_ms: Duration of the beep in milliseconds. If `val_ms > 0`, it sets a delayed stop for the beep. If `val_ms == 0`, it plays immediately, and negative values terminate the beep.
- val_db: Volume level for the beep, corresponding to one of the values from the `AUDIO_BeepVolume` enum.

**Return**:  
None.