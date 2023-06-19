import axios from 'axios';

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "6aaac58555msh9dabd6e315fb824p188a10jsna193220e3b0f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const params ={
    model: "Corolla"
  }

  try {
    const response = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?', {
      headers: headers,
      params:params
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};