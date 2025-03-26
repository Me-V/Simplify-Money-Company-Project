import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";

const API_KEY = "82523ede"; // Replace with your actual OMDB API Key
const API_URL = "https://www.omdbapi.com/";

interface MovieDetailsType {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  Runtime: string;
}

const MovieDetails = () => {
  const { id } = useLocalSearchParams(); // Get the imdbID from the URL
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            i: id, // Movie ID from URL
            apikey: API_KEY,
          },
        });

        if (response.data) {
          setMovie(response.data);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (!movie) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-white text-lg">Movie not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-black px-5">
      <Image source={{ uri: movie.Poster }} className="w-full h-96 rounded-lg" resizeMode="cover" />

      <Text className="text-white text-2xl font-bold mt-4">{movie.Title} ({movie.Year})</Text>
      <Text className="text-gray-400 text-lg mt-2">{movie.Genre}</Text>
      <Text className="text-gray-400 text-lg">Directed by: {movie.Director}</Text>
      <Text className="text-gray-400 text-lg">Actors: {movie.Actors}</Text>
      <Text className="text-gray-300 text-base mt-3">{movie.Plot}</Text>

      <View className="flex-row justify-between mt-4">
        <Text className="text-yellow-400 text-lg">⭐ {movie.imdbRating}</Text>
        <Text className="text-gray-300 text-lg">{movie.Runtime}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
