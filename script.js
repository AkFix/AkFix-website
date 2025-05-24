document.addEventListener("DOMContentLoaded", function() {
    console.log("AK-Fix Website Loaded Successfully!");
    
    let services = document.querySelectorAll(".service");
    services.forEach(service => {
        service.addEventListener("mouseover", function() {
            service.style.transform = "scale(1.05)";
            service.style.transition = "0.3s";
        });
        service.addEventListener("mouseleave", function() {
            service.style.transform = "scale(1)";
        });
    });

    let bookingForm = document.querySelector("form");
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your repair request has been submitted!");
    });
});
