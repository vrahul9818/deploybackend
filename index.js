const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors({
  origin: '*'  // Allows requests from any origin
}));


app.use(express.json());

app.get('/button', (req, res) => {
  console.log("get");
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
