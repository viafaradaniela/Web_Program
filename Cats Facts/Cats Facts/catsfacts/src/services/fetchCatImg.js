const IMG_URL = 'https://cataas.com/cat/says/'

export const fetchImg = async({words}) => {
    return fetch(`${IMG_URL}${words}`)
    .then((img)=>{
        if (!img.ok) {
            throw new Error('There is something wrong with the picture')
        }
        const image = img.url
        return image
    })
    .catch((error)=> {
        throw new Error(error)
    })
}