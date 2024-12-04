# **Vue.js Frontend Website**

### **Project: Dynamic Single-Page Application**

## **Overview**

This project is a responsive single-page application (SPA) built using **Vue.js** and **Typescript**. It demonstrates the use of Vue's core features, such as components, routing, reactivity, and dynamic data handling. The website consists of multiple pages (Home, Product, Cart) and incorporates a dynamic feature powered by Fakestore API.

---

## **Features**

### **1. Pages**

- **Home Page**:

  - Includes list of products from Fakestore API in Grid .

- **Product Page**:

  - Offers information on single product from Fakestore API.

- **Cart Page**:
  - Includes the list of items added to cart.
  - Displays the total sum.

### **2. Responsive Design**

- Optimized for desktops, tablets, and mobile devices using TailwindCSS.

### **3. Modular Components**

- Reusable components for the navigation bar, cards, icons.

---

## **Technologies Used**

- **Framework**: Vue 3
- **Routing**: Vue Router
- **Styling**: TailwindCSS
- **State Management**: Pinia

---

## **Setup Instructions**

### **1. Prerequisites**

Ensure the following are installed:

- **Node.js** (v16 or higher recommended)

### **2. Clone the Repository**

```bash
git clone https://github.com/Swetraj/VueDemo.git
cd VueDemo
```

### **3. Install Dependencies**

```bash
npm install
```

### **4. Run the Development Server**

```bash
npm run dev
```

The website will be available at `http://localhost:8080`.

### **5. Build for Production**

To create an optimized production build:

```bash
npm run build
```

The production-ready files will be available in the `/dist` folder.

---

## **Folder Structure**

```
src/
├── assets/             # Images and static assets
├── components/         # Reusable Vue components
├── views/              # Page-level components (Home, Product, Cart)
├── router/             # Vue Router configuration
├── store/             # Pinia Store
├── App.vue             # Root component
├── main.ts             # Entry point of the app
```

---

### **Thank you for checking out this project!**

---
