function toggleMenu(){
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }

  function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if(name === "" || email === ""){
      alert("Please fill required fields");
      return false;
    }
  
    alert("Message sent successfully!");
    return true;
  }
  function toggleServices() {
    const grid = document.getElementById("servicesGrid");
    const btn = document.querySelector(".services .view-btn");
    const section = document.querySelector(".services");
  
    grid.classList.toggle("expanded");
  
    if (grid.classList.contains("expanded")) {
      btn.innerText = "View Less";
    } else {
      btn.innerText = "View More";
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  function togglePortfolio() {
    const grid = document.getElementById("portfolioGrid");
    const btn = document.querySelector(".view-btn");
    const section = document.querySelector(".portfolio-page");
  
    grid.classList.toggle("expanded");
  
    if (grid.classList.contains("expanded")) {
      btn.innerText = "VIEW LESS";
    } else {
      btn.innerText = "VIEW ALL PRODUCTS";
  
      // scroll back when collapsing
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  function openModal() {
    document.getElementById("quoteModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("quoteModal").style.display = "none";
  }
  
  /* CLICK OUTSIDE CLOSE */
  window.onclick = function(e) {
    const modal = document.getElementById("quoteModal");
    if (e.target === modal) {
      closeModal();
    }
  };

  function openModal() {
    document.getElementById("quoteModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("quoteModal").style.display = "none";
  }
  
  window.onclick = function(e) {
    const modal = document.getElementById("quoteModal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }

  // MOBILE MENU
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
  }
  
  // MODAL OPEN
  function openModal() {
    const modal = document.getElementById('quoteModal');
    if(modal) modal.style.display = "flex";
  }
  
  // MODAL CLOSE
  function closeModal() {
    const modal = document.getElementById('quoteModal');
    if(modal) modal.style.display = "none";
  }