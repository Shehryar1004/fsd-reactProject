import { useState } from 'react';
import { Container } from "react-bootstrap";
import styles from './styles.module.css';
import {
    checkName,
    checkEmail,
    checkOrganization,
    checkMessage,
    checkTerms
} from './formValidationRules';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [organization, setOrganization] = useState('');
    const [organizationError, setOrganizationError] = useState(null);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(null);
    const [terms, setTerms] = useState(false);
    const [termsError, setTermsError] = useState(null);

    const onSubmit = () => {
        let error = false;
        if (!checkName(name, setNameError)) error = true;
        if (!checkEmail(email, setEmailError)) error = true;
        if (!checkOrganization(organization, setOrganizationError)) error = true;
        if (!checkMessage(message, setMessageError)) error = true;
        if (!checkTerms(terms, setTermsError)) error = true;
        if (!error)
            alert('Form submitted successfully!');
    }

    return(
        <Container 
            className="my-5" 
            id="form-container"
            style={{
                backgroundColor: '#1e1e1e',
                borderRadius: 8
            }}
        >
        <Container id="form" onSubmit={() => {}} className="p-5">
            <h2 class="text-center text-white">Contact Us</h2>

            <div className={styles.inputContainer}>
                <label for="name" className={styles.label}>Name</label>
                <input 
                    id="name" 
                    className={styles.input} 
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={() => checkName(name, setNameError)}
                />
                {nameError && <p class="text-danger">{nameError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <label for="email" className={styles.label}>Email</label>
                <input 
                    id="email" 
                    className={styles.input} 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => checkEmail(email, setEmailError)}
                />
                {emailError && <p class="text-danger">{emailError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <label for="organization" className={styles.label}>Organization</label>
                <input 
                    id="organization" 
                    className={styles.input} 
                    placeholder="Organization"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    onBlur={() => checkOrganization(organization, setOrganizationError)}
                />
                {organizationError && <p class="text-danger">{organizationError}</p>}
            </div>

            <div className={styles.inputContainer}>
                <label for="terms" className={styles.label}>Message</label>
                <textarea
                    id="message" 
                    className={styles.input} 
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onBlur={() => checkMessage(message, setMessageError)}
                />
                {messageError && <p class="text-danger">{messageError}</p>}
            </div>

            <div>
                <input 
                    id="terms" 
                    type="checkbox" 
                    className="m-1"
                    onChange={(e) => {
                        setTerms(e.target.checked);
                        checkTerms(e.target.checked, setTermsError)
                    }}
                />
                <label for="terms" className='text-white'>I agree to Terms and Conditions</label>
                {termsError && <p id="terms-error" className="text-danger">{termsError}</p>}
            </div>

            <button onClick={onSubmit} className={styles.submitButton}>Submit</button>
        </Container>
    </Container>
    )
}

export default ContactPage;