document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    
    // Get all SVG elements inside the container
    const svgs = container.querySelectorAll("svg");
  
    // Function to check if all SVGs are loaded
    const areAllSVGsLoaded = () => {
      return [...svgs].every((svg) => {
        const img = new Image();
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);
        const dataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
        img.src = dataUri;
        return img.complete;
      });
    };
  
    // Wait for all SVGs to load
    const checkAndReveal = () => {
      if (areAllSVGsLoaded()) {
        container.classList.remove("hidden"); // Reveal the container
      } else {
        setTimeout(checkAndReveal, 100); // Retry after 100ms
      }
    };
  
    checkAndReveal();
  });
  