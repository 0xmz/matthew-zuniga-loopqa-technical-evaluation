# Important Setup Instructions

1. Install required dependencies. `npm i`
2. Run the authentication suite via UI mode: `npx playwright test --ui`. Make sure all Projects are selected so that all test suites will run. <b><em>You will need to run the authentication tests at least once in order for the rest of the tests to run successfully.</b></em>
3. After authentication, you can run the tests in Headless mode: `npx playwright test`
