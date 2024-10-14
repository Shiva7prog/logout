
let confirmLogout = confirm("Are you sure you want to log out?");


if (confirmLogout) {
    
    alert("Logging you out... Please wait.");
    
    
    setTimeout(function() {
        alert("You have been successfully logged out.");
        
        window.location.href = "login.html";
    }, 3000);
} else {
    
    alert("Logout canceled. You are still logged in.");
}