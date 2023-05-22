import styled from "styled-components";

export const UserList = styled.div`
  margin-left: 3%;
  .userList h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28%;
    font-size: 2rem;
    padding: 0 0 2rem;
    padding-left: 9rem;
  }
`;
export const UsersTable = styled.table`
  margin: 3rem auto;
  width: 80%;
  background-color: rgb(255, 252, 246);
  border-collapse: collapse;
  border: 1px solid ${(props) => props.theme.pallet.primaryText};

  td,th {
    padding: 0.6rem;
    text-align: center;
    border: 1px solid rgb(37, 37, 41);
    font-size: 1.1rem;
    color: ${(props) => props.theme.pallet.primaryText};
  }
  tr:hover {
    background-color: rgb(206, 203, 203);
  }
  td a {
    text-decoration: none;
    color: rgb(47, 133, 182);
  }
  th {
    padding: 1rem;
    font-size: 1.5rem;
    background-color: rgb(206, 203, 203);
  }
`;
export const Delete = styled.button`
  font-size: 1.5rem;
  color: red;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
