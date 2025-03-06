import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/img/logo.png';

function Login ({showPassword, togglePasswordVisibility}) {
    return (
        <>
            <Card style={{ width: '18rem' }} className='loginCard'>
                <Card.Body>
                    <Card.Img variant='top' src={Logo} style={{ height: '150px', width: '120px' }} />
                    <Card.Title>Acceder a IcelSpain</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Introducir e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <div className="pass-container">
                                <Form.Control 
                                type= {showPassword ? 'text' : 'password'}
                                 placeholder="Contraseña" 
                                 />
                                <FontAwesomeIcon 
                                icon={ showPassword ? faEyeSlash : faEye} 
                                className='eye-icon' 
                                onClick={togglePasswordVisibility}
                                />
                            </div>
                        </Form.Group>
                        <Button variant="dark" type="submit" size='lg'>
                            Acceder
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Login;