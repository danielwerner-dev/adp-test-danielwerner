# ADP Innovation Labs Pre-Interview Assignment

Hello, potential future coworker! :D
We're looking forward to having some great days working on creating new projects,
debugging issues, planning applications, solving problems, and all of the other fun things we
do here in Ventures Brazil Labs - together with you!
But before that, let's see if you can demonstrate some stock skills you'll need to be
successful in this position :)
If anything isn't specifically called out here, feel free to be as inventive as you like - no
pressure to adhere to any strict rules. Our primary goal is to know that you generally
understand web application principles.
Have fun!

Create a simple JavaScript (NodeJS) application that makes an HTTP GET request to
https://interview.adpeai.com/api/v1/get-task
and then, using the ID and properties returned, dynamically perform the calculation as
instructed.

Once you have your ID and your result, make an HTTP POST request to
https://interview.adpeai.com/api/v1/submit-task
with a JSON POST body including the properties id and result .

The submit-task endpoint will return as follows:
| STATUS CODE | DESCRIPTION |
| --- | --- |
| 200 | Success |
| 400 | Incorrect value in result; no ID specified; value is invalid |
| 404 | Value not found for specified ID |
| 503 | Error communicating with database |

Your code should be able to respond appropriately to these HTTP status codes (at your
discretion).
The same JavaScript application should serve a page working as a dashboard to show the
progress of the execution.

# Evaluation Criteria

- the candidate can use any JS libraries or frameworks, and use TypeScript if desired.
- a reviewer should be able to clone this repository (e.g. from Github, Bitbucket)
- a reviewer should be able to run npm install and get all required dependencies
- a reviewer should be able to run npm start to run the application
- a reviewer should be able to see that calls are successful on the dashboard
- the work should be free of CORs errors when running on http://localhost
-the dashboard page should be accessible until the application process is manually
terminated

# Bonus Criteria

- While the application is running, it gets and submits tasks continuously (without being a
DoS attack :))
- Code is commented on where appropriate
The project is linted with a common ESLint config (Airbnb, standard) and contains a lint
script in package.json
- unit tests / end-to-end tests are runnable via npm test command
- Report any bugs or issues you find (there shouldn't be any, but who knows ;))

# Bonus Question

- Explain how you would handle an alternative scenario where the application has a
high number of submitted task requests, and occasionally, on demanding situations.
the interview.adpeai.com API can respond with a 429 (Too Many requests).


My approach:

- I would implement a rate-limiting mechanism in the application to prevent overwhelming the API with too many requests. This can be done by keeping track of the number of requests made to the API within a certain time window and delaying or rejecting new requests if the limit is exceeded. We can choose between Leaky Bucket and Token Bucket, both have pros and cons
- Thus, I'll choose TOKEN BUCKET because memory usage is minimal and if the bucket is full, tokens are discarded.
- I'm not choosing LEAK BUCKET because may result in slowness for users (affecting application UI/UX), because requests are being throttled
- Additionally, I would implement a retry mechanism to handle the 429 errors, helping to prevent the application from overwhelming the API with too many requests in a short period of time.
