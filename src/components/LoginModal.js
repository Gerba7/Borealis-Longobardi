import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
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
    
    const { logIn, logOut } = useContext(UserContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    

    const set = () => setModal(!modal);
    
    const closeBtn = <button className="close" onClick={set}>&times;</button>;


    const submitHandler = async (e) => {
        e.preventDefault()
    
        await logIn(emailRef.current.value, passwordRef.current.value)
        console.log("Logged In")
        
        
    }



    return(
        <div>
            <Button color="light" onClick={set}>{buttonLabel}Login</Button>
            <Modal isOpen={modal} set={set} className={className}>
                <ModalHeader set={set} close={closeBtn}>Login</ModalHeader>
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
                    <Button onClick={logOut}>Log Out</Button>
                    <SignUpModal />
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default LoginModal;