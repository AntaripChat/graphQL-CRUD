import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import mongoose from 'mongoose';

// ✅ MongoDB কানেকশন
mongoose.connect('mongodb://127.0.0.1:27017/todo')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ✅ Mongoose Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model('User', userSchema);

// ✅ GraphQL Schema
const schema = buildSchema(`
  type User {
    id: ID
    name: String
    age: Int
  }

  type Query {
    hello: String
    users: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int!): User
    updateUser(id: ID!, name: String, age: Int): User
    deleteUser(id: ID!): String
  }
`);

// ✅ Root Resolver
const root = {
  // 🟢 Simple Query
  hello: () => 'Hello, GraphQL!',

  // 🟢 সব ইউজার পাওয়া
  users: async () => {
    return await User.find();
  },

  // 🟢 ID অনুযায়ী ইউজার পাওয়া
  getUserById: async ({ id }) => {
    return await User.findById(id);
  },

  // 🟢 নতুন ইউজার যোগ করা
  addUser: async ({ name, age }) => {
    const user = new User({ name, age });
    await user.save();
    return user;
  },

  // 🟡 ইউজার আপডেট করা
  updateUser: async ({ id, name, age }) => {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age },
      { new: true } // আপডেটেড ডেটা ফেরত দেয়
    );
    return updatedUser;
  },

  // 🔴 ইউজার ডিলিট করা
  deleteUser: async ({ id }) => {
    await User.findByIdAndDelete(id);
    return `User with ID ${id} deleted successfully!`;
  }
};

// ✅ Express Setup
const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

// ✅ Server Start
app.listen(4000, () => {
  console.log('🚀 Server running at http://localhost:4000/graphql');
});
