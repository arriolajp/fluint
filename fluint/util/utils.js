const images = {
    'pfp.png': require('./pfp.png'),
    'flashcard.png': require('./flashcard.png'),
    'headphone.png': require('./headphone.png'),
    'song-bar.png': require('./song-bar.png'),

    // Add more images as needed
  };
    
  export const getImageUrl = (path) => {
    return images[path] || null; // Return null if the image is not found
  };
    