import "./App.css";
import { useState } from "react";

import { Context } from "./context/Context";

import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    const [quantity, setQuantity] = useState(0);
    const [numOfProducts, setNumOfProducts] = useState(0);

    const initialValue = {
        quantity,
        setQuantity,
        numOfProducts,
        setNumOfProducts
    };

    return (
        <>
            <Context.Provider value={initialValue}>
                <Header/>
                <Home />
            </Context.Provider>
        </>
    );
};

export default App;
