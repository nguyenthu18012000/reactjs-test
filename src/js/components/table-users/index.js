import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import usersInfo from '../../services/table-user-service';
import { StyleTableUserComponent } from './style';


const TableUserComponent = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(20);

    const handleClickPage = (page) => {
        setPage(page);
    }

    const getDataUser = () => {
        usersInfo.getUsersInfo(
            {
                page: page,
                numberOfUser: userPerPage
            },
            (data) => {
                setDataUsers(data?.results);
            },
            () => { }
        )
    }

    useEffect(() => {
        getDataUser();
    }, [page, userPerPage])

    return (
        <StyleTableUserComponent>
            <table>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Thumbnail Icon</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataUsers.map((data, key = 0) => (
                            <tr key={key++}>
                                <td className='name'>
                                    {data?.name?.title.concat(" ", data?.name?.first, " ", data?.name?.last)}
                                </td>
                                <td className='username'>
                                    {data?.login?.username}
                                </td>
                                <td className='thumbnail'>
                                    <img src={data?.picture?.thumbnail} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='user-pagination'>
                <Pagination className="pagination"
                    current={page}
                    total={100}
                    onChange={handleClickPage}
                    defaultPageSize={userPerPage}
                    showSizeChanger={false}
                />
            </div>
        </StyleTableUserComponent>
    );
};

export default TableUserComponent;