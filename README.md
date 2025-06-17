# 🛒 E-Commerce Cart System

A simple E-Commerce cart backend built with **Node.js**, **Express.js**, and **MongoDB**, with a basic HTML/CSS frontend to test cart operations like adding products, viewing cart, and checking out.

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML/CSS (Frontend)
- Body-parser (middleware)
- 
## 📁 Project Structure
│
├── index.js # Main server file
├── models/
│ ├── Product.js # Product schema/model
│ └── Cart.js # Cart schema/model
├── routes/
│ └── cartRoutes.js # Cart-related APIs
├── public/
│ ├── index.html # Frontend form
│ └── style.css # Styling
└── package.json


## 🚀 Features
- Add products to the cart
- View all cart items
- Checkout (clear cart)
- Seed a sample product for testing

  🖼️ Frontend Usage
Visit http://localhost:3000
Paste the Product ID from /seed-product
Enter Quantity
Use buttons to:
Add to cart
View cart
Checkout

##Screenshots
![image](https://github.com/user-attachments/assets/0bec8717-c48e-421a-a0f6-9464f7ace6bc)
![image](https://github.com/user-attachments/assets/71857477-32f4-40f5-b0d2-ae643cfb9657)
![image](https://github.com/user-attachments/assets/d0cd25e8-7356-46b8-9b61-28f82f65d0de)
![image](https://github.com/user-attachments/assets/828238c7-0689-4525-a0ad-185f003e13c5)
![image](https://github.com/user-attachments/assets/c35a4174-58b5-4051-9025-24c354cdfeb5)




🧠 How It Works
Product.js: defines product model
Cart.js: links a product to quantity
cartRoutes.js: handles API routes
MongoDB stores all data
Frontend uses fetch() to hit APIs

🙋‍♀️ Developed by
Ishita Sharma


