import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const WEATHER_DATA = {
  Lagos: {
    country: "Nigeria",
    temperature: 28,
    condition: "Sunny",
    icon: "☀️",
    humidity: 65,
    windSpeed: 12,
    feelsLike: 30,
  },
  London: {
    country: "United Kingdom",
    temperature: 14,
    condition: "Cloudy",
    icon: "☁️",
    humidity: 78,
    windSpeed: 18,
    feelsLike: 12,
  },
  Tokyo: {
    country: "Japan",
    temperature: 22,
    condition: "Rainy",
    icon: "🌧️",
    humidity: 82,
    windSpeed: 9,
    feelsLike: 21,
  },
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getStateWeather = () => {
    setWeather(WEATHER_DATA[city]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weather App</Text>
      <TextInput
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

      {weather ? (
        <View>
          <Text>
            {weather.icon} {weather.city}, {weather.country}
          </Text>
          <Text>
            {weather.temperature}°C — {weather.condition}
          </Text>
          <Text>Feels like: {weather.feelsLike}°C</Text>
          <Text>Humidity: {weather.humidity}%</Text>
          <Text>Wind: {weather.windSpeed} km/h</Text>
        </View>
      ) : (
        <Text>Type Lagos, London, or Tokyo</Text>
      )}
      <Pressable onPress={getStateWeather} style={styles.button}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 16,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2a9d8f",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "100%",
  },
});

export default WeatherApp;
