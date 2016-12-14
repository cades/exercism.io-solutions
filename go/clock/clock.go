package clock

import "fmt"

const testVersion = 4

type Clock struct {
	hour   int
	minute int
}

func New(hour, minute int) Clock {
	if minute >= 60 {
		hour += minute / 60
		minute = minute % 60
	}
	if hour >= 24 {
		hour = hour % 24
	}
	for minute < 0 {
		hour -= 1
		minute = minute + 60
	}
	for hour < 0 {
		hour = hour + 24
	}
	return Clock{hour: hour, minute: minute}
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hour, c.minute)
}

func (c Clock) Add(minutes int) Clock {
	return New(c.hour, c.minute+minutes)
}
