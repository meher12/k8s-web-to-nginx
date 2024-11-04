import express from 'express';
import fetch from 'node-fetch'
import os from 'os'



const app = express();
const port = 3000;


// Basic route
app.get('/', (req, res) => {
    const helloMessage = `Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send({ helloMessage });
});

app.get("/nginx", async(req, res)=> {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;