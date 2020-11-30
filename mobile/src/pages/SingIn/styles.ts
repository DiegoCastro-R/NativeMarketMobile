import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
padding: 0 30px;
`;

export const Title = styled.Text`
font-size: 24px;
color: #3f3f3f;
font-family: 'RobotoSlab-Medium';
margin: 10px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
margin-top: 24px;`;

export const ForgotPasswordText = styled.Text`
color: #3f3f3f;
font-size: 16px;
font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
position: absolute;
left: 0;
bottom: 0;
right: 0;
border-top-width: 1px;
background: #dbd4ce;
border-color: #fff9;
padding: 16px 0px;

justify-content: center;
align-items: center;
flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
color: #3f3f3f;
font-size: 18px;
font-family: 'RbotoSlab-Regular';
margin-left: 16px; `;