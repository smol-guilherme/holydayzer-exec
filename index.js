import express from "express";
import cors from "cors";

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

const app = express();
app.use(cors());

app.get('/holidays', (req, res) => {
    res.send(holidays)
})

app.get('/is-today-holiday', (req, res) => {
    const today = new Date().toLocaleDateString();
    let isHoliday = false;
    holidays.map((item) => {
        if(item.date === today) {
            isHoliday = true
            return;
        }
        return;
    })
    console.log(isHoliday)
    if(isHoliday) {
        res.send("Sim, hoje é feriado")
        return;
    }
    res.send("Não, hoje não é feriado")
})

app.get('/holidays/:id', (req, res) => {
    const month = req.params.id
    const monthHolidays = holidays.filter((item) => {
        const thisMonth = item.date.split("/")[0]
        if (thisMonth === month)
            return item
        return null
    })
    res.send(monthHolidays);
})

app.listen(5000);