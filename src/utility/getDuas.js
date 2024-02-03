
const getDuas = async (id) => {
    try {
        let res = await fetch(`http://localhost:5000/subcategories/${id}/duas`)
        if (!res.ok) {
            throw new Error('erroer')
        }
        const data = await res.json()
        return data
    } catch (error) {
    }
};

export default getDuas;