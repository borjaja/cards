import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import { ThemeProvider } from "styled-components";
import axios from "axios";

const theme = {
    primary: "#4caf50",
    mango: "yellow",
};

function App() {
    const [id, setId] = useState(1);
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            console.log(res.data);
            setCard(res.data);
        });
    }, [id]);

    const changeNameHandler = (event, id) => {
        const cardCopy = { ...card };
        cardCopy.name = event.target.value;
        setCard(cardCopy);
    };



    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <Card key={card.id} name={card.name} phone={card.phone} onChange={(event) => changeNameHandler(event, card.id)} />
            </div>
        </ThemeProvider>
    );
}

export default App;
