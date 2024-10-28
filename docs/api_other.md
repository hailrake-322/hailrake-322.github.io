# Other API Documentation

## Table of Contents
1. [FRAM Block](#fram-block)
2. [Time Block](#time-block)
3. [Audio Block](#audio-block)
4. [PWM Block](#pwm-block)

---

## FRAM Block

### `app_fram_write`
Writes a block of data to FRAM memory.

- **Description:**  
  Writes a block of data from the specified buffer to the given address in the FRAM memory.

- **Parameters:**
  - `uint32_t Address` — The starting address in the FRAM memory where the data should be written.
  - `uint8_t *txBuff` — A pointer to the buffer containing the data to be written.
  - `uint8_t txBuffSize` — The size of the buffer (number of bytes to write).

- **Return value:**  
  - `int` — Returns a status code indicating the success or failure of the write operation.

### `app_fram_read`
Reads a block of data from FRAM memory.

- **Description:**  
  Reads a block of data from the specified address in the FRAM memory into the provided buffer.

- **Parameters:**
  - `uint32_t Address` — The starting address in the FRAM memory from where the data should be read.
  - `uint8_t *rxBuff` — A pointer to the buffer where the read data will be stored.
  - `uint8_t rxBuffSize` — The size of the buffer (number of bytes to read).

- **Return value:**  
  - `int` — Returns a status code indicating the success or failure of the read operation.

---

## Time Block

### `app_rtc_set_timedate_from_gps`
Sets the system time based on data from the GPS module.

- **Description:**  
  Updates the system's real-time clock (RTC) using the time and date provided by the GPS module.

- **Parameters:** None.

- **Return value:** None.

---

## Audio Block

### `app_audio_play_beep`
Plays a beep sound.

- **Description:**  
  Generates a beep sound with the specified frequency, duration, and volume.

- **Parameters:**
  - `uint8_t hz` — The frequency of the beep in Hertz.
  - `int ms` — The duration of the beep in milliseconds.
  - `int8_t db` — The volume level in decibels.

- **Return value:** None.

### `app_audio_set_volume`
Sets the audio volume.

- **Description:**  
  Adjusts the audio volume level. The value should be in the range of 0 to 100 percent.

- **Parameters:**
  - `uint8_t volume` — The volume level to set (0-100).

- **Return value:** None.

---

## PWM Block

### `app_pwm_set_value`
Sets the brightness level using PWM.

- **Description:**  
  Sets the brightness of a display or LED using a PWM signal. The brightness level is determined by the provided value.

- **Parameters:**
  - `int value` — The brightness level to set.

- **Return value:** None.

### `app_enable_display`
Enables or disables the display.

- **Description:**  
  Gradually increases or decreases the display brightness using PWM to enable or disable it.

- **Parameters:**
  - `bool enable` — If `true`, enables the display by gradually increasing the brightness. If `false`, disables the display by gradually decreasing the brightness.

- **Return value:** None.

---