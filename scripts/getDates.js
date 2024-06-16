let elem = document.getElementById('year');
elem.textContent = new Date().getFullYear();

let elem2 = document.getElementById('lastModified')
elem2.textContent = `Last Modification - ${new Date(document.lastModified)}`;
