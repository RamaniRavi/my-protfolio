function prepareEmail() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construct the formal email content
    const emailBody = `Dear Ravi,\n\nMy name is ${name}, and I would like to get in touch with you regarding ${subject}. Below are the details of my inquiry:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nThank you for your time and consideration. I look forward to your response.\n\nBest regards,\n${name}\n${email}`;

    // Construct the mailto link
    const mailtoLink = `mailto:ramaniravi3650@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Prevent form submission
    return false;
}
