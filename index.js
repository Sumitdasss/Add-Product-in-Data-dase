import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import usemodels from "./model/user.js"; // Ekhanne .js thaktei hobe
const app = express();
const port = 3000;

// app definition er por
app.use(cors());
// ES Modules-e __dirname thake na, tai eta lagbe
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));

app.get('/', (req, res) => {
  res.send('Hello World! ES Module working.');
});
app.get('/read', async (req, res) => {
    let users = await usemodels.find();
    res.json(users); // res.render er bodole res.json
});

app.post('/creat', async (req, res) => {
    try {
        let { name, price, details, images } = req.body;
        let user = await usemodels.create({ 
            Productname: name, 
            price: price, 
            Details: details, 
            Images: images 
        });
        // Redirect na kore success message pathan
        res.status(201).json({ message: "Product Created!", user }); 
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await usemodels.findOneAndDelete(id);
        res.status(200).json({ message: "Deleted" });
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
        res.status(500).json({ error: "Delete failed" });
    }
});

app.listen(port, () => {
  console.log(`Server run hochche: http://localhost:${port}/`);
});