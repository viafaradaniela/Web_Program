const URL = 'https://catfact.ninja/fact'

export const fetchFact = async () => {
    return fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('There is something wrong with the info')
            }
           return response.json()
        })
        .then((data) => {
            const fact = data.fact
            return fact
        })
        .catch((error) => {
            throw new Error(error)
        })
}