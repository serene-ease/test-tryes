const ht06t08_loginFormRef = document.querySelector('.task-08.lesson__06 .login-form');
ht06t08_loginFormRef.addEventListener('submit', ht06t08_onSubmit);


function ht06t08_onSubmit (event) {
    event.preventDefault();
    
    const { elements: { email, password } } = event.currentTarget;

        if (email.value === "" || password.value === "") {
            return alert(`All area must be filled`)
        }
        
        const ht06t08_FormResult = {};
        const ht06t08_loginFormData = new FormData(event.currentTarget);

        ht06t08_loginFormData.forEach(ht06t08_valueOverrider);

        
        function ht06t08_valueOverrider (value, name)
        {ht06t08_FormResult[name] = value}; 
        // console.log(ht06t08_FormResult);
        const ht06t08_result = document.createElement('p');
        ht06t08_result.classList.add('result__message')
        ht06t08_result.textContent = `entered email: ${email.value} entered password: ${password.value}`
        ht06t08_loginFormRef.appendChild(ht06t08_result)


        ht06t08_loginFormRef.reset();
}
