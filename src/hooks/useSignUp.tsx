/**
 * 注册
 * */
import useSWR from 'swr';
import { defaultHttp } from '../lib/http';

export const useSignUp = (data: { email: string, password: string, password_confirmation: string }) => {
    const { data: user, mutate, error } = useSWR('/users', async (key) => {
        const response = await defaultHttp.post(key, {
            ...data,
            autoHandlerError: true
        });
        return response
    });
    return { user, mutate, error };
};