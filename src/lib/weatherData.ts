export interface HourlyForecast {
  time: string;
  temp: number;
  icon: string;
}

export interface DailyForecast {
  day: string;
  high: number;
  low: number;
  icon: string;
  condition: string;
}

export interface WeatherData {
  city: string;
  currentTemp: number;
  condition: string;
  icon: string;
  high: number;
  low: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  uv: number;
  visibility: number;
  pressure: number;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
}

const cities: Record<string, WeatherData> = {
  "San Francisco": {
    city: "San Francisco",
    currentTemp: 18,
    condition: "Partly Cloudy",
    icon: "⛅",
    high: 21,
    low: 13,
    feelsLike: 17,
    humidity: 72,
    wind: 19,
    uv: 4,
    visibility: 16,
    pressure: 1013,
    hourly: [
      { time: "Now", temp: 18, icon: "⛅" },
      { time: "1PM", temp: 19, icon: "☀️" },
      { time: "2PM", temp: 20, icon: "☀️" },
      { time: "3PM", temp: 21, icon: "☀️" },
      { time: "4PM", temp: 20, icon: "⛅" },
      { time: "5PM", temp: 19, icon: "⛅" },
      { time: "6PM", temp: 17, icon: "🌙" },
      { time: "7PM", temp: 16, icon: "🌙" },
      { time: "8PM", temp: 15, icon: "🌙" },
      { time: "9PM", temp: 14, icon: "🌙" },
    ],
    daily: [
      { day: "Today", high: 21, low: 13, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Tue", high: 23, low: 14, icon: "☀️", condition: "Sunny" },
      { day: "Wed", high: 19, low: 12, icon: "🌧️", condition: "Rain" },
      { day: "Thu", high: 17, low: 11, icon: "🌧️", condition: "Showers" },
      { day: "Fri", high: 20, low: 13, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Sat", high: 22, low: 14, icon: "☀️", condition: "Sunny" },
      { day: "Sun", high: 24, low: 15, icon: "☀️", condition: "Clear" },
    ],
  },
  "New York": {
    city: "New York",
    currentTemp: 8,
    condition: "Overcast",
    icon: "☁️",
    high: 11,
    low: 3,
    feelsLike: 5,
    humidity: 58,
    wind: 24,
    uv: 2,
    visibility: 12,
    pressure: 1008,
    hourly: [
      { time: "Now", temp: 8, icon: "☁️" },
      { time: "1PM", temp: 9, icon: "☁️" },
      { time: "2PM", temp: 10, icon: "⛅" },
      { time: "3PM", temp: 11, icon: "⛅" },
      { time: "4PM", temp: 10, icon: "☁️" },
      { time: "5PM", temp: 8, icon: "☁️" },
      { time: "6PM", temp: 7, icon: "🌙" },
      { time: "7PM", temp: 6, icon: "🌙" },
      { time: "8PM", temp: 5, icon: "🌙" },
      { time: "9PM", temp: 4, icon: "🌙" },
    ],
    daily: [
      { day: "Today", high: 11, low: 3, icon: "☁️", condition: "Overcast" },
      { day: "Tue", high: 7, low: 1, icon: "🌨️", condition: "Snow" },
      { day: "Wed", high: 5, low: -1, icon: "🌨️", condition: "Snow" },
      { day: "Thu", high: 9, low: 2, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Fri", high: 12, low: 4, icon: "☀️", condition: "Sunny" },
      { day: "Sat", high: 13, low: 5, icon: "☀️", condition: "Clear" },
      { day: "Sun", high: 10, low: 3, icon: "🌧️", condition: "Rain" },
    ],
  },
  Tokyo: {
    city: "Tokyo",
    currentTemp: 14,
    condition: "Clear",
    icon: "☀️",
    high: 17,
    low: 9,
    feelsLike: 13,
    humidity: 45,
    wind: 12,
    uv: 5,
    visibility: 20,
    pressure: 1020,
    hourly: [
      { time: "Now", temp: 14, icon: "☀️" },
      { time: "1PM", temp: 15, icon: "☀️" },
      { time: "2PM", temp: 16, icon: "☀️" },
      { time: "3PM", temp: 17, icon: "☀️" },
      { time: "4PM", temp: 16, icon: "☀️" },
      { time: "5PM", temp: 14, icon: "⛅" },
      { time: "6PM", temp: 12, icon: "🌙" },
      { time: "7PM", temp: 11, icon: "🌙" },
      { time: "8PM", temp: 10, icon: "🌙" },
      { time: "9PM", temp: 9, icon: "🌙" },
    ],
    daily: [
      { day: "Today", high: 17, low: 9, icon: "☀️", condition: "Clear" },
      { day: "Tue", high: 18, low: 10, icon: "☀️", condition: "Sunny" },
      { day: "Wed", high: 15, low: 8, icon: "⛅", condition: "Partly Cloudy" },
      { day: "Thu", high: 13, low: 7, icon: "🌧️", condition: "Rain" },
      { day: "Fri", high: 16, low: 9, icon: "☀️", condition: "Sunny" },
      { day: "Sat", high: 19, low: 11, icon: "☀️", condition: "Clear" },
      { day: "Sun", high: 20, low: 12, icon: "☀️", condition: "Sunny" },
    ],
  },
};

export const getCityNames = (): string[] => Object.keys(cities);

export const getWeatherData = (city: string): WeatherData | undefined => {
  return cities[city];
};

export const searchCities = (query: string): string[] => {
  if (!query) return [];
  return Object.keys(cities).filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  );
};
