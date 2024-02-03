let getCategory = async () => {
    try {
        let res = await fetch('https://dua-server.onrender.com/categories')
        if (!res.ok) {
            throw new Error('erroer')
        }
        const data = await res.json()
        return data
    } catch (error) {
    }
}
export default getCategory