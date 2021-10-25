import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useContext, useState, useRef } from 'react';
import SignUpModal from './SignUpModal';
import UserContext from '../context/UserContext';



const LoginModal = (props) => {

        const {
          buttonLabel,
          className
        } = props;


    const [modal,setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState('')
    
    const { logIn } = useContext(UserContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    
    

    const set = () => setModal(!modal);
    
    const closeBtn = <button className="close" onClick={set}>&times;</button>;


    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            set()
            
        } catch {
            setError("Failed to Login")
        }
        
        setLoading(false)
        
        
    }




    return(
        <div>
            <Button color="light" onClick={set}>{buttonLabel}Login</Button>
            <Modal isOpen={modal} set={set} className={className}>
                <ModalHeader close={closeBtn}>Login</ModalHeader>
                {error ? <Alert color="danger">{error}</Alert> : <div></div>}
                <ModalBody>
                    <Form onSubmit={submitHandler}>
                        <FormGroup className="formgroup">
                            <Label for="Email">Email</Label>
                            <Input type="email" name="email" id="Email" placeholder="Email" innerRef={emailRef} />
                        </FormGroup>
                        <FormGroup className="formgroup">
                            <Label for="Password">Password</Label>
                            <Input type="password" name="password" id="Password" placeholder="Password" innerRef={passwordRef} />
                        </FormGroup>
                        <Button type="submit" disable={loading} color="success">Login</Button>                                                                                    
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <p>Do not have an Account?</p>
                    <SignUpModal close={set}/>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default LoginModal;