import { motion } from "framer-motion";
import type { HourlyForecast as HourlyType } from "@/lib/weatherData";

interface Props {
  hours: HourlyType[];
}

const HourlyForecast = ({ hours }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card p-4"
    >
      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3 px-1">
        Hourly Forecast
      </p>
      <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-1">
        {hours.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[3rem]">
            <span className="text-xs text-muted-foreground">{h.time}</span>
            <span className="text-2xl">{h.icon}</span>
            <span className="text-sm font-medium text-foreground">{h.temp}°</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HourlyForecast;
