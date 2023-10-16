function composeEmail() {
    // Change these variables accordingly
    const subject = 'Payment Reminder';
    const body = `This is a reminder that your payment is due on ${dueDate}.`;
  
    // Construct the mailto URL with the subject and body
    const mailtoURL = `mailto:${clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the default email client
    window.open(mailtoURL);
  }
