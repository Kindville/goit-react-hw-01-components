import styled from '@emotion/styled'
export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: #ffffff;
  width: 200px;
  height: 70px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
export const OnlineStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`
export const Avatar = styled.img`
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #575454;
  border-radius: 30%;
`
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  `
