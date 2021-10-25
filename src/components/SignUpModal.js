import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useState, useContext, useRef } from 'react';
import UserContext from '../context/UserContext';


const SignUpModal = (props,{close}) => {

        const {
          buttonLabel,
          className
        } = props;

    const [nestedModal,setNestedModal] = useState(false);

    const setNested = () => setNestedModal(!nestedModal);
    
    const closeBtn = <button className="close" onClick={setNested}>&times;</button>;

    const nameRef = useRef()
    const surnameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useContext(UserContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    

    

    const submitHandler = async (e) => {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords are different')
        }

        try{
            setError("")
            setLoading(true)    
            await signUp(emailRef.current.value, passwordRef.current.value, nameRef.current.value, surnameRef.current.value, phoneRef.current.value)
            console.log("Signed Up")
            setNested()

            
        } catch {
            setError("Failed to create User")
        }               
        
        setLoading(false)
        
    }   
    

    return(
        <div>
                    <Button onClick={setNested} color="primary">{buttonLabel}Sign Up</Button>
                    <Modal isOpen={nestedModal} set={setNested} className={className}>
                        <ModalHeader set={nestedModal} close={closeBtn}>Sing Up</ModalHeader>
                        {error ? <Alert color="danger">{error}</Alert> : <div></div>}
                        <ModalBody>
                            <Form onSubmit={submitHandler}>
                                <FormGroup className="formgroup">
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="Name" placeholder="Name" innerRef={nameRef}/>
                                </FormGroup>
                                <FormGroup className="formgroup">
                                    <Label for="surname">Surname</Label>
                                    <Input type="text" name="surname" id="Surname" placeholder="Surname" innerRef={surnameRef}/>
                                </FormGroup>
                                <FormGroup className="formgroup">
                                    <Label for="phone">Phone</Label>
                                    <Input type="tel" name="phone" id="Phone" placeholder="1123232323" pattern="11[0-9]{4}[0-9]{4}" innerRef={phoneRef} required />
                                </FormGroup>
                                <FormGroup className="formgroup">
                                    <Label for="Email">Email</Label>
                                    <Input type="email" name="email" id="Email" placeholder="Email" innerRef={emailRef} required />
                                </FormGroup>
                                <FormGroup className="formgroup">
                                    <Label for="Password">Password</Label>
                                    <Input type="password" name="password" id="Password" placeholder="Password" innerRef={passwordRef} required />
                                </FormGroup>
                                <FormGroup className="formgroup">
                                    <Label for="ConfirmPassword">Confirm Password</Label>
                                    <Input type="password" name="confirmpassword" id="ConfirmPassword" placeholder="Confirm Password" innerRef={passwordConfirmRef} required />
                                </FormGroup>
                                <Button type="submit" disable={loading} color="primary">Submit</Button>                                                                                    
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={setNested}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
        </div>
    );

    
}

export default SignUpModal;