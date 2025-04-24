document.getElementById('capsule-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const capsuleName = document.getElementById('capsule-name').value;
    const capsuleDescription = document.getElementById('capsule-description').value;
    const capsuleType = document.getElementById('capsule-type').value;
    const mediaFiles = document.getElementById('media-upload').files;
  
    // Validate capsule name
    if (!capsuleName) {
      alert('Please enter a capsule name.');
      return;
    }
  
    // Create a new capsule object
    const newCapsule = {
      id: Date.now(), // Unique ID for the capsule
      name: capsuleName,
      description: capsuleDescription,
      type: capsuleType,
      media: [],
    };
  
    // Convert media files to base64 and add to the capsule
    for (let i = 0; i < mediaFiles.length; i++) {
      const file = mediaFiles[i];
      const reader = new FileReader();
      reader.onload = function (e) {
        newCapsule.media.push({
          name: file.name,
          type: file.type,
          data: e.target.result, // Base64 encoded data
        });
      };
      reader.readAsDataURL(file);
    }
  
    // Save the capsule to localStorage
    let capsules = JSON.parse(localStorage.getItem('capsules')) || [];
    capsules.push(newCapsule);
    localStorage.setItem('capsules', JSON.stringify(capsules));
  
    alert('Capsule created successfully! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
  });