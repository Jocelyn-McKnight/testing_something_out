const bodyPartsData = {
  "head-1": { nominative: "heafod", accusative: "heafod", dative: "heafode", genitive: "heafodes" },
  "torso-1": { nominative: "truma", accusative: "truman", dative: "truman", genitive: "truman" },
  // Add more body parts here
};

const svgObject = document.getElementById('svgObject');
const infoTable = document.getElementById('infoTable');

svgObject.addEventListener('load', () => {
  const svgDoc = svgObject.contentDocument; // Access the SVG's internal DOM
  Object.keys(bodyPartsData).forEach(id => {
    const part = svgDoc.getElementById(id);
    if (part) {
      part.addEventListener('mouseover', (event) => {
        const data = bodyPartsData[id];
        if (data) {
          document.getElementById('nom').textContent = data.nominative;
          document.getElementById('acc').textContent = data.accusative;
          document.getElementById('dat').textContent = data.dative;
          document.getElementById('gen').textContent = data.genitive;
          infoTable.style.display = 'block';
          infoTable.style.top = `${event.clientY + 10}px`;
          infoTable.style.left = `${event.clientX + 10}px`;
        }
      });
      part.addEventListener('mouseout', () => {
        infoTable.style.display = 'none';
      });
    }
  });
});
