const form = document.getElementById("leadForm");

const nameError = document.getElementById("nameErrorMes");
const emailError = document.getElementById("emailErrorMes");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  responseMessage.textContent = "";

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const name = data.name.trim();
  const email = data.email.trim();
  let isValid = true;

  // Name validation
  if (!name) {
    nameError.textContent = "Name is required.";
    nameError.style.color = "red";
    isValid = false;
  }

  // Email validation
  if (!email) {
    emailError.textContent = "Email is required.";
    emailError.style.color = "red";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.color = "red";
    isValid = false;
  }

  if (!isValid) return;

  try {
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log(data)

    const result = await response.json();

    responseMessage.textContent = result.message;
    responseMessage.style.color = response.ok ? "green" : "red";

    if (response.ok) form.reset();
  } catch (error) {
    responseMessage.textContent = "Error submitting the form.";
    responseMessage.style.color = "red";
  }
});
