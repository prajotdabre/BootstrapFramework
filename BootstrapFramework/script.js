const userLogin = document.getElementById("saveChanges")

userLogin.addEventListener("click",()=>{
    const userEmail = document.getElementById("userEmail1").value
    const userPassword = document.getElementById('userPassword1').value;

    if (!userEmail || !userPassword) {
        alert('Please fill out all fields.');
        return;
      }

    const signupModal = new bootstrap.Modal(document.getElementById('signup'));
    signupModal.hide();
    alert('User logged in successfully!');
    location.reload()
})

const userSignup = document.getElementById("createAccount")

userSignup.addEventListener("click",()=>{
    const newEmail = document.getElementById("userEmail2").value
    const newPassword = document.getElementById('userPassword2').value;
    const confirmPassword = document.getElementById('confirmuserPassword2').value;

    if (!newEmail || !newPassword || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
      }

      if(newPassword !== confirmPassword ){
        alert('Passwords do not match.');
        return;
      }

    const signupModal = new bootstrap.Modal(document.getElementById('signup'));
    signupModal.hide();
    alert('Account created successfully!');
    location.reload()
})