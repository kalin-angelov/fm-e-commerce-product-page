import "./App.css";
import { useEffect, useState } from "react";

import { Context } from "./context/Context";

import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    const [quantity, setQuantity] = useState(0);
    const [numOfProducts, setNumOfProducts] = useState(0);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleSize);

        return () => {
            window.removeEventListener("resize", handleSize);
        };

    },[windowSize]);


    const initialValue = {
        quantity,
        setQuantity,
        numOfProducts,
        setNumOfProducts,
        windowSize
    };

    return (
        <Context.Provider value={initialValue}>
        <>
            <Header/>
            <Home />
        </>
        </Context.Provider>
    );
};

export default App;
