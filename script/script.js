function validateForm() {
    //Obtém os valores dos campos dos formlários.
    const name = document.forms["frmContato"]["userName"].value.trim();
    const email = document.forms["frmContato"]["userEmail"].value.trim();
    const assunto = document.forms["frmContato"]["subject"].value.trim();
    const message = document.forms["frmContato"]["message"].value.trim();

    //Verifica se o campo "Nome" foi preenchido.
    if (name === "") {
        document.getElementById("userName-info").innerHTML = "Por favor, digite seu nome.";
        document.getElementById("userName-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["userName"].classList.add("is-invalid");
        return false;
    }

    //Verifica se o campo "Email" foi preenchido corretamente.
    if (!isValidEmail(email)) {
        document.getElementById("userEmail-info").innerHTML = "Por favor, digite um email valido.";
        document.getElementById("userEmail-info").classlist.add("invalid-feedback");
        document.forms["frmContato"]["userEmail"].classList.add("is-invalid");
        return false;
    }

    //Verifica se o campo "Assunto" foi preenchido corretamente.
    if (assunto === "") {
        document.getElementById("userSubject-info").innerHTML = "Por favor, digite um assunto valido.";
        document.getElementById("userSubject-info").classlist.add("invalid-feedback");
        document.forms["frmContato"]["subject"].classList.add("is-invalid");
        return false;
    }

    //Verifica se o campo "Mensagem" foi preenchido.
    if (message === "") {
        document.getElementById("userMessage-info").innerHTML = "Por favor, digite sua mensagem.";
        document.getElementById("userMessage-info").classlist.add("invalid-feedback");
        document.forms["frmContato"]["message"].classList.add("is-invalid");
        return false;
    }

    if (message.length < 10) {
        document.getElementById("userMessage-info").innerHTML = "Por favor, escreva uma mensagem minima de 10 caracteres.";
        document.getElementById("userMessage-info").classlist.add("invalid-feedback");
        document.forms["frmContato"]["message"].classList.add("is-invalid");
        return false;
    }

    //Retorna true caso todos os campos tenham sido preenchido corretamente.
    return true;


    function isValidEmail(email) {
        //Expressão regular para verificar se o email é valido.
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

}
