# Project Name

    Web Developer Portfolio

<br>

## Description

    A project that is a portfolio for a web developer. It's objective is to create a page in which a web developer can display its own projects plus some personal information about himself.

<br>

## Page Description

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Home:** As a user, we're enter the website in the home page, in which we can see owner's skills, small description of website and navigate the website.
- **About Me Page:** As a user I can visit the check the owner's personal information.
- **Contact Me Page:** As a user I can contact the owner via email address;
- **CV Page:** As a user I can check and download the owner's CV file in pdf for format.
- **ZASKS-3000 Page:** As a user I can visit the details on this project;
- **Track my health Page:** As a user I can visit the details on this project;
- **Team Comms Page:** As a user I can visit the details on this project;

## Backlog

- after feedback, i'll update this backlog section

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                       | Pages / Components                               | Permissions      | Behavior                              |
| -------------------------- | ------------------------------------------------ | ---------------- | ------------------------------------- |
| `/`                        | Home / Navbar ; Footer                           | public `<Route>` | Home                                  |
| `/portfolio`               | Portfolio / Navbar ; Portfolio Carousel ; Footer | public `<Route>` | Shows owner's projects                |
| `/portfolio/ZASKS-3000`    | ZASKS 3000 Details / Navbar ; Footer             | public `<Route>` | Shows owner's ZASKS 3000 game project |
| `/portfolio/Trackmyhealth` | Track my health Details / Navbar ; Footer        | public `<Route>` | Shows owner's Track My Health project |
| `/portfolio/Teamcomms`     | Team Comms Details / Navbar ; Footer             | public `<Route>` | Shows owner's Team Comms project      |
| `/about-me`                | About Me / Navbar ; Footer                       | public `<Route>` | Shows owner's personal information    |
| `/contact-me`              | Contact Me / Navbar ; Footer                     | public `<Route>` | Shows form to send email to owner     |
| `/CV`                      | Curiculum Vitae / Navbar ; Footer                | public `<Route>` | Shows owner's CV                      |
|                            |                                                  |                  |                                       |

## Components

Components:

- Navbar
- Footer
- Contact Me form
- Portfolio Carousel
- Language Toggle
- Theme Toggle

Pages:

- Home
- Portfolio
- About Me
- Curiculum Vitae
- Contact Me
- ZASKS 3000 Details
- Track my health Details
- Team Comms Details

## Services

none

# Server / Backend

<br>

## API Endpoints (backend routes)

| HTTP Method | URL          | Request Body             | Success status | Error Status | Description                         |
| ----------- | ------------ | ------------------------ | -------------- | ------------ | ----------------------------------- |
| POST        | `/sendEmail` | { name, title, message } | 201            | 400          | Create and send a new email message |

<br>

## API's

none

<br>

## Packages

@mui/material ||
@mui/react ||
@mui/styled ||
mongoose ||
react-router-dom ||
ironlauncher ||
axios ||
bcryptjs ||
express-session ||
connect-mongo ||
toastify ||
modal ||
cloudinary ||
multer ||
multer-storage-cloudinary ||
react-error-boundary ||
nodemailer --save

<br>

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/paulocaetano96/portfolio-client)

[Server repository Link](https://github.com/paulocaetano96/portfolio-server)

[Deployed App Link](http://heroku.com)

### Contributors

⚒️ Paulo Caetano - [`GitHub`](https://github.com/paulocaetano96) - [`LinkedIn`](https://www.linkedin.com/in/paulocaetano-dev/)
