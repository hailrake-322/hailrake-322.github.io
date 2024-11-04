# APP API Documentation

---
## Contents
- [Data Structures](#data-structures)
  - [FRAM Message Structure](#fram-message-structure)
- [FRAM Block](#fram-block)
- [Time Block](#time-block)
- [Audio Block](#audio-block)
- [PWM Block](#pwm-block)
- [RTOS Block](#rtos-block)
---

## Data Structures

### FRAM Message Structure

The `fram_message` structure defines the parameters for FRAM data transfer operations.

- **Fields**:
  - `address`: Target memory address in FRAM.
  - `data`: Pointer to the data buffer for read or write operations.
  - `data_len`: Length of data in bytes.
  - `status`: Status of the operation.
  - `callback`: Function pointer to a callback invoked upon completion.

---

## FRAM Block

The FRAM block provides functions for interacting with non-volatile FRAM memory, including writing data, reading data, and waiting for FRAM to initialize.

### `app_fram_write`
Adds a `fram_message` to the write queue for FRAM memory.

- **Parameters**:
  - `fram_message message`: A structure containing FRAM data transfer details.
  - `void *callback`: Pointer to the callback function to be invoked after the write completes.
- **Returns**: 
  - `int`: The current count of messages in the write queue.

### `app_fram_read`
Reads a block of data from a specified address in FRAM memory.

- **Parameters**:
  - `uint32_t address`: The memory address in FRAM from which data will be read.
  - `uint8_t *rxBuff`: A pointer to the buffer where the read data will be stored.
  - `uint8_t rxBuffSize`: The size of the buffer, determining the number of bytes to read.
- **Returns**:
  - `status_t`: The status of the read operation. `0` indicates success, while a non-zero value indicates an error.

### `app_fram_wait_init`
Waits for the FRAM module to start before proceeding.

- **Parameters**: None.
- **Returns**: None.

---

## Time Block

The Time Block provides functions for managing and setting the system’s date and time, with options to set values manually or sync with a GPS module.

### `app_rtc_set_timedate_from_gps`
Sets the system date and time based on GPS module data.

- **Parameters**: None.
- **Returns**: None.

### `app_rtc_set_timedate`
Sets both the system date and time.

- **Parameters**:
  - `int month`: The month (1–12).
  - `int day`: The day of the month (1-31).
  - `int year`: The full year.
  - `int hour`: The hour (0–23).
  - `int minute`: The minute (0-59).
  - `int second`: The second (0-59).
- **Returns**: None.

### `app_rtc_set_time`
Sets the system time only, without modifying the date.

- **Parameters**:
  - `int hour`: The hour (0–23).
  - `int minute`: The minute (0-59).
  - `int second`: The second (0-59).
- **Returns**: None.

### `app_rtc_set_date`
Sets the system date only, without changing the time.

- **Parameters**:
  - `int month`: The month (1–12).
  - `int day`: The day of the month (1-31).
  - `int year`: The full year.
- **Returns**: None.

---

## Audio Block

The Audio Block provides functions for audio control, such as playing beeps and setting volume.

### `app_audio_play_beep`
Plays a beep sound.

- **Parameters**:
  - `uint8_t hz`: The frequency of the beep in Hertz.
  - `int ms`: The duration of the beep in milliseconds.
  - `int8_t db`: The volume level of the beep in decibels.
- **Returns**: None.

### `app_audio_set_volume`
Sets the audio output volume.

- **Parameters**:
  - `uint8_t volume`: The volume level (0 to 100 percent).
- **Returns**: None.

---

## PWM Block

The PWM Block provides functions for managing display brightness using PWM signals.

### `app_pwm_set_value`
Sets the brightness value using a PWM signal.

- **Parameters**:
  - `int value`: The PWM value to control brightness.
- **Returns**: None.

### `app_enable_display`
Enables or disables the display with a gradual brightness change.

- **Parameters**:
  - `bool enable`: If `true`, enables the display by increasing brightness to a defined value. If `false`, disables it by gradually reducing brightness.
- **Returns**: None.
- **Description**: This function smoothly transitions the brightness level using predefined values (`PWM_DISPLAY_ENABLE_VALUE` and `PWM_DISPLAY_DISABLE_VALUE`) to avoid abrupt changes in display brightness.

---

## RTOS Block

The RTOS Block provides functions for managing tasks and timers within a real-time operating system (FreeRTOS).

### Handlers

#### `app_resume_handler`
Resumes the specified timer.

- **Parameters**:
  - `Object_Handle_t handler`: The timer handle to resume.
- **Returns**: None.

#### `app_pause_handler`
Pauses the specified timer.

- **Parameters**:
  - `Object_Handle_t handler`: The timer handle to pause.
- **Returns**: None.

#### `app_create_handler`
Creates a timer with specified parameters and starts it.

- **Parameters**:
  - `Object_Handle_t handler`: The timer handle.
  - `void *handler_callback`: The callback function to be called when the timer elapses.
  - `int handler_period`: The period of the timer in ticks.
  - `const char *handler_name`: The name of the timer.
- **Returns**: None.

### Tasks

#### `app_resume_task`
Resumes the specified task.

- **Parameters**:
  - `TaskHandle_t task`: The task handle to resume.
- **Returns**: None.

#### `app_delete_task`
Deletes the specified task.

- **Parameters**:
  - `TaskHandle_t task`: The task handle to delete.
- **Returns**: None.

#### `app_pause_task`
Pauses the specified task.

- **Parameters**:
  - `TaskHandle_t task`: The task handle to pause.
- **Returns**: None.

#### `app_create_task`
Creates a task with specified parameters.

- **Parameters**:
  - `TaskHandle_t task`: The task handle.
  - `void *task_function`: Pointer to the task function.
  - `const char *task_name`: The name of the task.
  - `uint16_t stacksize`: The stack size allocated for the task.
- **Returns**: 
  - `int`: The total count of tasks created.
