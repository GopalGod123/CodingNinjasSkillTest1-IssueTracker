# IssueTracker

## Description
IssueTracker is a full-stack application designed to help users track issues and bugs within projects. It provides a user-friendly interface for managing projects and their associated issues, enabling better organization and collaboration.

## Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Frontend:** EJS, JavaScript, HTML, CSS

## How to Set Up the Project on Your Local System

1. **Clone the Project:**
   ```bash
   git clone https://github.com/GopalGod123/CodingNinjasSkillTest1-IssueTracker
   ```

2. **Install npm:**
   If you haven't installed npm yet, download and install it from [npm's official website](https://www.npmjs.com/get-npm).

3. **Navigate to Project Directory:**
   ```bash
   cd <project-name>
   ```

4. **Install Dependencies:**
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

5. **Start the Application:**
   Launch the application with:
   ```bash
   node index.js
   ```

## Features

### Home Page
- Displays a list of projects.
- Includes a button to create a new project. Newly created projects will be added to the list.

### Create Project Page
Users can create a project by filling out the following fields:
- **Name**
- **Description**
- **Author**

### Project Details Page
Upon clicking a project from the home page, users are redirected to the Project Details Page, where they can:
- View bugs related to the project.
- Filter bugs by multiple labels.
- Filter bugs by author.
- Search for bugs by title and description.
- Create new issues.

### Create Issue Page
Users can create an issue for a project by filling out the following fields:
- **Title**
- **Description**
- **Author**

## Folder Structure

```
IssueTracker
 |--> createProject.css
 |--> assets
 |    |--> css
 |        |--> footer.css
 |        |--> header.css
 |        |--> issueTracker.css
 |        |--> layout.css
 |        |--> projectDetails.css
 |--> controller
 |    |--> issuecontroller.js
 |--> database
 |    |--> config
 |        |--> mongodb.js
 |--> route
 |    |--> index.js
 |    |--> issueTracker.js
 |--> views
 |    |--> _header.ejs
 |    |--> _footer.ejs
 |    |--> admicreateissue.ejs
 |    |--> createProject.ejs
 |    |--> issueTracker.ejs
 |    |--> layout.ejs
 |    |--> projectDetails.ejs
 |--> node_modules
 |--> .gitignore
 |--> index.js
 |--> package-lock.json
 |--> package.json
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to submit issues and pull requests to enhance the functionality of the IssueTracker app.

## Contact
For any inquiries, please reach out to [gopalkhandelwalstar@gmail.com].