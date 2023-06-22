import axios from "axios";
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const headers = {
    "X-RapidAPI-Key": "ae31950c68msh30bcc49c319eedap134f2cjsnf06d887cae41",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  // const params = {
  //   model: "320i",
  // };
  const { limit, manufacturer, fuel, model, year } = filters;

  try {
    const response = await axios.get(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
        // params: params,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "ghemmanuelmensahcompany");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

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
