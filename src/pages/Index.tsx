import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getWeatherData } from "@/lib/weatherData";
import CitySearch from "@/components/CitySearch";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyForecast from "@/components/HourlyForecast";
import DailyForecast from "@/components/DailyForecast";
import WeatherDetails from "@/components/WeatherDetails";

const Index = () => {
  const [city, setCity] = useState("San Francisco");
  const data = getWeatherData(city)!;

  return (
    <div className="min-h-screen gradient-sky flex justify-center">
      <div className="w-full max-w-md px-4 py-6 space-y-4">
        <CitySearch onSelect={setCity} currentCity={city} />
        <AnimatePresence mode="wait">
          <motion.div
            key={city}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <CurrentWeather data={data} />
            <HourlyForecast hours={data.hourly} />
            <DailyForecast days={data.daily} />
            <WeatherDetails data={data} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
