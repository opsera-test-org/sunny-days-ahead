import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchCities, getCityNames } from "@/lib/weatherData";

interface Props {
  onSelect: (city: string) => void;
  currentCity: string;
}

const CitySearch = ({ onSelect, currentCity }: Props) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = query ? searchCities(query) : getCityNames();
  const showDropdown = focused && results.length > 0;

  return (
    <div className="relative">
      <div className="glass-card flex items-center gap-2 px-4 py-2.5">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground flex-1"
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
        />
      </div>
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute top-full left-0 right-0 mt-2 glass-card overflow-hidden z-10"
          >
            {results.map((city) => (
              <button
                key={city}
                onMouseDown={() => {
                  onSelect(city);
                  setQuery("");
                  setFocused(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-secondary/60 ${
                  city === currentCity ? "text-primary" : "text-foreground"
                }`}
              >
                {city}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CitySearch;
