const express = require(`express`);
const app = express();
const PORT = 8080;
const todoRouter = require(`./routes/todo`);
const { sequelize } = require(`./models/index`);

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(`/todo`, todoRouter);


sequelize
    .sync({ force : false })
    .then(() => {
        app.listen(PORT, () => console.log(`${PORT}에 연결됨`), console.log(`Database connection succeeded!`));
    })
    .catch((err) => {
        console.error(err);
    });