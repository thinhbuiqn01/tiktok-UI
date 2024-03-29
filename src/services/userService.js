import * as request from '~/utils/httpRequest';
export const getSuggested = async ({ page, per_page }) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserNickname = async (nickname) => {
    try {
        const res = await request.get(`/users/${nickname}`, {});
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
