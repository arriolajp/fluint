const images = {
    'pfp.webp': require('./pfp.webp'),
    'flashcard.png': require('./flashcard.png'),
    'headphone.jpg': require('./headphone.jpg'),
    'song-bar.jpg': require('./song-bar.jpg'),
    
    // Add more images as needed
  };
    
  export const getImageUrl = (path) => {
    return images[path] || null; // Return null if the image is not found
  };
    