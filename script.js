// Vocabulary and grammatical data for body parts
const bodyPartsData = {
  "head-1": { nominative: "heafod", accusative: "heafod", dative: "heafode", genitive: "heafodes" },
  "torso-1": { nominative: "truma", accusative: "truman", dative: "truman", genitive: "truman" },
  "left-arm-1": { nominative: "eaxl", accusative: "eaxle", dative: "eaxle", genitive: "eaxles" },
  "right-arm-1": { nominative: "eaxl", accusative: "eaxle", dative: "eaxle", genitive: "eaxles" },
  "left-leg-1": { nominative: "sceanca", accusative: "sceancan", dative: "sceancan", genitive: "sceancan" },
  "right-leg-1": { nominative: "sceanca", accusative: "sceancan", dative: "sceancan", genitive: "sceancan" }
};

// Load the SVG and add hover functionality
const svgObject = document.getElementById('svgObject'); // The <object> element containing the SVG
const infoTable = document.getElementById('infoTable'); // The table to display data

svgObject.addEventListener('load', () => {
  const svgDoc = svgObject.contentDocument; // Access the internal SVG DOM

  // Iterate over the body parts in our data
  Object.keys(bodyPartsData).forEach(id => {
    const part = svgDoc.getElementById(id); // Find the SVG region by ID
    if (part) {
      // Add a hover event listener
      part.addEventListener('mouseover', (event) => {
        const data = bodyPartsData[id]; // Retrieve data for this body part
        if (data) {
          // Update the table with the data
          document.getElementById('nom').textContent = data.nominative;
          document.getElementById('acc').textContent = data.accusative;
          document.getElementById('dat').textContent = data.dative;
          document.getElementById('gen').textContent = data.genitive;

          // Display the table near the cursor
          infoTable.style.display = 'block';
          infoTable.style.top = `${event.clientY + 10}px`;
          infoTable.style.left = `${event.clientX + 10}px`;
        }
      });

      // Add a mouseout event listener to hide the table
      part.addEventListener('mouseout', () => {
        infoTable.style.display = 'none';
      });
    }
  });
});
