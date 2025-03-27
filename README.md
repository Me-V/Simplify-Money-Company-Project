# Movie Search Mobile App ( For Android Devices )

## 📌 Overview
The **Movie Search Mobile App** is a simple and user-friendly React Native application that allows users to search for movies, view details such as ratings, posters, genres, and release years, and save their favorite movies. The app utilizes the **OMDb API** for fetching movie data and is built using **Expo** with **Tailwind CSS** for styling.

## 🚀 Features
- 🔍 **Search Movies**: Users can search for movies by title.
- 🎭 **View Movie Details**: Display essential details like title, poster, release year, genre, and IMDb rating.
- ⭐ **Save Favorites**: Users can save their favorite movies locally using **AsyncStorage**.
- 📜 **Infinite Scroll**: Load more movies when scrolling to the bottom of the list.
- 🎨 **Modern UI**: Styled using **Tailwind CSS**.

## 🛠️ Tech Stack
- **React Native** (via Expo)
- **Tailwind CSS** (for styling)
- **OMDb API** (for movie data)

## 🔑 Prerequisites
Before running the app, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- OMDb API Key (Sign up at [OMDb API](https://www.omdbapi.com/apikey.aspx))

## ⚙️ Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/movie-search-app.git
   cd movie-search-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create an `.env` file** in the root directory and add your OMDb API key:
   ```env
   OMDB_API_KEY=your_api_key_here
   ```

4. **Start the app:**
   ```sh
   npx expo start
   ```

5. **Scan the QR code** using Expo Go (Android/iOS) to run the app.

## 📡 API Usage
The app fetches movie data from the OMDb API using the following endpoint:
```
https://www.omdbapi.com/?s=SEARCH_TERM&apikey=YOUR_API_KEY
```
To fetch movie details:
```
https://www.omdbapi.com/?i=MOVIE_ID&apikey=YOUR_API_KEY
```

## 📂 Project Structure
```
movie-search-app/
│-- src/
│   │-- components/       # Reusable UI components
│   │-- screens/          # Screens for navigation
│   │-- services/         # API calls and data fetching logic
│   │-- styles/           # Tailwind configuration and styles
│-- App.js                # Entry point of the app
│-- package.json          # Project dependencies
│-- .env                  # API key storage (not to be committed)
```

## ✅ To-Do (Future Improvements)
- 🎬 Implement detailed movie reviews section.
- 📍 Add pagination for better performance.

## 🤝 Contributing
Feel free to fork this repository and submit pull requests! Any contributions to enhance functionality or UI improvements are welcome.

## 📧 Contact
For any queries, reach out to me at: [vasu.eit.21cse140@gmail.com]

---
**Happy Coding! 🚀🎬**
