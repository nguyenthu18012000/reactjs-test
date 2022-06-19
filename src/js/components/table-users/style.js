import styled from "styled-components";

const StyleTableUserComponent = styled.div`
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 20px;
    margin-bottom: 20px;

    table, th, td {
        border: 1px solid black;
    }

    table {
      width: 100%;
    }

    .name {
        width: 40%;
        padding-left: 10px;
    }

    .username {
        width: 40%;
        padding-left: 10px;
    }

    .thumbnail {
        width: 20%;

        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
    }

    .user-pagination {
        margin-top: 10px;
        margin-bottom: 10px;
        width: auto;
        
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }
`;

export { StyleTableUserComponent };
