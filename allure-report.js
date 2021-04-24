const { JasmineAllureReporter } = require('allure-jasmine');
const {AllureRuntime, Status, TestResult} = require("allure-js-commons");

const reporter = new JasmineAllureReporter(new AllureRuntime({
  resultsDir: "./allure-results"
}));
jasmine.getEnv().addReporter(reporter);