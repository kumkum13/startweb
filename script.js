// function validateForm() {
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     // Check if any field is empty
//     if (firstName === "" || lastName === "" || phone === "" || email === "" || message === "") {
//         toastr.error("All fields are required!");
//         return false;
//     }

//     // Check email format
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         toastr.error("Please enter a valid email address!");
//         return false;
//     }

//     // Check phone number format
//     var phonePattern = /^\d{10}$/;
//     if (!phonePattern.test(phone)) {
//         toastr.error("Please enter a valid 10-digit phone number!");
//         return false;
//     }

//     // Validation passed
//     toastr.success("Form submitted successfully!");
//     return true;
// }

// let toastbox = document.getElementById('toast-box');
// function showTost(){

//      let toast = document.createElement('div');
//      toast.classList.add('toast');
//      toast.innerHTML ='success';
//      toastbox.appendChild(toast);
// }





