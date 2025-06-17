
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
![image](https://github.com/user-attachments/assets/a553dea2-3275-4c16-8971-33f152784dc4)
![image](https://github.com/user-attachments/assets/e58a8371-0915-4feb-a680-4d578dc2a831)
![image](https://github.com/user-attachments/assets/a080fc58-5a18-4dc9-8b00-6601b76f4f2f)
![image](https://github.com/user-attachments/assets/a14330f7-f2c5-4f6a-9ef1-dc65c4e7ff4b)
![image](https://github.com/user-attachments/assets/a9fc225b-dc2f-40d2-8773-caf62510e2cb)


🧠 How It Works
Product.js: defines product model
Cart.js: links a product to quantity
cartRoutes.js: handles API routes
MongoDB stores all data
Frontend uses fetch() to hit APIs

🙋‍♀️ Developed by
Ishita Sharma


