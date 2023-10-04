# **Blog Analytics and Search Tool**
This is a Node.js application using Express.js and Lodash to provide blog analytics and search functionalities. It fetches data from a third-party blog API, performs various analyses, and allows users to search for blogs.

## **Features**
+ Retrieve and analyze blog data from a third-party API.
+ Calculate statistics such as the total number of blogs, longest blog title, blogs with "Privacy" in the title, and unique blog titles.
+ Search for blogs based on user input.
## **Setup**
1. Clone this repository.
2. Install dependencies:
` npm install `
3. Create a .env file in the root directory with the following content:
`API_URL=<Your API URL>
SECRET=<Your Admin Secret>`
4. Start the server
`node app.js`
**Example Response:**
![Screenshot 2023-10-04 224945](https://github.com/trishbatra/assignment-/assets/97588299/1141872d-ffbf-4bc1-b478-afd4aeb3af24)
## Endpoints
1. **GET /api/blog-stats**
2. GET /api/blog-search
+ Searches for blogs based on a provided query.
  `/api/blog-search?search=save money`
**Example Response:**
  ![Screenshot 2023-10-04 225334](https://github.com/trishbatra/assignment-/assets/97588299/5be8f35f-908b-4eb7-835e-eaaa27e200ba)

