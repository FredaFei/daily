/**
 * 登录
 * */
import useSWR from 'swr';
import { defaultHttp } from '../lib/http';

export const useSignIn = (data: { email: string, password: string }) => {
    const { data: user, mutate, error } = useSWR(`/user`, async (key) => {
        const response = await defaultHttp.post<PagedResources<CostType>>(key, {
            data,
            autoHandlerError: true
        });
        return response.data.data;
    });
    return { user, mutate, error };
};