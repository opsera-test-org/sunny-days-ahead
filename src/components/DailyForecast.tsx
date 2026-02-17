import { motion } from "framer-motion";
import type { DailyForecast as DailyType } from "@/lib/weatherData";

interface Props {
  days: DailyType[];
}

const DailyForecast = ({ days }: Props) => {
  const maxHigh = Math.max(...days.map((d) => d.high));
  const minLow = Math.min(...days.map((d) => d.low));
  const range = maxHigh - minLow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card p-4"
    >
      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3 px-1">
        7-Day Forecast
      </p>
      <div className="space-y-3">
        {days.map((d, i) => {
          const leftPct = ((d.low - minLow) / range) * 100;
          const widthPct = ((d.high - d.low) / range) * 100;

          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm text-foreground w-12 font-medium">{d.day}</span>
              <span className="text-xl w-8 text-center">{d.icon}</span>
              <span className="text-sm text-muted-foreground w-8 text-right">{d.low}°</span>
              <div className="flex-1 h-1.5 rounded-full bg-secondary relative mx-2">
                <div
                  className="absolute h-full rounded-full bg-gradient-to-r from-accent to-primary"
                  style={{ left: `${leftPct}%`, width: `${Math.max(widthPct, 8)}%` }}
                />
              </div>
              <span className="text-sm text-foreground w-8 font-medium">{d.high}°</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DailyForecast;
