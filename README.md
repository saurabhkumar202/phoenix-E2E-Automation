# phoneix E2E Test Automation

This is a protractor test automation framework which is being built for automating end to end flows for PTC University platform.

## Getting Started

Clone this repository on your local machine using below git command

```
git clone ssh://git@gitlab-ssh.ptcusys.com:10022/ptcusys/phoenix-E2E-automation.git
```

### Prerequisites

* Node.js should be installed

### Installing

* Run the below command which will add all the project dependencies( protractor, serenity custom framework, Typescript and others). 
```
npm install
npm run webdriver:update
```

* Create Node.js run configuration in WebStorm for running test suites.

```
Node Parameters: <protractor module path>\built\cli.js
Application Parameters: <working directory>\conf.js <--suite=smoke>
```

### Run Gulp task to transpile from *.ts files to *.js
* Run gulp build task (this will transpile *.ts files to *.js)
```
gulp build
```

### Run tests
* Run protractor tests using following command

```
gulp test
```
* Generate report using following commands

```
npm run reportGen
npm run postReportGen
```
### Maven commands to run tests and generate report

```
mvn clean install
mvn site
```

* Test serenity report folder(i.e. test_reports) will be created under <root folder>
* Open the index.html located in <root folder>\test_reports

### Browser support
|Browser Version|Support|
|---------------|-------|
|Chrome|[x]|



### Built With
Protractor, TypeScript, serenity, cucumber, gulp
