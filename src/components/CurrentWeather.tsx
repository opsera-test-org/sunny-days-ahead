import { motion } from "framer-motion";
import type { WeatherData } from "@/lib/weatherData";

interface Props {
  data: WeatherData;
}

const CurrentWeather = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-8"
    >
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        {data.city}
      </p>
      <div className="text-8xl my-4">{data.icon}</div>
      <h1 className="text-7xl font-light text-foreground tracking-tight">
        {data.currentTemp}°
      </h1>
      <p className="text-muted-foreground text-lg mt-1">{data.condition}</p>
      <p className="text-muted-foreground text-sm mt-1">
        H:{data.high}° L:{data.low}°
      </p>
    </motion.div>
  );
};

export default CurrentWeather;
