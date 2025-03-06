// Handler Interface
class Logger {
  constructor(next = null) {
    this.next = next;
  }

  log(message) {
    if (this.next) {
      this.next.log(message);
    }
  }
}

// Concrete Handler 1 - Debug Logger
class DebugLogger extends Logger {
  log(message) {
    if (message.level === "debug") {
      console.log(`DEBUG: ${message.text}`);
    } else if (this.next) {
      this.next.log(message);
    }
  }
}

// Concrete Handler 2 - Info Logger
class InfoLogger extends Logger {
  log(message) {
    if (message.level === "info") {
      console.log(`INFO: ${message.text}`);
    } else if (this.next) {
      this.next.log(message);
    }
  }
}

// Concrete Handler 3 - Error Logger
class ErrorLogger extends Logger {
  log(message) {
    if (message.level === "error") {
      console.log(`ERROR: ${message.text}`);
    } else if (this.next) {
      this.next.log(message);
    }
  }
}

// Client code
const errorLogger = new ErrorLogger();
const infoLogger = new InfoLogger(errorLogger);
const debugLogger = new DebugLogger(infoLogger);

// Sending messages with different levels
debugLogger.log({ level: "debug", text: "This is a debug message" });
debugLogger.log({ level: "info", text: "This is an info message" });
debugLogger.log({ level: "error", text: "This is an error message" });
