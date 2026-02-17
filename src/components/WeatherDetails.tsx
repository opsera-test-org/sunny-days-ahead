import { motion } from "framer-motion";
import { Droplets, Wind, Sun, Eye, Gauge, Thermometer } from "lucide-react";
import type { WeatherData } from "@/lib/weatherData";

interface Props {
  data: WeatherData;
}

const items = (data: WeatherData) => [
  { icon: Thermometer, label: "Feels Like", value: `${data.feelsLike}°` },
  { icon: Droplets, label: "Humidity", value: `${data.humidity}%` },
  { icon: Wind, label: "Wind", value: `${data.wind} km/h` },
  { icon: Sun, label: "UV Index", value: `${data.uv}` },
  { icon: Eye, label: "Visibility", value: `${data.visibility} km` },
  { icon: Gauge, label: "Pressure", value: `${data.pressure} hPa` },
];

const WeatherDetails = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-2 gap-3"
    >
      {items(data).map((item, i) => (
        <div key={i} className="glass-card p-4 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <item.icon className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider font-medium">{item.label}</span>
          </div>
          <span className="text-xl font-semibold text-foreground">{item.value}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default WeatherDetails;
