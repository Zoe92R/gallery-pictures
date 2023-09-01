# Gallery pictures React App

## Overview
The Gallery Pictures React App is a dynamic web application built using React that offers an immersive experience for viewing a gallery of images sourced from the Picsum Photos API. This app is designed to be responsive and user-friendly across various devices, including desktops, tablets, and phones.

## Features
1. Image Gallery
Utilizes the Picsum Photos API to fetch a collection of images.
Renders images within a responsive gallery layout, ensuring a seamless viewing experience on different screen sizes.
2. Infinite Scrolling
Implements infinite scrolling to enhance user experience and load a new set of images as the user scrolls.
Incorporates smooth scrolling animations for an engaging interface.
Responsively adapts to all design layouts, including desktop, tablet, and phone.
3. Date Picker Component
Features a Date Picker component that is fixed to the top of the page.
Allows users to select a specific date.
Upon selecting a date:
Clears the current gallery, removing existing images.
Fetches and displays a new set of picture.

## Getting Started

### Prerequisites
Node.js and npm installed on your machine.

#### Follow these steps to get a copy of the project up and running on your local machine for development.

Clone the repository to your local machine: 
```bash
git clone https://github.com/Zoe92R/gallery-pictures.git
```

Navigate to the project directory and install the project dependencies:
```bash
npm i
```

To run the app locally, execute the following command:
```bash
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Assumptions:
- Compatibility Scope: The app is designed to be compatible with tablets, mobile devices, and desktops; specific adjustments for larger screens are not included.
- Every Time the App Starts, Images Are Automatically Fetched.
- Consistent Number of Images for each fetch Across Devices.
- The error handling component in this app is minimal and provides only basic error handling functionality.
- Date Picker Behavior: Gallery Reloads to Page 1.

## Future Improvements:

While the Gallery Pictures React App is fully functional and serves its intended purpose, there are opportunities for further enhancements and refinements. If additional time were available, here are some areas where improvements could be considered:

- Advanced error handling component
- Image fetching optimization and caching
- Scroll animation
- Skelaton UI Improvements
- Displaying even number of images per row for better UI
- Dynamic Pagination: The app dynamically updates the "hasMore" state to determine if more images are available from the Picsum API before initiating the next fetch operation.

