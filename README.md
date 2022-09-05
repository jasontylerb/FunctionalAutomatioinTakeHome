# Cypress Functional Automation

_The functional automation framework to covers a 'smoke-like' validaton, running through the parent pages of drata.com._

## QA Notes and Overview

- The functional automation framework covers basic UI validation while verifying that no errors or warnings are reported to the browser's console. After testing each page, the framework distributes a test report via Mochawesome which can be found in the './cypress/reports' diretory.

## Setup & Run

```sh

# Install dependencies
npm install
# Run UI Framework Headless
npm test
# Run UI Framework to debug and review testing steps
npm run debug
```

## TODO

- The UI Framework covers the verification of elements unique to each page under the Navigation's 'Company' category. Further development to be done for such individual elements for pages falling under, 'Products' and 'Resources'.