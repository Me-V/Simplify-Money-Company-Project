import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const API_KEY = "82523ede"; // Replace with your OMDB API key
const API_URL = "https://www.omdbapi.com/";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export default function Index() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch movies from OMDB API
  const fetchMovies = async (
    searchQuery: string,
    pageNum: number = 1
  ): Promise<void> => {
    if (loading) return; // Prevent multiple requests
    setLoading(true);

    try {
      const response = await axios.get(API_URL, {
        params: {
          s: searchQuery,
          apikey: API_KEY,
          page: pageNum,
        },
      });

      if (response.data.Search) {
        setMovies((prevMovies) =>
          pageNum === 1
            ? response.data.Search
            : [...prevMovies, ...response.data.Search]
        );
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }

    setLoading(false);
  };

  // Initial Fetch when component mounts
  useEffect(() => {
    fetchMovies(query, 1);
  }, []);

  // Handle Search
  const handleSearch = (): void => {
    setPage(1);
    setMovies([]); // Clear previous results
    fetchMovies(query, 1);
  };

  // Load More Movies
  const loadMoreMovies = (): void => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  return (
    <View className="flex-1 bg-black px-5">
      <View>
        <Text className="mt-10 text-2xl text-purple-400">
          Movies App Project - Simplify Money
        </Text>
      </View>

      {/* Search Bar */}
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search for a movie..."
        placeholderTextColor="gray"
        className="bg-gray-800 text-white p-3 rounded-lg mt-10"
        onSubmitEditing={handleSearch}
      />

      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        {/* Show a message if the search bar is empty */}
        {query === "" && (
          <View className="flex-1 justify-center items-center mt-10">
            <Text className="text-purple-200 mt-28 text-xl font-bold text-center">
              See the details of your favourite movies
            </Text>
            <Text className="text-white text-center mt-4">
              Search for a movie to get started
            </Text>
          </View>
        )}

        {/* Display Movies if there are results */}
        {query !== "" &&
          movies.length > 0 &&
          movies.map((movie) => (
            <TouchableOpacity
              key={movie.imdbID}
              className="mb-4"
              onPress={() => router.push(`/movies/${movie.imdbID}`)}
            >
              <Image
                source={{ uri: movie.Poster }}
                className="w-full h-60 rounded-lg"
                resizeMode="cover"
              />
              <Text className="text-white mt-2 text-lg font-bold">
                {movie.Title} ({movie.Year})
              </Text>
            </TouchableOpacity>
          ))}

        {/* Show Load More button if there are movies */}
        {movies.length > 0 && query !== "" && (
          <TouchableOpacity
            onPress={loadMoreMovies}
            className="bg-purple-400 p-3 rounded-lg my-4 mx-auto w-40"
            disabled={loading}
          >
            <Text className="text-white text-center">
              {loading ? "Loading..." : "Load More"}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
