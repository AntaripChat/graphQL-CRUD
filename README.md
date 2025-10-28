
# 🚀 GraphQL + Express + MongoDB Example

This project demonstrates a simple **GraphQL API** built using **Express.js**, **MongoDB (Mongoose)**, and **express-graphql**.
It allows you to perform CRUD (Create, Read, Update, Delete) operations on users.

---

## 📁 Project Structure

```
.
├── server.js          # Main entry file
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

---

## ⚙️ Tech Stack

* **Node.js** – Runtime environment
* **Express.js** – Web server framework
* **GraphQL** – Query language for APIs
* **Mongoose** – MongoDB ORM
* **express-graphql** – GraphQL middleware for Express

---

## 🧠 Features

* Query all users
* Query a user by ID
* Add new users
* Update existing users
* Delete users
* Access through the built-in **GraphiQL UI**

---

## 🧩 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/graphql-mongo-demo.git
cd graphql-mongo-demo
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

Make sure your local MongoDB instance is running on:

```
mongodb://127.0.0.1:27017/todo
```

If MongoDB is not running, start it using:

```bash
mongod
```

### 4️⃣ Run the Server

```bash
npm start
```

---

## 🧪 Test in GraphiQL

Open your browser at 👉 **[http://localhost:4000/graphql](http://localhost:4000/graphql)**

You’ll see an interactive GraphiQL interface.

---

## 🧾 Example Queries & Mutations

### 🟢 Get All Users

```graphql
{
  users {
    id
    name
    age
  }
}
```

### 🟢 Get User by ID

```graphql
{
  getUserById(id: "634a1b9c0f1a4f0f12a5a8b1") {
    name
    age
  }
}
```

### 🟢 Add User

```graphql
mutation {
  addUser(name: "John Doe", age: 28) {
    id
    name
    age
  }
}
```

### 🟡 Update User

```graphql
mutation {
  updateUser(id: "634a1b9c0f1a4f0f12a5a8b1", name: "Jane Doe", age: 30) {
    id
    name
    age
  }
}
```

### 🔴 Delete User

```graphql
mutation {
  deleteUser(id: "634a1b9c0f1a4f0f12a5a8b1")
}
```

---

## 🧰 Environment

* Node.js v18+
* MongoDB v6+
* Tested on Windows, macOS, and Linux

---


