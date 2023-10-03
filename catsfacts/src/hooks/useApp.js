import { useEffect, useState } from "react";
import { fetchFact } from "../services/fetchCatFact";
import { fetchImg } from "../services/fetchCatImg";

export const useApp = () => {
    const [fact, setFact] = useState(null)
    const [img, setImg] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [words, setWords] = useState(null)
    const [error, setError] = useState(null)

    const handleOnClick = () => {
        fetchData()
    }

    const fetchData = () => {
        setLoading(true)

        fetchFact()
            .then((fact) => {
                setFact(fact)
                if (fact) {
                    const wordsArray = fact.split(' ').slice(0, 4)
                    setWords(wordsArray.join(' '))
                }
            })
            .catch((error) => {
                setError(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    const fetchImage = () => {
        if (words) {
            fetchImg({ words })
                .then((img) => {
                    setImg(img)
                })
                .catch((error) => {
                    setError(error)
                })
                .finally(() => setLoading(false))
        }
    }

    useEffect(() => {
        fetchImage()
}, [words])

    return {fact, img, isLoading, error, words, handleOnClick}
}