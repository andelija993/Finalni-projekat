import axios from 'axios'

export const getRandomMeals = () => axios.get(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php`)

export const getMealById = (mealId) => axios.get(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${mealId}`)

export const getAllCategories = () => axios.get(`https://www.themealdb.com/api/json/v2/9973533/categories.php`)

export const getLatestMeals = () => axios.get(`https://www.themealdb.com/api/json/v2/9973533/latest.php`)

export const getMealsByCategory = (category) => axios.get(`https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${category}`)

//prijavljivanje

export const getAllUsers = () => axios.get(`http://localhost:3005/users`)
export const postUser = (username,email,password, favouriteMeals) => axios.post(`http://localhost:3005/users`,{username,email,password,favouriteMeals})
export const addMeal = (id, updatedUser) => axios.put(`http://localhost:3005/users/${id}`,updatedUser)
export const removeMeal = (id, updatedUser) => axios.put(`http://localhost:3005/users/${id}`,updatedUser)