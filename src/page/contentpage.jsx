import { app } from "../firebase/firebase.config";
import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import "../styles/ContentPage.css";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from 'react-player';

function ContentPage() {
  
  const auth = useAuth();
  const user = useAuth().user;
  const displayName = user ? user.displayName : null;
  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const [logoURL, setLogoURL] = useState(null);
  const history = useHistory();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const storage = getStorage(app);
    const defaultProfileImageRef = ref(storage, "usergeneric.jpg");

    if (user && user.photoURL) {
      setUserPhotoURL(user.photoURL);
    } else {
      getDownloadURL(defaultProfileImageRef)
        .then((url) => {
          setUserPhotoURL(url);
        })
        .catch((error) => {
          console.error("Error al obtener URL", error);
        });
    }
    const logoRef = ref(storage, "logopmbn.png");
    getDownloadURL(logoRef)
      .then((url) => {
        setLogoURL(url);
      })
      .catch((error) => {
        console.error("Error al obtener URL del logo", error);
      });
  }, [user]);

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout().then(() => {
      history.push("/");
    });
  };

  const handleProfileClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseVideo = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="content-page">
      <div className="navbar">
        <div className="logo">
          <Link to="/redirected">
            <img src={logoURL} alt="Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <a href="/">Inicio</a>
          <a href="/series">Series</a>
          <a href="/peliculas">Películas</a>
          <a href="/mi-lista">Mi Lista</a>
        </div>
        <div className="user-profile">
          <div className="user-info" onClick={handleProfileClick}>
            <img src={userPhotoURL} alt="Usuario" />
            <p>{displayName}</p>
          </div>
          {menuVisible && (
            <div className="user-menu">
              <ul>
                <li onClick={handleLogout}>Cerrar sesión</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="content-container">
        {selectedMovie ? (
          <div className="video-container">
            <button className="close-button" onClick={handleCloseVideo}>
              X
            </button>
            
          </div>
        ) : (
          <MovieList onSelect={handleMovieSelect} />
        )}
      </div>
    </div>
  );
}

// ...
// ...
const MovieList = ({ onSelect }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storage = getStorage(app);
    const videosFolderRef = ref(storage, "videos");

    const getMovies = async () => {
      try {
        const videosList = await listAll(videosFolderRef);

        const moviesData = [];

        for (const item of videosList.items) {
          try {
            const downloadURL = await getDownloadURL(item);
            const movieInfo = {
              title: item.name,
              type: item.name.endsWith('.mp4') ? 'video' : 'image',
              path: downloadURL,
            };

            moviesData.push(movieInfo);
          } catch (error) {
            console.error("Error al obtener URL del archivo", error);
          }
        }

        // Iterar sobre carpetas
        for (const prefix of videosList.prefixes) {
          const folderList = await listAll(ref(storage, prefix.fullPath));

          for (const item of folderList.items) {
            try {
              const downloadURL = await getDownloadURL(item);
              const movieInfo = {
                title: item.name,
                type: item.name.endsWith('.mp4') ? 'video' : 'image',
                path: downloadURL,
              };

              moviesData.push(movieInfo);
            } catch (error) {
              console.error("Error al obtener URL del archivo", error);
            }
          }
        }

        setMovies(moviesData);
      } catch (error) {
        console.error("Error al obtener la lista de películas", error);
      }
    };

    getMovies();
  }, []);

  const handleItemClick = (media) => {
    onSelect(media);
  };

  return (
    <div className="movie-list">
      {movies.map((media, index) => (
        <div key={index} className="movie-item" onClick={() => handleItemClick(media)}>
          {media.type === 'image' && (
            <img src={media.path} alt={media.title} />
          )}
          {media.type === 'image' && (
            <div className="video-title">{media.title}</div>
          )}
          <ReactPlayer
              url={media.path}
              controls
              width="100%"
              height="auto"
            />
        </div>
      ))}
    </div>
  );
};


export default ContentPage;
