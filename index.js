
anime({
  targets: '#demo  path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function (el, i) { return i * 250 },
  // direction: 'alternate',
  // loop: true,
  // test
  
  
});


const cursor = new MouseFollower();



  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.namePath');
    
    // Check if the container exists
    if (container) {
      // Select all paths inside the container
      const paths = container.querySelectorAll('path');
      
      // Add class "path" to each path
      paths.forEach(path => {
        path.classList.add('path');
      });
    } else {
      console.error('Container with class "namePath" not found!');
      return;  // Exit the function if container is not found
    }
  
    const paths = document.querySelectorAll(".path");
  
    // Function to set the fill color based on the path's id
    function setFillColor(id) {
      paths.forEach((path, index) => {
        if (parseInt(path.id) <= parseInt(id)) {
          path.classList.add("highlight");
        } else {
          path.classList.remove("highlight");
        }
      });
    }
  
    // Add event listener to the container for mousemove event
    container.addEventListener("mousemove", function(event) {
      const mouseX = event.clientX; // Get the X position of the mouse
      const mouseY = event.clientY; // Get the Y position of the mouse
      
      // Loop through paths to find which one is under the mouse cursor
      paths.forEach((path) => {
        const rect = path.getBoundingClientRect(); // Get bounding box of the path
        if (
          mouseX >= rect.left &&
          mouseX <= rect.right &&
          mouseY >= rect.top &&
          mouseY <= rect.bottom
        ) {
          setFillColor(path.id);
        }
      });
    });
  
    // Add event listener to reset paths on mouseout from the container
    container.addEventListener("mouseout", function() {
      // Reset all paths to remove the 'highlight' class
      paths.forEach(p => {
        p.classList.remove("highlight");
      });
    });
});


