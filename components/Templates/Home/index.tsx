import React from 'react';
import Icon from '@/components/Atoms/Icon';
import { Styledh1, StyledIcon, StyledImage, StyledSection } from './HomeStyles'
import { StyledButton } from '@/components/Atoms/Button/ButtonStyles';

interface HomeProps {
  user: undefined | Object;
}
const HomeTemplate: React.FC<HomeProps> = ({ user }) => {
  if(user) {
    return (
      <>
        <Styledh1 htmlTag="h1">Project Management - APP</Styledh1>
        <StyledImage image='https://media.licdn.com/dms/image/D5603AQGjzVsJj5Nv0A/profile-displayphoto-shrink_200_200/0/1710380802630?e=2147483647&v=beta&t=-ZwyNSSrl6Q4GUOjGddInwox3N5nYe_JEfYaxB998tE' alt='userPhoto' width= {500} height = {500} ></StyledImage>
        <StyledIcon type={'editUser'}></StyledIcon>
        <StyledSection>
          <StyledButton>Projects</StyledButton>
          <StyledButton>Tasks</StyledButton>
        </StyledSection>
        <StyledButton>Log Out</StyledButton>
      </>
    )
  } else {
    return(
      <>
        <Styledh1 htmlTag="h1">Project Management - APP</Styledh1>
        <StyledIcon type={'unRegisteredUser'}></StyledIcon>
        <StyledSection>
          <StyledButton>Log In</StyledButton>
          <Icon type={'checkBox'}></Icon>
          <StyledButton>Register</StyledButton>
        </StyledSection>
      </>
    )
  }
  
}

export default HomeTemplate;