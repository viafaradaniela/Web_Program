import React from "react";
import { Header, CatImg, CatFact, Button } from "./components";
import { useApp } from "./hooks/useApp";

export function App() {

    const { fact, img, isLoading, error, words, handleOnClick } = useApp()

    if (isLoading) {
        return (
            <>
                <Header />
                <p>You're fact is loading</p>
            </>
        )
    }

    if (error) {
        return (
            <p>{error}</p>
        )
    }

    return (
        <>
            <Header />
            <main>
                <CatImg
                    content={img} />
                <CatFact
                    text={fact} />

                <Button
                    onClick={handleOnClick} />
            </main>
        </>
    )
}