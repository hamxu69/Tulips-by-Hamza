window.onload = () => {
    const container = document.querySelector(".container");
  
    if (!container) {
      console.error("No .container element found!");
      return;
    }
  
    container.classList.remove("hidden");
    console.log("All assets loaded, container is now visible.");
  };
  