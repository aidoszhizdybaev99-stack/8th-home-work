interface Weather {
  current: {
    time: string;
    temperature_2m: number;
    wind_speed_10m: number;
  };
}
interface Currency {
  date: string; 
  base: string; 
  quote: string; 
  rate: number;
 }

async function getWeather(): Promise<Weather> {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=43.24&longitude=76.89&current=temperature_2m,wind_speed_10m";
  const response = await fetch(url);
  // console.log(response);
  const dataWeather = (await response.json()) as Weather;
  // console.log(data);
  return dataWeather;
}

async function getCurrency(): Promise<Currency>{
const url = "https://api.frankfurter.dev/v2/rate/USD/KZT";
const response = await fetch(url);
const dataCurrency = (await response.json()) as Currency;
return dataCurrency;
}

async function main() {
  console.log("получаем погоду...");
  const [weather, currency] = await Promise.all([getWeather(), getCurrency()]);
  console.log("получили погоду");
  // console.log(weather);
  console.log(`В Алматы сейчас ${weather.current.temperature_2m} °C`);
  console.log(`Ветер ${weather.current.wind_speed_10m} км/ч`);
  console.log(`Курс валюты: 1 ${currency.base} = ${currency.rate} ${currency.quote}`);
}
console.log("start");  
main();
console.log( "end");