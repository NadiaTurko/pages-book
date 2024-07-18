document
  .getElementById("subscription-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    let emails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
    if (!emails.includes(email)) {
      emails.push(email);
      localStorage.setItem("subscribedEmails", JSON.stringify(emails));
      alert("Subscribed successfully!");
    } else {
      alert("This email is already subscribed.");
    }

    document.getElementById("subscription-form").reset();
  });

/**** Responsive menu  *****/

const toggleBtn = document.querySelector(".toggle-btn"),
  toggleBtnIcon = document.querySelector(".toggle-btn i"),
  dropDownMenu = document.querySelector(".dropDown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
