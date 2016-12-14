package hello

const testVersion = 2

func HelloWorld(name string) string {
	var subject string
	if name == "" {
		subject = "World"
	} else {
		subject = name
	}
	return "Hello, " + subject + "!"
}
