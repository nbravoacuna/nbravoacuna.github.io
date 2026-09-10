fetch('json/sidebar.json')
  .then(response => response.json())
  .then(data => {
    const sidebar = document.getElementById('sidebar');

    data.profiles.forEach(profile => {
      const link = document.createElement('a');
      link.href = profile.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const icon = document.createElement('img');
      icon.src = profile.icon;
      icon.alt = profile.name + " icon";
      icon.style = "margin-right:.5em; width:16px;";

      link.appendChild(icon);
      link.appendChild(document.createTextNode(profile.name));
      sidebar.appendChild(link);
    });
  });

fetch('json/titles-degrees.json')
  .then(response => response.json())
  .then(data => {
    const titleColumn = document.getElementById('title-column');
    const degreeColumn = document.getElementById('degree-column');

    const titleList = document.createElement('ul');
    titleList.style.listStyleType = 'circle';
    data.titleColumn.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      titleList.appendChild(li);
    });
    titleColumn.appendChild(titleList);

    const degreeList = document.createElement('ul');
    degreeList.style.listStyleType = 'circle';
    data.degreeColumn.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      degreeList.appendChild(li);
    });
    degreeColumn.appendChild(degreeList);
  })

fetch("json/education.json")
  .then(response => response.json())
  .then(educationData => {
    const container = document.getElementById("education-container");

    const firstDivider = document.createElement("hr");
    container.appendChild(firstDivider);

    educationData.forEach(item => {
      const block = document.createElement("div");
      block.className = "outreach-block";

      block.innerHTML = `
        <p class="outreach-block__title">${item.bold}</p>
        <p class="outreach-block__subtitle">${item.smallcaps}</p>

        <div class="outreach-block__columns">
          <p>${item.c1}</p>
          <p>${item.c2}</p>
          <p>${item.c3}</p>
        </div>
      `;

      container.appendChild(block);
    });
  });

fetch("json/outreach.json")
  .then(response => response.json())
  .then(outreachData => {
    const container = document.getElementById("outreach-container");

    const firstDivider = document.createElement("hr");
    container.appendChild(firstDivider);

    outreachData.forEach(item => {
      const block = document.createElement("div");
      block.className = "outreach-block";

      block.innerHTML = `
        <p class="outreach-block__title">${item.bold}</p>
        <p class="outreach-block__subtitle">${item.smallcaps}</p>

        <div class="outreach-block__columns">
          <p>${item.c1}</p>
          <p>${item.c2}</p>
          <p>${item.c3}</p>
        </div>
      `;

      container.appendChild(block);
    });
  });

fetch("json/papers.json")
  .then(response => response.json())
  .then(papersData => {
    const container = document.getElementById("papers-container");

    const firstDivider = document.createElement("hr");
    container.appendChild(firstDivider);

    papersData.forEach(item => {
      const block = document.createElement("div");
      block.className = "papers-block";

      const url = item.c1;
      const displayLink = url.replace(/^https?:\/\//, "");

      block.innerHTML = `
        <p class="papers-block__title">${item.bold}</p>
        <p class="papers-block__subtitle">${item.smallcaps}</p>
        <p class="papers-block__authors">${item.italic}</p>

        <div class="papers-block__columns">
          <p>
            🔗
            <a
              href="${item.c1}"
              rel="noopener noreferrer"
              target="_blank"
            >${displayLink}</a>
          </p>
          <p>${item.c2}</p>
        </div>
      `;

      container.appendChild(block);
    });
  });

fetch("json/posters.json")
  .then(response => response.json())
  .then(postersData => {
    const container = document.getElementById("posters-container");

    const firstDivider = document.createElement("hr");
    container.appendChild(firstDivider);

    postersData.forEach(item => {
      const block = document.createElement("div");
      block.className = "posters-block";

      block.innerHTML = `
        <p class="posters-block__title">${item.bold}</p>
        <p class="posters-block__subtitle">${item.smallcaps}</p>
        <p class="posters-block__authors">${item.italic}</p>

        <div class="posters-block__columns">
          <p>${item.c1}</p>
          <p>${item.c2}</p>
          <p>${item.c3}</p>
        </div>
      `;

      container.appendChild(block);
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector('.track');
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    scroller.appendChild(clone);
  });
});
