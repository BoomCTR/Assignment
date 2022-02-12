import axios from 'axios';

export async function getFoodByName(name) {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name})`);
    return res.data;
}

export async function getFoodById(id) {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    return res.data;
}

export async function getAllFood() {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    return res.data;
}