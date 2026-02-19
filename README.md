📌 Experiment 5.1 — Lazy Loading of a Dashboard Component in React

📖 Overview : 

This experiment demonstrates how to implement Lazy Loading for a single Dashboard component in a React application.

The Dashboard includes:

Title Section

Skills List

About Section

Clean Card-Based UI

The component is dynamically imported and rendered using Suspense with a loading fallback.

🎯 Objective

To understand React.lazy()

To implement dynamic component loading

To use Suspense for fallback UI

To improve performance using code splitting

🔄 Loading State

Before the dashboard loads, a fallback message is displayed:

Dashboard Loading

🖥 Dashboard Output
Dashboard

📊 Observations

The Dashboard component loads only when required.

A fallback loading message improves user experience.

Code splitting reduces initial bundle size.

The application structure remains clean and modular.

🎓 Learning Outcomes

Learned dynamic imports in React.

Understood Suspense usage.

Applied lazy loading for performance optimization.

Built a structured and reusable component.

🚀 Conclusion – Experiment 5.1

This experiment successfully demonstrates lazy loading of a single component in React.
It improves application performance by reducing the initial load size and enhances user experience with a fallback loading state.

Screenshots:

<img width="1903" height="932" alt="Screenshot 2026-02-14 011505" src="https://github.com/user-attachments/assets/da4240de-9ed7-4e78-8045-f34be7acd29a" />
<img width="1909" height="949" alt="Screenshot 2026-02-14 011515" src="https://github.com/user-attachments/assets/e4285bb0-a09f-4395-82d2-a362c175edde" />


<br>
📌 Experiment 5.2 — Route-Based Lazy Loading using React Router
📖 Overview

This experiment extends lazy loading to a multi-page React application using React Router.

The application includes:

Home Page

About Page

Contact Page

Each route is dynamically loaded only when accessed.

🎯 Objective

To implement client-side routing

To apply lazy loading per route

To use Suspense for each page

To understand performance optimization in multi-page apps

🖥 Application Screenshots
🔄 Loading State (While Navigating Between Pages)
Route Loading

🏠 Home Page
Home Page

📄 About Page
About Page

📞 Contact Page
Contact Page

📊 Observations

Pages load only when visited.

Navigation occurs without full page refresh.

Suspense displays loading feedback during component load.

Route-based lazy loading improves scalability.

🎓 Learning Outcomes

Implemented route-based lazy loading.

Used React Router with dynamic imports.

Improved performance in multi-page applications.

Structured scalable React project architecture.

Screenshots:
<img width="1900" height="916" alt="Screenshot 2026-02-13 155337" src="https://github.com/user-attachments/assets/7bbeabd0-eeed-41ce-9424-7c8ea9a81e59" />
<img width="1919" height="966" alt="image" src="https://github.com/user-attachments/assets/5f17c3bc-9e0d-4ee7-b390-82ec32fd9d7d" />

<img width="1502" height="588" alt="Screenshot 2026-02-13 155523" src="https://github.com/user-attachments/assets/1472fb89-8985-4f0a-9dd5-8341a6405786" />
<img width="1911" height="911" alt="Screenshot 2026-02-13 161745" src="https://github.com/user-attachments/assets/403ffa2f-8b34-40a3-bdec-aeecba2441aa" />
<img width="1917" height="933" alt="Screenshot 2026-02-13 161756" src="https://github.com/user-attachments/assets/61ffbd7e-76eb-48b8-9f65-8b053cabdd66" />




🚀 Conclusion – Experiment 5.2

The route-based lazy loading experiment successfully demonstrates how React Router and dynamic imports can be combined to build optimized multi-page applications.

This approach enhances performance, reduces initial load time, and ensures smooth navigation across routes.

🛠 Technologies Used

React JS

Vite

React Router DOM

React.lazy()

Suspense

HTML5

CSS3

JavaScript (ES6+)
