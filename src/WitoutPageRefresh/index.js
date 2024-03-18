// import { Table } from 'antd';
// import React, { useEffect, useState } from 'react';

// const WithoutRefresh = () => {
//     const [state, setState] = useState([]);
//     const FakeApi = async () => {
//         const ResponseData = await fetch('https://jsonplaceholder.typicode.com/users')
//             .then(d => d.json()).then(data => setState(data));
//     }

//     useEffect(() => {
//         FakeApi();
//     }, [])
//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//         },
//         {
//             title: 'Phone',
//             dataIndex: 'phone',
//         },
//         {
//             title: 'Email',
//             dataIndex: 'email'
//         }, {
//             title: 'Website',
//             dataIndex: 'website'
//         },
//         {
//             title: 'delete',
//             dataIndex: 'delete',
//             render: (record) => (
//                  state.length >= 1 ? (
//                     <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//                         <a>Delete</a>
//                     </Popconfirm>
//                 ) : null,
//             )
//         }
//     ]
//     return (
//         <>
//             <Table dataSource={state} columns={columns} />
//         </>
//     )
// }
// export default WithoutRefresh;