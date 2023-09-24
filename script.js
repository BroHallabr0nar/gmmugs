const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const overlayImages = [];

// Load overlay images
for (let i = 1; i <= 6; i++) {
    const overlay = new Image();
    overlay.src = `images/overlay${i}.png`; // Updated path to overlay images
    overlayImages.push(overlay);
}

let currentOverlay = 0; // Current overlay index

// Function to draw the image with the selected overlay
function drawImage(imageId) {
    const baseImage = new Image();
    baseImage.src = `images/${imageId}.png`; // Updated path to base images

    const scaledWidth = 600;
    const scaledHeight = 600;

    baseImage.onload = () => {
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw base image, scaled to 600x600
        ctx.drawImage(baseImage, 0, 0, scaledWidth, scaledHeight);

        // Draw overlay image
        ctx.drawImage(overlayImages[currentOverlay], 0, 0, scaledWidth, scaledHeight);
    };
}

// Event listener for loading the image
document.getElementById("loadImage").addEventListener("click", () => {
    const imageId = document.getElementById("imageId").value;
    if (imageId >= 0 && imageId <= 5999) {
        drawImage(imageId);
    } else {
        alert("Please enter a valid image ID between 0 and 5999.");
    }
});

// Event listeners for overlay selection
document.getElementById("overlay-1").addEventListener("click", () => {
    currentOverlay = 0;
    drawImage(document.getElementById("imageId").value);
});

document.getElementById("overlay-2").addEventListener("click", () => {
    currentOverlay = 1;
    drawImage(document.getElementById("imageId").value);
});
document.getElementById("overlay-3").addEventListener("click", () => {
    currentOverlay = 2;
    drawImage(document.getElementById("imageId").value);
});

document.getElementById("overlay-4").addEventListener("click", () => {
    currentOverlay = 3;
    drawImage(document.getElementById("imageId").value);
});
document.getElementById("overlay-5").addEventListener("click", () => {
    currentOverlay = 4;
    drawImage(document.getElementById("imageId").value);
});

document.getElementById("overlay-6").addEventListener("click", () => {
    currentOverlay = 5;
    drawImage(document.getElementById("imageId").value);
});

// Event listener for the "Download Image" button
document.getElementById("download").addEventListener("click", () => {
    // Get the canvas as an image data URL
    const imageDataUrl = canvas.toDataURL("image/png");

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = imageDataUrl;
    downloadLink.download = "image.png"; // Specify the filename for the downloaded image

    // Trigger a click event on the download link to initiate the download
    downloadLink.click();
});


// Add more event listeners for other overlay buttons as needed
