## Overview

Welcome to the React Router project! This application was created to practice and learn features provided by `react-router-dom` to create a seamless routing experience, including the creation of nested routes. The project follows a tutorial available on the FreeCodeCamp YouTube channel, which not only provides a good understanding of React Router DOM but also imparts insights on best practices to follow while using it.

Explore different pages and routes using components like `useSearchParams`, `useLoaderData`, `Link`, `NavLink`, `Outlet`, `useOutletContext`, `useParams`, and `useLocation`.

## Routes

- **Home**: `/`
- **About**: `/about`
- **Login**: `/login`
- **Vans**: `/vans`
  - **Van Details**: `/vans/:id`
- **Host Dashboard**: `/host`
  - **Income**: `/host/income`
  - **Reviews**: `/host/reviews`
  - **Host Vans**: `/host/vans`
    - **Van Details**: `/host/vans/:id`
      - **Van Info**: `/host/vans/:id`
      - **Pricing**: `/host/vans/:id/pricing`
      - **Photos**: `/host/vans/:id/photos`
- **Page Not Found**: `/*`

## Tutorial Source

This project was created by following a tutorial available on the FreeCodeCamp YouTube channel. You can watch the tutorial [here](https://youtu.be/nDGA3km5He4?si=gThxokl1u1oOBOk5).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing for React.js.
- **Mirage JS**: A client-side server to mock API responses during development.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Icons**: A library for adding icons to React applications.

## Mock Server with Mirage JS

 -The project uses Mirage JS to create a mock server for API responses. Check the mirage folder for server configurations.


## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository

```bash
https://github.com/AbhishekNavgan95/VanLife/

```

2. navigate to the folder

```bash
cd VanLife
```

3. Install dependancies
   
```bash
npm install
```

4. run the project
   
```bash
npm run dev
```
