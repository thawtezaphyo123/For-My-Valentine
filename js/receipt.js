function previewImage(event) {
    const reader = new FileReader();
    const preview = document.getElementById('logo-preview');
    const placeholder = document.getElementById('upload-placeholder');

    reader.onload = function() {
        if (reader.readyState === 2) {
            // 1. Set the image source to the file data
            preview.src = reader.result;
            
            // 2. Show the image and hide the "Click to upload" text
            preview.classList.remove('hidden');
            placeholder.classList.add('hidden');
        }
    }

    // Read the file selected by the user
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

// Function to handle the updates
function setupSlider(sliderId, textId) {
    const slider = document.getElementById(sliderId);
    const text = document.getElementById(textId);

    slider.oninput = function() {
        text.innerHTML = this.value + "px";
    }
}

// Run for both
setupSlider('logoSize', 'sizeVal');
setupSlider('cornerRadius', 'radiusVal');