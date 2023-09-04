// Form validation
const form = document.querySelector('.contact__form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    Array.from(this.elements).forEach(function(element) {
        if (element.required && !element.value.trim()) {
            element.classList.add('is-invalid');
            isValid = false;
        } else {
            element.classList.remove('is-invalid');
        }
    });

    if (isValid) {
        this.submit();
    }
});

// Show/hide input error messages (for demonstration purposes only)
const inputs = document.querySelectorAll('.contact__input');

inputs.forEach(function(input) {
    input.addEventListener('invalid', function(event) {
        event.preventDefault();
        this.nextElementSibling.style.display = 'block';
    });

    input.addEventListener('input', function() {
        this.nextElementSibling.style.display = 'none';
    });
});
