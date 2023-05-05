const express = require('express')
const app = express()
const fs = require('fs')

app.get("/api", (req, res) => {
    res.json({"users":["userOne", "userTwo", "userThree"]})
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Store the data in a separate JSON file
    const user = {
      email: email,
      password: password
    }
    fs.writeFile('./data.json', JSON.stringify(user), (err) => {
      if (err) throw err;
      console.log('User data has been saved!');
    });

    // Redirect to the Details page
    res.redirect('/details');
});

app.listen(5000, () => { console.log("Server Started on port 5000")});

