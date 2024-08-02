document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.signup-button');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the form from submitting

        // Your custom code here
        alert('Submit button clicked!');

        // If you want to submit the form after custom code execution, you can do it manually:
        // document.getElementById('myForm').submit();
    });
});
