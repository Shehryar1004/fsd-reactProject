const checkName = (name, setNameError) => {
    if (
        !(/^[a-zA-Z\s]+$/.test(name)) //regex to see if only contains letters and spaces
    ) {
        setNameError("Name must only contain letter and spaces");
        return false;
    }
    
    if (
        !name ||
        name.length < 6 ||
        name.length > 20 
    ) {
        setNameError("Name must be between 6 to 20 characters");
        return false;
    }

    setNameError(null);
    return true;
}

function checkEmail(email, setEmailError) {
    if (
        !(/^[^@]+@[^@.]+\.[^@.]+$/.test(email)) //regex to see if email is valid
    ) {
        setEmailError("Invalid Email");
        return false;
    }

    setEmailError(null);
    return true;
}

function checkOrganization(organization, setOrganizationError) {
    if (
        !organization ||
        organization.length < 15
    ) {
        setOrganizationError("Organization name must be greater than 15 characters");
        return false;
    }

    setOrganizationError(null);
    return true;
}

function checkMessage(message, setMessageError) {
    if (
        !message ||
        message.length < 50
    ) {
        setMessageError("Message must be greater than 50 characters");
        return false;
    }

    setMessageError(null);
    return true;
}

function checkTerms(terms, setTermsError) {
    if (!terms) {
        setTermsError("Terms must be checked");
        return false;
    }

    setTermsError(null);
    return true;
}


export {
    checkName,
    checkEmail,
    checkMessage,
    checkOrganization,
    checkTerms
}