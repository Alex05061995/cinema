import fetcher from '@/lib/fetcher';
import userSWR from 'swr';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = userSWR('/api/current', fetcher);

    return {
        data, error, isLoading, mutate
    }
}
export default useCurrentUser;