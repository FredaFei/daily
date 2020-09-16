import React, {} from 'react';
import Layout from '../components/layout';
import { useSignUp } from '../hooks/useSignUp';

export const SignIn: React.FC = () => {
    const onSignInOrUp = () => {
    };
    const { user } = useSignUp({ email: '3@qq.com', password: '123456', password_confirmation: '123456' });
    console.log(user);
    return <Layout hasBack={false} title="SignIn">
        SignIn
        <button onClick={onSignInOrUp}>SignIn</button>
    </Layout>;
};