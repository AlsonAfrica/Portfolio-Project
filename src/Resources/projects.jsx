import UIPic from "/src/ProjectPics/UI.png"
import YarmyardPic from "/src/ProjectPics/recipejs.png"
import TodoPic from "/src/ProjectPics/sqliteto-do.png"
import RegistrationPic from "/src/ProjectPics/node-registration.png"
import ShoppingApp from "/src/ProjectPics/shoppingApp.png"
import WeatherPic from "/src/ProjectPics/weather.png"
import HotelPic from "/src/ProjectPics/hotel.png"
import NodePic from "/src/ProjectPics/nodeserver.png"
import QuizExpress from "/src/ProjectPics/Quiz.png"
import NodebasePic from "/src/ProjectPics/nodeBase.png"
import CardcolorPic from "/src/ProjectPics/CardColor.png"
import MongoPic from "/src/ProjectPics/mongo.png"
import NodeMongo from "/src/ProjectPics/node-mongo.png"
import BirthdayPic from "/src/ProjectPics/birthdaycard.png"
import MemoPic from "/src/ProjectPics/memowave.png"
import PaymentPic from "/src/ProjectPics/Payment.png"
import CameraPic from "/src/ProjectPics/camera.png"
import ShoppingPic from "/src/ProjectPics/restaurant.png"

const projects = [
    {
      title: "X-pace UI Challenge",
      image: UIPic,
      description: "The Xpace Landing Page is a modern and visually appealing web page designed to introduce a team collaboration platform called Xpace",
      techStack: ["React.JS", "CSS", "HTML","JavaScript"],
      keyFeatures: [
        "Responssive Layout",
        "Grid Layout",
      ],
      challenges: [
        "Layout Responsiveness",
        "Element Alignment within containers"
      ],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/AlsonAfrica/UI-design.git"
    },


    {
      title: "Yum-Yard Recipe App",
      image: YarmyardPic,
      description: "The Recipe App is a dynamic web application built using React, Vite, and Material-UI, designed to help users explore and manage recipes",
      techStack: ["React.JS", "CSS", "HTML","JavaScript","Json-Server"],
      keyFeatures: [
        "Search Recipes",
        "View Recipe Details",
        "Responsive Design",
        "Authentication and Authorization"
      ],
      challenges: [
        "Authentication and Authorization using Json-Server",
        "Responsive design",
        "State Management"
      ],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/AlsonAfrica/React-Recipe-App.git"
    },


    {
      title: "To-do-App-SQLite",
      image: TodoPic,
      description: "A modern, feature-rich Todo application built with React.js, Node.js, and SQLite that helps you organize your tasks efficiently.",
      techStack: ["React", "SQLite", "CSS", "HTML","JavaScript","Node.js"],
      keyFeatures: [
        "Secure user registration and login system",
        "To do's stored in SQlite for data persistance",
        "Perform CRUD operations on added to do's",
        "Task Management with Date, Time andd priority scheduling",
        "Smart search functionality"
      ],
      challenges: [
        "Storing and Retrieving tasks",
        "Data management (State Management)",
      ],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/AlsonAfrica/To-do-App-SQLite.git"
    },

    {
      title: "Registration App",
      image: RegistrationPic,
      description: "This is an Employee Management System, a web application designed to simplify and streamline the management of employee records. It allows organizations to efficiently handle employee information, track attendance, and manage performance evaluations. The app provides a user-friendly interface for HR departments to maintain accurate and up-to-date employee data.",
      techStack: ["JavaScript","React","HTML","CSS","Material-UI"],
      keyFeatures: [
        "Authentication and Authorization",
        "Employee Dashboard",
        "Employee Directory",
        "Crud operations on added employees"
      ],
      challenges: [
        "Data Management",
        "UI design"
      ],
      demoLink: "https://github.com/AlsonAfrica/React-App.git",
      githubLink: "https://github.com/AlsonAfrica/React-App.git"
    },

    {
        title: "React-ShoppingApp",
        image: ShoppingApp,
        description: "The Shopping List App is a web-based application designed to help users manage and organize their shopping items efficiently",
        techStack: ["React", "SQLite", "CSS", "HTML","Redux","Material-UI","JavaScript"],
        keyFeatures: [
          "User-Friendly Interface: Simple and intuitive UI with Material-UI integration for a sleek look and feel.",
          "State Management through Redux",
          "Perform Crud Operations on added items with added details such as, name and quantity",
          "Sort added items"
        ],
        challenges: [
          "State Management through Redux",
          "Responsive Design"
        ],
        demoLink: "https://github.com/AlsonAfrica/React-ShoppingApp.git",
        githubLink: "https://github.com/AlsonAfrica/React-ShoppingApp.git"
      },

      {
        title: "Weather-App",
        image: WeatherPic,
        description: "The Weather App is designed to provide real-time weather information, forecasts, and weather alerts with an emphasis on location-based data.",
        techStack: ["React","HTML","Redux","Material-UI","JavaScript","Axios","React Router","React-Chartjs-2","Open Weather API"],
        keyFeatures: [
          "Real-time Weather Information",
          "Location-Based Forecasting",
          "Customisation switch in temperature units  (Celsius and Fahrenheit)",
          "Privacy & Security"
        ],
        challenges: [
          "Handling API rate limits",
          "Optimizing weather data visualization"
        ],
        demoLink: "https://github.com/AlsonAfrica/Weather-App.git",
        githubLink: "https://github.com/AlsonAfrica/Weather-App.git"
      },

      {
        title: "Hotel-React",
        image: HotelPic,
        description: "A modern, feature-rich hotel management and booking application built with React. This application provides a seamless experience for users to explore rooms, manage bookings, and interact with hotel services through an intuitive interface optimized for both desktop and mobile platforms.",
        techStack: ["React","HTML","CSS","Redux-ToolKit","Material-UI","JavaScript","Firebase","React Router","React-Chartjs-2","React-stripe-js","Icons-Material"],
        keyFeatures: [
          "Room Management",
          "User Experience",
          "Authentication & Security",
          "Social Features",
          "Booking & Payments",
          "Central Management System"
        ],
        challenges: [
          "Firebase Integration",
          "Payment integration",
          "Data management through Redux"
        ],
        demoLink: "https://github.com/AlsonAfrica/Hotel-React.git",
        githubLink: "https://github.com/AlsonAfrica/Hotel-React.git"
      },

      {
        title: "Basic Express Server",
        image:  NodePic,
        description: "This project is a simple Node.js server built with Express.js. The server listens on a specified port and includes basic functionality such as handling CORS, parsing JSON requests, and responding with simple API endpoints.",
        techStack: ["Node.JS","Cors","Express","Postman"],
        keyFeatures: [
          "Handling CORS",
          "Parsing JSON requests",
          "Responding with simple API endpoints",
        ],
        challenges: [
          "Setting up node environment",
        ],
        demoLink: "https://github.com/AlsonAfrica/Basic-Node-Server.git",
        githubLink: "https://github.com/AlsonAfrica/Basic-Node-Server.git"
      },

      {
        title: "Quizz-App-Node",
        image: QuizExpress,
        description: "This is a simple command-line quiz application built using Node.js. It asks users a series of questions, tracks the time they take to answer each question, and calculates a total score at the end of the quiz.",
        techStack: ["Node.JS","Realine Sync"],
        keyFeatures: [
          "Multiple Questions",
          "Time Limits",
          "Score Calculation",
          "Input Validation"
        ],
        challenges: [
          "Handling Questions and Timer Asynchronously",
          "Fetching questions from the server"
        ],
        demoLink: "https://github.com/AlsonAfrica/Quizz-App-Node.git",
        githubLink: "https://github.com/AlsonAfrica/Quizz-App-Node.git"
      },

      {
        title: "Node.js-File-Manager",
        image: NodebasePic,
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["Node.JS",],
        keyFeatures: [
          "5-day forecast",
          "Interactive weather maps",
          "Location search",
          "Weather alerts"
        ],
        challenges: [
          "Handling API rate limits",
          "Optimizing weather data visualization"
        ],
        demoLink: "https://demo-link.com",
        githubLink: "https://github.com/username/project"
      },

      {
        title: "Node-Card-Game-Html",
        image: CardcolorPic,
        description: "This project implements a card guessing game using Node.js. The goal of the game is for users to match all pairs of cards. The game will feature 36 cards (6x6 grid), and users select two cards at a time. If the cards match, they remain open; if they do not match, they will flip back to hide their contents",
        techStack: ["Node.JS","JavaScript", "HTML","CSS"],
        keyFeatures: [
          "Dynamic Card Setup",
          "Reset Functionality",
          "Winning Pop-up",
        ],
        challenges: [
          "Setting the timer to run immediately when the player selects a card",
          "Flipping cards",
          "Matching the cards"
        ],
        demoLink: "https://github.com/AlsonAfrica/Node-Card-Game-Html.git",
        githubLink: "https://github.com/AlsonAfrica/Node-Card-Game-Html.git"
      },

      {
        title: "Node-Server",
        image: NodebasePic,
        description: "This project demonstrates how to deploy a simple Node.js server on a free hosting provider. The server is built using either the HTTP module or Express, and is deployed on a service like Vercel.",
        techStack: ["Node.JS","Vercel(Hosting Service)"],
        keyFeatures: [
          "A simple Node.js server with basic routing.",
          "Basic testing with a Hello World route and greet route that displays (Hello World)",
          "Location search",
          "Weather alerts"
        ],
        challenges: [
          "None",
        ],
        demoLink: "https://github.com/AlsonAfrica/Node-Server.git",
        githubLink: "https://github.com/AlsonAfrica/Node-Server.git"
      },

      {
        title: "Node.js-Books-Directory",
        image: NodebasePic,
        description: "This is a simple Node.js API for managing a book directory. It allows users to perform CRUD operations (Create, Read, Update, and Delete) using the built-in http module. The API handles JSON data exchange and supports the following HTTP methods: GET, POST, PUT, PATCH, and DELETE.",
        techStack: ["Node.JS","Postman","JavaScript"],
        keyFeatures: [
          "Add a new book to the directory",
          "Retrieve a list of all books or a specific book by ID",
          "Update book details",
          "Delete a book from the directory"
        ],
        challenges: [
          "None",
        ],
        demoLink: "https://github.com/AlsonAfrica/Node.js-Books-Directory.git",
        githubLink: "https://github.com/AlsonAfrica/Node.js-Books-Directory.git"
      },

      {
        title: "Node-Registration-Firebase",
        image: RegistrationPic,
        description: "This is an Employee Management System, a web application designed to simplify and streamline the management of employee records. It allows organizations to efficiently handle employee information, track attendance, and manage performance evaluations using Node.js and Firebase",
        techStack: ["Node.JS","Express","Cors","Postman","JavaScript","Firebase","React","HTML","CSS","Material-UI"],
        keyFeatures: [
          "Authentication and Authorization",
          "Employee Dashboard/Home Screen:To view existing Employees",
          "Firebase for Authentication",
          "Add Employees",
          "Search Functionality: Filter added employees",
          "Crud operations on added employees",
          "Logout"
        ],
        challenges: [
          "Handling API routes for different operations",
          "Image retrival and storage through firebase live storage"
        ],
        demoLink: "https://github.com/AlsonAfrica/Node-Registration-Firebase.git",
        githubLink: "https://github.com/AlsonAfrica/Node-Registration-Firebase.git"
      },

      {
        title: "Admin-Registration-Node",
        image: RegistrationPic,
        description: "This is an Employee Management System, a web application designed to simplify and streamline the management of employee records. It allows organizations to efficiently handle employee information, track attendance, and manage performance evaluations. The app provides a user-friendly interface for HR departments to maintain accurate and up-to-date employee data.",
        techStack: ["Node.JS","Express","Cors","Postman","JavaScript","Firebase","React","HTML","CSS","Material-UI"],
        keyFeatures: [
          "5-day forecast",
          "Interactive weather maps",
          "Location search",
          "Weather alerts"
        ],
        challenges: [
          "Handling API rate limits",
          "Optimizing weather data visualization"
        ],
        demoLink: "https://demo-link.com",
        githubLink: "https://github.com/AlsonAfrica/Admin-Registration-Node.git"
      },

      {
        title: "Mongo-Lesson-One",
        image: MongoPic,
        description: "MongoDB is a noSQL database, which means it stores data differently than traditional relational database, thus it stores data in documents instead of tables and rows",
        techStack: ["Mongo"],
        keyFeatures: [
          "Data base creation",
          "Store Data",
          "Retrieve Data",
          "Read Data",
        ],
        challenges: [
          "Setting up Mongo Compass",
        ],
        demoLink: "https://github.com/AlsonAfrica/Mongo-Lesson-One.git",
        githubLink: "https://github.com/AlsonAfrica/Mongo-Lesson-One.git"
      },

      {
        title: "MongoDB-Library-Management-System",
        image: MongoPic,
        description: "This project seeks to emphasize the use of commands to perform CRUD (CREATE, READ, UPDATE AND DELETE) operations in Mongo, it leverages both the use of creating a Database, collections and documents along with manipulating data in the documents.",
        techStack: ["Mongo","JavaScript"],
        keyFeatures: [
          "Data base creation",
          "Collection creation and data insertion",
          "Crud operations on the created data",
        ],
        challenges: [
          "None",
        ],
        demoLink: "https://github.com/AlsonAfrica/MongoDB-Library-Management-System.git",
        githubLink: "https://github.com/AlsonAfrica/MongoDB-Library-Management-System.git"
      },

      {
        title: "Recipe-App-Node-Mongo-",
        image: NodeMongo ,
        description: "This project implements a RESTful API for a recipe application using Node.js, Express, and MongoDB. The API allows users to create, retrieve, update, and delete recipes, and it handles errors gracefully. It also supports pagination for efficiently handling large datasets",
        techStack: ["Mongo","JavaScript","Node.Js","Cors","Pagination","Postman"],
        keyFeatures: [
          "CRUD operations (Create, Read, Update, Delete) for recipe data.",
          "Data validation using Mongoose schema.",
          "Pagination for listing large datasets.",
          "Comprehensive error handling with informative error messages",
          "Testing endpoints via Postman"
        ],
        challenges: [
          "Pagination",
          "Data validation"
        ],
        demoLink: "https://github.com/AlsonAfrica/Recipe-App-Node-Mongo-.git",
        githubLink: "https://github.com/AlsonAfrica/Recipe-App-Node-Mongo-.git"
      },

      {
        title: "BirthdayCard",
        image: BirthdayPic,
        description: "Built in React Native, The Birthday Card App allows users to create custom birthday cards with personalized text, images, and decorations. Users can design unique cards, add custom messages, and enhance their cards with various creative elements.",
        techStack: ["React Native","CSS","JavaScript","Expo"],
        keyFeatures: [
          "Card Creation",
          "Text Editing",
          "Image and Decoration Support",
        ],
        challenges: [
          "Data handling",
          "User Interface design"
        ],
        demoLink: "https://github.com/AlsonAfrica/BirthdayCard24.git",
        githubLink: "https://github.com/AlsonAfrica/BirthdayCard24.git"
      },

      {
        title: "Memo-Wave",
        image:  MemoPic,
        description: "This Audio Recording App is a digital journal designed for voice recording. The app allows users to record audio notes, play them back, delete unwanted notes, and manage voice note storage. The app is simple to use and provides an efficient way to manage voice recordings.",
        techStack: ["React Native","CSS","JavaScript","Expo","Async-storage",],
        keyFeatures: [
          "Recording Functionality",
          "List of Voice Notes",
          "Playback Functionality",
          "Delete Functionality",
          "Create New Voice Note",
          "Storage Management",
          "Permissions Handling",
          "Search Functionality"
        ],
        challenges: [
          "Recording and storing the recorded note",
          "Retrieving the recorded note",
          "User Interface design"
        ],
        demoLink: "https://github.com/AlsonAfrica/Memo-Wave.git",
        githubLink: "https://github.com/AlsonAfrica/Memo-Wave.git"
      },

      {
        title: "Memo-Wave-Auth",
        image:  MemoPic,
        description: "This project builds upon the previous Digital Journal App to create an enhanced Audio Recording App with additional features designed to improve user experience, security, and functionality.",
        techStack: ["React Native","CSS","JavaScript","Expo","Async-storage","Firebase"],
        keyFeatures: [
          "Authetication and Authorization",
          "Data sync to cloud",
          "User Profile",
          "Location search",
          "Weather alerts",
          "Recording Functionality",
          "List of Voice Notes",
          "Playback Functionality",
          "Delete Functionality",
          "Create New Voice Note",
          "Storage Management",
          "Permissions Handling",
          "Search Functionality"
        ],
        challenges: [
          "Audio synchronization to cloud",
          "Optimizing weather data visualization"
        ],
        demoLink: "https://github.com/AlsonAfrica/Memo-Wave-Auth.git",
        githubLink: "https://github.com/AlsonAfrica/Memo-Wave-Auth.git"
      },

      {
        title: "Payment-Integration",
        image: PaymentPic,
        description: "This app demonstrates a step-by-step guide to integrating the Stripe payment gateway into your mobile app",
        techStack: ["React Native","Expo","JavaScript","CSS","React-Native-Paystack-Webview"],
        keyFeatures: [
          "Secure payment processing using Stripe",
          "Tokenization of sensitive payment information",
          "Support for payment events (success, failure, cancellation)",
          "User-friendly payment UI and confirmation messages"
        ],
        challenges: [
          "Setting up stripe",
        ],
        demoLink: "https://github.com/AlsonAfrica/Payment-Integration.git",
        githubLink: "https://github.com/AlsonAfrica/Payment-Integration.git"
      },

      {
        title: "Gallery-Suite",
        image: CameraPic,
        description: "The Gallery Application is a mobile app that allows users to view images, see their locations on a map using geolocation, and store metadata about each image in a local SQLite database. The application leverages geolocation features to tag images with their location and integrates a map view to display where the images were taken. SQLite is used for local data storage, ensuring fast and efficient data management.",
        techStack: ["React Native","Expo","JavaScript","CSS","React-native-maps","Expo-camera","Expo-sqlite","Expo-location"],
        keyFeatures: [
          "Image Gallery",
          "Geolocation Integration",
          "Map Integration",
          "SQLite Database",
          "Search and Filter",
          "Security and Permissions"
        ],
        challenges: [
          "Setting up SQLite",
          "Storing and retrieving data from the SQLite database",
          "Managing data passing through components"
        ],
        demoLink: "https://github.com/AlsonAfrica/Gallery-Suite.git",
        githubLink: "https://github.com/AlsonAfrica/Gallery-Suite.git"
      },

      {
        title: "ShoppingApp",
        image: ShoppingPic ,
        description: "A React-based shopping list application that uses Redux for state management and provides a seamless experience for managing your shopping needs.",
        techStack: ["React Native","Expo","JavaScript","CSS","Lucide-React-Native","React-redux-toolkit"],
        keyFeatures: [
          "Create and manage shopping lists",
          "Mark items as purchased",
          "Edit item names and quantities",
          "Perform Crud operations on added items",
          "Persistent storage across sessions",
          "Real-time user feedback and error handling,",
          "Responsive and user-friendly interface"
        ],
        challenges: [
          "Managing data through redux",
        ],
        demoLink: "https://github.com/AlsonAfrica/ShoppingApp.git",
        githubLink: "https://github.com/AlsonAfrica/ShoppingApp.git"
      },


  ];

  export default projects