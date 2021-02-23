"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
test("new logger with default options", () => {
    const logger = new logger_1.Logger({});
    expect(logger).toBeInstanceOf(logger_1.Logger);
    // @ts-ignore We can access options in the tests
    expect(logger.options).toEqual({
        output: "stderr",
        verbosity: "info",
        callback: undefined,
    });
});
test("new logger with custom options", () => {
    const cb = (msg) => {
        console.log(msg);
    };
    const logger = new logger_1.Logger({
        output: "stdout",
        verbosity: "debug",
        callback: cb,
    });
    // @ts-ignore We can access options in the tests
    expect(logger.options).toEqual({
        output: "stdout",
        verbosity: "debug",
        callback: cb,
    });
});
test("log message can be constructed via set methods", async (done) => {
    const mockMessage = {
        request: {
            method: "testMethod/Function",
            headers: { key: "value" },
            body: { query: "SELECT campaign.id FROM campaign" },
        },
        response: {
            headers: { key: "value" },
            body: { results: [1, 2, 3] },
            status: { code: 1 },
        },
        meta: {
            is_mutation: true,
            elapsed_ms: 500,
        },
    };
    const logger = new logger_1.Logger({
        output: "none",
        verbosity: "info",
        callback(message) {
            expect(message.request).toEqual(mockMessage.request);
            expect(message.response).toEqual(mockMessage.response);
            expect(message.meta.is_mutation).toEqual(true);
            expect(message.meta.elapsed_ms).toBeGreaterThanOrEqual(mockMessage.meta.elapsed_ms);
            done();
        },
    });
    // Request
    logger.setRequestMethod(mockMessage.request.method);
    logger.setRequestHeaders(mockMessage.request.headers);
    logger.setRequestBody(mockMessage.request.body);
    // Response
    logger.setResponseHeaders(mockMessage.response.headers);
    logger.setResponseBody(mockMessage.response.body);
    logger.setResponseStatus(mockMessage.response.status);
    // Meta
    logger.setRequestIsMutation();
    logger.setStartTs();
    await new Promise(resolve => {
        setTimeout(() => {
            logger.setEndTs();
            resolve();
        }, 500);
    });
    logger.log();
});
test("log message is reset after logging", () => {
    const logger = new logger_1.Logger({
        output: "none",
        callback(message) {
            expect(message.request.method).toEqual(undefined);
        },
    });
    logger.setRequestMethod("testMethod/Function");
    // @ts-ignore Accessing private method for test
    logger.resetLog();
    logger.log();
});
test("logger can construct message at different verbosity levels", () => {
    const logger = new logger_1.Logger({});
    // @ts-ignore Accessing private method for test
    const debugMsg = logger.getDebugMessage();
    // @ts-ignore Accessing private method for test
    const infoMsg = logger.getInfoMessage();
    // @ts-ignore Accessing private method for test
    const warningMsg = logger.getWarningMessage();
    expect(debugMsg.trim()).toEqual(JSON.stringify({
        request: undefined,
    }));
    expect(infoMsg.trim()).toEqual(JSON.stringify({ request: {}, response: {}, meta: { is_mutation: false } }));
    expect(warningMsg.trim()).toEqual(JSON.stringify({ response: undefined }));
});
test("logger can outpout to stdout", () => {
    const stdoutLogger = new logger_1.Logger({
        output: "stdout",
        verbosity: "debug",
    });
    // Intercept stdout
    // Based on https://medium.com/@gajus/capturing-stdout-stderr-in-node-js-using-domain-module-3c86f5b1536d
    let stdoutOutput = "";
    const originalStdoutWrite = process.stdout.write.bind(process.stdout);
    // @ts-ignore We don't care about these types
    process.stdout.write = (chunk, encoding, callback) => {
        if (typeof chunk === "string") {
            stdoutOutput += chunk;
        }
        return originalStdoutWrite(chunk, encoding, callback);
    };
    stdoutLogger.setRequestMethod("testMethod/Function");
    stdoutLogger.log();
    process.stdout.write = originalStdoutWrite;
    expect(stdoutOutput.trim()).toEqual(JSON.stringify({ method: "testMethod/Function" }));
});
test("logger can output to stderr", () => {
    const stdoutLogger = new logger_1.Logger({
        output: "stderr",
        verbosity: "debug",
    });
    // Intercept stderr
    let stderrOutput = "";
    const originalStderrWrite = process.stderr.write.bind(process.stderr);
    // @ts-ignore We don't care about these types
    process.stderr.write = (chunk, encoding, callback) => {
        if (typeof chunk === "string") {
            stderrOutput += chunk;
        }
        return originalStderrWrite(chunk, encoding, callback);
    };
    stdoutLogger.setRequestMethod("testMethod/Function");
    stdoutLogger.log();
    process.stderr.write = originalStderrWrite;
    expect(stderrOutput.trim()).toEqual(JSON.stringify({ method: "testMethod/Function" }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2xvZ2dlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQThDO0FBRTlDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7SUFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUN0QyxnREFBZ0Q7SUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDN0IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO0lBQzFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNoQixTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUMsQ0FBQztJQUNILGdEQUFnRDtJQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLEVBQUUsUUFBUTtRQUNoQixTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUMsRUFB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