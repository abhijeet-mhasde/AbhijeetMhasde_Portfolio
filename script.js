document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownOptions = document.querySelectorAll('.dropdown-menu li a');

    // Toggle dropdown menu visibility when menu icon is clicked
    menuIcon.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior (e.g., scrolling to top)
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown menu when a dropdown option is clicked
    dropdownOptions.forEach(option => {
        option.addEventListener('click', function () {
            dropdownMenu.classList.remove('show');
        });
    });
});

// Assuming you have a form with id "myForm"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Perform form submission
        // For example, using fetch API or AJAX
        // Upon successful submission, redirect to success.html
        fetch('submit-form-url', {
            method: 'POST', // or 'GET'
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                // Redirect to success.html upon successful form submission
                window.location.href = 'success.html';
            } else {
                // Handle error response if needed
                console.error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

// Function to validate the form
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validate name
    var namePattern = /^[a-zA-Z\s]+$/; // Allow letters and spaces only
    if (!namePattern.test(name)) {
        alert("Name must contain only letters and spaces.");
        return false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// After form submission, when successful
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Additional validation before submission (if needed)
    if (validateForm()) {
        // Get the form data
        var formData = new FormData(document.getElementById("contactForm"));

        // Submit the form data to the Google Sheets endpoint
        fetch("https://script.google.com/macros/s/AKfycbyXKCkffDAZIB1euGNU4W7e4mxy8myauVd9Js9S_smSlQBYz8TV0jlDlPwU8jELUu3T/exec", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Redirect to success page
                window.location.href = "success.html";
            } else {
                throw new Error("Failed to submit form data.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to submit form data. Please try again.");
        });
    }
});