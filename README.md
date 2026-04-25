# Himanshu's E-Portfolio ✨

A modern, highly-responsive, and beautifully animated  E-Portfolio built with **React** and **Tailwind CSS**. It serves as an interactive resume, project showcase, and a personal learning journal. 

![Portfolio Preview](./public/Images/photo.jpeg)

## Features 🚀

- **Dynamic UI:** Smooth on-scrollbar animations powered by [AOS](https://michalsnik.github.io/aos/) and rich gradient styles.
- **Projects Showcase:** Clean, grid-based card layout that dynamically pulls project data (e.g., links, tech stack) from JSON.
- **Learning Hub (New!):** 
  - **Self Learning:** A dedicated page featuring insights, takeaways, and lessons learned from presentations and classes.
  - **Self Questions:** An introspective Q&A format exploring personal strengths, weaknesses, and motivations. 
  - **PDF Viewer:** Seamless linking to original learning documents.
- **Contact Form Integration:** A fully functional, serverless contact form connected directly via Google Apps Script. 
- **Reviews & Testimonials:** A sleek horizontal carousel highlighting project feedback.
- **Glassmorphism Nav & Footers:** A modern, frosted-glass header with fully persistent navigation loops.

## Tech Stack 🛠️

- **Frontend Core:** React.js, React-Router-DOM
- **Styling:** Tailwind CSS (featuring vibrant linear gradients and custom variables)
- **Icons:** React Feather
- **Animations:** AOS (Animate On Scroll)
- **Database / CMS:** JSON-driven architecture (`Projects.json`, `Reviews.json`, `SelfLearning.json`, `SelfQuestions.json`)

## Running the App Locally 💻

1. **Clone the repository**
   ```bash
   git clone https://github.com/HimanshuBisht23L/E-Portfolio.git
   cd E-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Folder Structure Summary 📁
```
.
├── public/                 # Static assets like images and PDFs
├── src/
│   ├── components/         # Reusable components (Navbar, Footer, ProjectCards)
│   ├── pages/              # Main route views (Home, Projects, Learning Pages)
│   ├── data/               # Local JSON datasets driving page content
│   ├── styles/             # Global CSS and Tailwind directives
│   └── App.jsx             # React Router setup
└── README.md
```

## Connect With Me ✉️
- **GitHub:** [HimanshuBisht23L](https://github.com/HimanshuBisht23L)
- **LinkedIn:** [Himanshu Bisht](https://www.linkedin.com/in/himanshu-bisht-a6b7b8347)

---
*Feel free to star ⭐ this repository if it inspired your own portfolio build!*