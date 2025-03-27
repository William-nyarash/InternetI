document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("Form submitted successfully!");
        form.submit(); // Only submit if all validations pass
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
