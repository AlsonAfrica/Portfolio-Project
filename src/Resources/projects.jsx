

const projects = [
    {
      title: "X-pace UI Challenge",
      image: "/src/ProjectPics/UI.png",
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
      image: "/src/ProjectPics/recipejs.png",
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
      image: "/src/ProjectPics/sqliteto-do.png",
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
      image: "/src/ProjectPics/node-registration.png",
      description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
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
        title: "React-ShoppingApp",
        image: "/src/ProjectPics/shoppingApp.png",
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
        image: "/src/ProjectPics/weather.png",
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
        image: "/src/ProjectPics/hotel.png",
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
        image: "/src/ProjectPics/nodeserver.png",
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
        image: "/src/ProjectPics/Quiz.png",
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
        image: "/api/placeholder/400/300",
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
        image: "/src/ProjectPics/CardColor.png",
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
        image: "/src/ProjectPics/nodeS.png",
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
        image: "/api/placeholder/400/300",
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
        image: "/src/ProjectPics/node-registration.png",
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
        image: "/src/ProjectPics/node-registration.png",
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
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["Mongo"],
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
        githubLink: "https://github.com/AlsonAfrica/Mongo-Lesson-One.git"
      },

      {
        title: "MongoDB-Library-Management-System",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["Mongo","JavaScript"],
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
        githubLink: "https://github.com/AlsonAfrica/MongoDB-Library-Management-System.git"
      },

      {
        title: "Recipe-App-Node-Mongo-",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["Mongo","JavaScript","Node.Js","Cors","Pagination","Postman"],
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
        githubLink: "https://github.com/AlsonAfrica/Recipe-App-Node-Mongo-.git"
      },

      {
        title: "BirthdayCard24",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["React Native","CSS","JavaScript","Expo"],
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
        githubLink: "https://github.com/AlsonAfrica/BirthdayCard24.git"
      },

      {
        title: "Memo-Wave",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["React Native","CSS","JavaScript","Expo","Async-storage",],
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
        githubLink: "https://github.com/AlsonAfrica/Memo-Wave.git"
      },

      {
        title: "Memo-Wave-Auth",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["React Native","CSS","JavaScript","Expo","Async-storage","Firebase"],
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
        githubLink: "https://github.com/AlsonAfrica/Memo-Wave-Auth.git"
      },

      {
        title: "Payment-Integration",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["React Native","Expo","JavaScript","CSS","React-Native-Paystack-Webview"],
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
        githubLink: "https://github.com/AlsonAfrica/Payment-Integration.git"
      },

      {
        title: "Gallery-Suite",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["React Native","Expo","JavaScript","CSS","React-native-maps","Expo-camera","Expo-sqlite","Expo-location"],
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
        githubLink: "https://github.com/AlsonAfrica/Gallery-Suite.git"
      },

      {
        title: "ShoppingApp",
        image: "/api/placeholder/400/300",
        description: "An interactive weather dashboard with detailed forecasts, weather maps, and location-based updates.",
        techStack: ["React Native","Expo","JavaScript","CSS","Lucide-React-Native","React-redux-toolkit"],
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
        githubLink: "https://github.com/AlsonAfrica/ShoppingApp.git"
      },


  ];

  export default projects