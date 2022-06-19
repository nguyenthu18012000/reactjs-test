import axiosHelper from "../helper/axios";

const getUsersInfo = async (
    params,
    onSuccess = () => { },
    onError = () => { }
) => {
    try {
        const getUsersInfoPath = `?page=${params.page}&results=${params.numberOfUser}`;
        const res = await axiosHelper.sendGet(getUsersInfoPath);
        if (res) {
            onSuccess(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
}

const usersInfo = {
    getUsersInfo,
};

export default usersInfo;