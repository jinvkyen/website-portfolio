# Open Source Website Portfolio

![web-portfolio-2](https://github.com/user-attachments/assets/5302f62a-a5f6-4aa3-a008-55f525175433)


A responsive and customizable portfolio template built with **React.js** and **TailwindCSS**, designed for anyone to showcase their skills, projects, and cv.

- customizable  
- theme switcher  
- downloadable cv  
- deploy-ready on **Vercel**

---

## To start:

### 1. **Fork this repo**

Click the **Fork** button at the top right of this repo to create your own copy.

### 2. **Clone your fork**
```bash
git clone https://github.com/YOUR_USERNAME/your-forked-repo.git
cd your-forked-repo

```
### 3. **Install dependencies**
```bash
npm install
```
### 4. **Start dev server**
```bash
npm run dev
```
#### Now visit http://localhost:{your-port} to see your portfolio in action!

---

## ✏️ Customize your information
### Go into the data/ or constants/ folder (wherever your project stores personal content) and update arrays like:

// Change projects data here:
<pre lang="markdown"> const projects = 
  [{ title: "Cool Project", 
  description: "A short description", 
  link: "https://your-project-link.com" }]; 
</pre>


### 📄 Replace CV

/public/assets/cv.pdf

## ☁️ Deploy on Vercel
### Push your forked repo to GitHub

1. Go to vercel.com and sign in

2. Click New Project and import your repo

3. Use default settings (React + Vite detected)

4. Click Deploy


## 🤝 Contributing
This is an open-source project!
Feel free to fork it, personalize it, and share it.
Pull requests and ideas are always welcome 💛

## 📄 License
### MIT License — free to use, modify, and distribute.


---

### React + Vite

#### This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

##### Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

##### Expanding the ESLint configuration

##### If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
