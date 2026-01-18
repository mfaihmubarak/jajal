function goTo(page) {
  window.location.href = page;
}

function goHome() {
  window.location.href = "index.html";
}

function goMap() {
  window.location.href = "map.html";
}

function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop();
  const navButtons = document.querySelectorAll(".bottom-nav button");

  navButtons.forEach(btn => btn.classList.remove("active"));

  if (path === "index.html" || path === "") navButtons[0]?.classList.add("active");
  else if (path === "map.html") navButtons[1]?.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("searchInput");

  if (search) {
    search.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        const tujuan = search.value.trim();
        if (tujuan !== "") {
          window.open(`https://www.google.com/maps/search/${encodeURIComponent(tujuan)}`, "_blank");
        }
      }
    });
  }
});
