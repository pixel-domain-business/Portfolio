    (function() {
        emailjs.init("WR-oGVCgHzD74rs1v"); 
    })();

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const serviceID = "service_qtve8iq";
        const templateID = "__ejs-test-mail-service__";

        const form = this;

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            }, (err) => {
                alert("Failed to send message. Please try again later.");
                console.error("EmailJS error:", err);
            });
    });
