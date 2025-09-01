document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert('Thank you! Your message has been sent.'); // Success popup
          form.reset(); // Reset the form fields
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
              alert('Oops! There was a problem submitting your form.');
            }
          });
        }
      })
      .catch(error => {
        alert('Oops! There was a problem submitting your form.');
      });
    });
  });
  