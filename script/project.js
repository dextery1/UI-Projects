const projects = [
  {
    url: "/html/home.html",
    icon: "fa-search",
    title: "Google Search",
    desc: "Developed a Basic Google Search Engine layout",
  },
  {
    url: "/html/card.html",
    icon: "fa-id-card",
    title: "Business Card",
    desc: "Created a Personal Business Card",
  },
  {
    url: "/html/space.html",
    icon: "fa-rocket",
    title: "Space Page",
    desc: "Created a Space Page with gif",
  },
  {
    url: "/html/gift.html",
    icon: "fa-gift",
    title: "Gift Page",
    desc: "Created a Creative Gift Page",
  },
  {
    url: "/html/js-project.html",
    icon: "fa-sort-numeric-up-alt",
    title: "Number Counter",
    desc: "Created a Number Counter",
  },
  {
    url: "/html/tempt.html",
    icon: "fa-thermometer-full",
    title: "Temperature Conversion",
    desc: "Created a Temperature Conversion",
  },
];

const projectsPerPage = 4;
let currentPage = 1;

function displayProjects() {
  const projectList = document.getElementById("projectList");
  projectList.innerHTML = "";

  const start = (currentPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const paginatedProjects = projects.slice(start, end);

  paginatedProjects.forEach((project) => {
    projectList.innerHTML += `
      <li>
        <a href="${project.url}">
          <i class="fa ${project.icon}"></i> ${project.title}
        </a>
        <p class="desc">${project.desc}</p>
      </li>
    `;
  });

  setupPagination();
}

function setupPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("span");
    pageNumber.className = "page-number";
    pageNumber.textContent = i;

    if (i === currentPage) {
      pageNumber.classList.add("active");
    }

    pageNumber.onclick = function () {
      currentPage = i;
      displayProjects();
    };

    pagination.appendChild(pageNumber);
  }
}

document.addEventListener("DOMContentLoaded", displayProjects);
