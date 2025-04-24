// Retrieve capsules from localStorage
const capsules = JSON.parse(localStorage.getItem('capsules')) || [];

// Get the search input and results container
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Function to display search results
function displaySearchResults(query) {
  // Clear existing results
  searchResults.innerHTML = '';

  // Filter capsules based on the search query
  const filteredCapsules = capsules.filter(capsule =>
    capsule.name.toLowerCase().includes(query.toLowerCase())
  );

  // Display filtered capsules
  if (filteredCapsules.length === 0) {
    searchResults.innerHTML = '<p>No capsules found.</p>';
  } else {
    filteredCapsules.forEach(capsule => {
      const capsuleItem = document.createElement('div');
      capsuleItem.className = 'capsule-item';
      capsuleItem.innerHTML = `
        <h3>${capsule.name}</h3>
        <p>${capsule.description || 'No description'}</p>
        <p>Type: ${capsule.type}</p>
        <p>Created on: ${new Date(capsule.id).toLocaleDateString()}</p>
      `;

      // Display media files (images)
      if (capsule.media && capsule.media.length > 0) {
        const mediaContainer = document.createElement('div');
        mediaContainer.className = 'media-container';
        capsule.media.forEach(media => {
          if (media.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = media.data; // Base64 encoded image data
            img.alt = media.name;
            img.className = 'capsule-image';
            mediaContainer.appendChild(img);
          }
        });
        capsuleItem.appendChild(mediaContainer);
      }

      searchResults.appendChild(capsuleItem);
    });
  }
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    displaySearchResults(query);
  } else {
    alert('Please enter a search query.');
  }
});

// Optional: Allow pressing "Enter" to trigger search
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      displaySearchResults(query);
    } else {
      alert('Please enter a search query.');
    }
  }
}); 