document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('header nav ul li a');
  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form submission
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
  
      // You can further process the form data here, such as sending it to a server via AJAX,
      // or displaying a success message to the user.
  
      // For demonstration purposes, let's just log the form data to the console.
      for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // Optionally, you can clear the form fields after submission.
      this.reset();
    });
  });
  

  