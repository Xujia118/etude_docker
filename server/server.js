const express = require("express");
const cors = require("cors")

const app = express();
const PORT = 3000

app.use(cors());


app.get("/", async (req, res) => {
    const images = [
      {
        name: "seaside1",
        url: "https://images.unsplash.com/photo-1534842628439-bcc9e12f826e?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "seaside2",
        url: "https://images.unsplash.com/photo-1528201641266-954685b7c277?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "seaside3",
        url: "https://plus.unsplash.com/premium_photo-1676517026096-2387dfd754f7?q=80&w=3858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];

    res.json(images)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})