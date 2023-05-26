# Chat Application



## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` or `yarn install` to install all the dependencies.

## Usage

1. Run the command `npm run dev` or `yarn run dev` to start the app.
2. Open your browser and navigate to `http://localhost:5173/` to view the app.

## Technical Specifications

### State Management

The app uses Pinia for state management. Pinia is a lightweight and performant state management solution that is easy to use and does not rely on any global state managers.

### Vue 3 - Composition API

The app uses Vue 3 and the Composition API. The Composition API is a new way to organize logic in a Vue component, making it easier to reuse and test.

### Typescript

The app uses Typescript, a typed superset of JavaScript that provides better tooling, code clarity, and error checking.

### UI Components

The appcontains several custom UI components that were created specifically for this project. These components were designed using BEM and SCSS, which allowed for clear and modular styling.

### Routing

The app uses Vue Router for routing. Each page is on a separate route, making it easy to navigate between pages.

### Validation Logic

The app includes validation logic that enforces a maximum message length of 1024 characters and requires the message field to be filled.

### API Integration

No API integration is required for this project. All chat data is static.

### ESLint

The app follows the strongly recommended rules in ESLint. This ensures that the code is clean, readable, and follows best practices.