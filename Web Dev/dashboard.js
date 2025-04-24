// Retrieve capsules from localStorage
const capsules = JSON.parse(localStorage.getItem('capsules')) || [];

// Get the container elements for private and public capsules
const privateCapsuleList = document.getElementById('private-capsule-list');
const publicCapsuleList = document.getElementById('public-capsule-list');

// Function to display capsules
function displayCapsules() {
  // Clear existing content
  privateCapsuleList.innerHTML = '';
  publicCapsuleList.innerHTML = '';

  // Loop through capsules and display them
  capsules.forEach(capsule => {
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

    // Add a download button for public capsules
    if (capsule.type === 'public') {
      const downloadButton = document.createElement('button');
      downloadButton.innerText = 'Download Capsule';
      downloadButton.addEventListener('click', () => downloadCapsule(capsule));
      capsuleItem.appendChild(downloadButton);
    }

    // Add the capsule to the appropriate list based on its type
    if (capsule.type === 'private') {
      privateCapsuleList.appendChild(capsuleItem);
    } else if (capsule.type === 'public') {
      publicCapsuleList.appendChild(capsuleItem);
    }
  });
}

// Function to download a capsule as a .zip file
function downloadCapsule(capsule) {
  const zip = new JSZip();

  // Add capsule metadata to a text file
  const metadata = `
    Capsule Name: ${capsule.name}
    Description: ${capsule.description || 'No description'}
    Type: ${capsule.type}
    Created on: ${new Date(capsule.id).toLocaleDateString()}
  `;
  zip.file('capsule-info.txt', metadata);

  // Add media files to the zip
  capsule.media.forEach((media, index) => {
    const base64Data = media.data.split(',')[1]; // Remove the data URL prefix
    zip.file(`media-${index + 1}.${media.name.split('.').pop()}`, base64Data, { base64: true });
  });

  // Generate the zip file and trigger download
  zip.generateAsync({ type: 'blob' }).then(content => {
    saveAs(content, `${capsule.name}.zip`);
  });
}

// Display capsules when the page loads
displayCapsules();