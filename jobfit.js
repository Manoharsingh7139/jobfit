// Get the form element
const form = document.getElementById("joinForm");

// Add event listener to form submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const degree = document.getElementById("degree").value;
  const year = document.getElementById("year").value;

  // Validate form inputs
  if (name === "" || email === "" || mobile === "" || degree === "" || year === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validateMobile(mobile)) {
    alert("Please enter a valid mobile number.");
    return false;
  }

  // Show modal with message and CTA
  showModal(`Thank you for your application, ${name}! We will get in touch with you soon.`, "Join Our Community", "https://www.google.com");
});

// Function to validate email
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Function to validate mobile number
function validateMobile(mobile) {
  const re = /^\d{10}$/;
  return re.test(String(mobile));
}

// Function to show modal with message and CTA
function showModal(message, ctaText, ctaUrl) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");
  const joinBtn = document.getElementById("joinBtn");

  // Set modal message and CTA text
  modalText.textContent = message;
  joinBtn.textContent = ctaText;

  // Add event listener to CTA button
  joinBtn.addEventListener("click", () => {
    window.location.href = ctaUrl;
  });

  // Show modal
  modal.style.display = "block";

  // Close modal when clicked outside
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
}
