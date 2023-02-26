import styled from '@emotion/styled';

export const ContactListMarkup = styled.ul`
   list-style: none;
`;

export const ContactElement = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
   width: 400px;
   box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

export const DeleteButton = styled.button`
   margin: 10px;
   width: 80px;
   height: 30px;
   border-radius: 10px;
`;
