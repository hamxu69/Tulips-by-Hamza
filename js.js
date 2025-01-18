window.onload = () => {
  const container = document.querySelector(".container");

  if (!container) {
    console.error("No .container element found!");
    return;
  }

  // Add a class that triggers an animation
  container.classList.remove("hidden");
  container.classList.add("fadeIn");  // Assuming you have a 'fadeIn' animation in CSS

  console.log("All assets loaded, container is now visible and animation started.");
};
