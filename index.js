const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;
var a = 0;
var b = 0;
var c = 0;
// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, and JavaScript)
app.use(express.static(path.join(__dirname, 'veiws')));

// Endpoint to handle vote submission
app.post('/submit-vote', (req, res) => {
    
        const { vote } = req.body;
        if (vote === "a") {
            a += 1;
        } else if (vote === "b") {
            b += 1;
        } else if(vote === "c"){
            c += 1;
        }
     
        
        // Send response with a message
        setTimeout(function(){res.sendFile(path.join(__dirname, 'veiws', 'wait.html'));

        },500)
       
        // Here you can process the vote (e.g., store it in a database)
        // For simplicity, let's just send a response back to the client
        // res.json({ message: `Vote for ${vote} received successfully!` });

    });
   // Redirect after a delay

 // 10000 milliseconds = 10 seconds

// Route to render the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'veiws', 'index.html'));
});
app.get('/result', (req, res) => {
    res.send(`The Result is , A got ${a} votes , B got ${b} votes and C got ${c} votes`)
});
app.get('/reset', (req, res) => {
  a=0;
  b=0;
  c=0;
  res.send("votes are reset");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
