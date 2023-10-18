import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [isCelsiusFocused, setIsCelsiusFocused] = useState(true);

  const calculateFahrenheit = (celsius) => {
    return ((celsius * 9) / 5 + 32).toFixed(2);
  };

  const calculateCelsius = (fahrenheit) => {
    return (((fahrenheit - 32) * 5) / 9).toFixed(2);
  };

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(calculateFahrenheit(value));
    setIsCelsiusFocused(true);
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(calculateCelsius(value));
    setIsCelsiusFocused(false);
  };

  const handleUnitSwitch = () => {
    if (isCelsiusFocused) {
      setFahrenheit(calculateFahrenheit(celsius));
      setIsCelsiusFocused(false);
    } else {
      setCelsius(calculateCelsius(fahrenheit));
      setIsCelsiusFocused(true);
    }
  };

  const backgroundColor = isCelsiusFocused
    ? celsius >= 30
      ? "bg-red-400"
      : "bg-green-400"
    : fahrenheit >= 86
    ? "bg-red-400"
    : "bg-green-400";

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${backgroundColor}`}
    >
      <h1 className="text-4xl font-semibold mb-4">Temperature Converter</h1>
      <div className="flex">
        <input
          type="number"
          className="rounded-l-lg p-2 border border-r-0"
          placeholder="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        <span
          className="p-2 border border-l-0 border-r-0 cursor-pointer"
          onClick={handleUnitSwitch}
        >
          ⇆
        </span>
        <input
          type="number"
          className="rounded-r-lg p-2 border border-l-0"
          placeholder="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
      {isNaN(celsius) || isNaN(fahrenheit) ? (
        <p className="text-red-600 mt-2">Please enter a valid number.</p>
      ) : null}
    </div>
  );
};

export default TemperatureConverter;
