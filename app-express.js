/* eslint-disable */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient } = require('mongodb');

const PORT = process.evn?.PORT || 3000;
console.log('process', process);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  try {
    await client.connect();
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();

app.get('/api/getplease', async (req, res) => {
  try {
    const db = client.db('candleDB');
    const collection = db.collection('products');
    const allProducts = await collection.find().toArray();

    res.status(200).send({ products: allProducts, status: 200 });
  } catch (err) {
    res.status(500).send({ message: err, status: 500 });
  }
});

app.get('/*', (req, res) =>
  res.sendFile(path.resolve('build', 'public', 'index.html')),
);
