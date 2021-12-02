1. You have created a login for an application. An unlicenced user is trying to log in. What is the status code your API should return? (2 points)

-- 401 Unauthorized/unauthenticated

2. You try to start an express application on port 3010. You encounter and error saying that port is already in use. What command or commands can you use to determine what else is running on that port?

-- lsof -i:3010

   - How would you stop them? (4 points)

   kill -9 (PID)

3. Given the JS code in question3.js, write the appropriate server-side endpoint to handle the request, citing any parameters required. (6 points)

const CurrentTime = () => {
	app.get("/currentTime/Dave", async (request, response) => {
      const data = {
         currentTime: Date.now();
         userName : "Dave"
      }
		response.json(data);
	});
};



4. I've created a table called World Leaders. I've also created a table of Official Titles. However, I've been told the information isn't normalized. Why? How can I correct this? (5 points)

--By limiting a table to one purpose you reduce the number of duplicate data contained within your database.

5. Create a Javascript class that represents the properties of a world leader. Include a method that will return the number of years from today in which that leader has ruled. (8 points)

let Leader = class {
  constructor(leadernName, yearRuled ) {
    this.leadernName = leadernName;
    this.yearRuled = function yearRuled(yearElected) {
      conts currentYear = new Date().getFullYear();
      const electionYear = yearElected;
      return (currentYear - electionYear)
    };
  }
};
