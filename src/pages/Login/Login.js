import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AuthCtx } from '../../contexts/auth/AuthContext';
import ErrorHandler from './ErrorHandler';
import './Login.scss';
const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ reValidateMode: 'onSubmit' });
    const { isUserLogged, login, loginErr, setError } = useContext(AuthCtx);
    const navigate = useNavigate();
    const onSubmit = data => {
        login(data);
    }

    useEffect(() => {
        if (isUserLogged) {
            setError('');
            return navigate('/counter-app');
        }
        return;
    }, [isUserLogged])

    return (
        <section className='login'>
            <div className="login__container">
                <b>Zaloguj się</b>
                {(loginErr || errors) && <ErrorHandler errors={errors} loginErr={loginErr} />}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='E-mail' {...register("email", {
                        required: {
                            value: true,
                            message: "Wprowadź adres e-mail."
                        },
                        pattern:
                        {
                            value: /@/g,
                            message: 'Podaj prawidłowy e-mail.'
                        }
                    })} />
                    <input placeholder='Hasło' type="password" {...register('password', {
                        required: {
                            value: true,
                            message: "Wprowadź hasło."
                        },
                        minLength:
                        {
                            value: 6,
                            message: "Hasło za krótkie"
                        }
                    })} />
                    <button className='primary-btn' type="submit">Zaloguj</button>
                </form>
            </div>
        </section>
    )
}

export default Login