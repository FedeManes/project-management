import React from 'react';
import { StyledContainer, Styledh1, StyledIcon, StyledLi, StyledUl } from './ProjectTaskStyles'
import SearchBar from '@/components/Molescules/SearchBar';
import TaskProjectCard from '@/components/Organisms/TaskProjectCard';
import Head from 'next/head';
import { StyledNav } from '@/components/Molescules/NavBar/NavBarStyles';
import NavBar from '@/components/Molescules/NavBar';

interface filterPropr{
  title: string;
  values: string[] | string;
}

interface elementProps{
  title: string;
  value: string | number;
}

interface ProjectTaskProps {
  text: string;
  filters: filterPropr[];
  elements: elementProps[]
}

const ProjectTaskTemplate: React.FC<ProjectTaskProps> = ({ text, filters, elements }) => {
  return (
    <>
      <Head>
        <title>Project Management App</title>
      </Head>
      <Styledh1 htmlTag='h1'>{text}</Styledh1>
      <NavBar links={[
        {
          path:'/',
          name:'Home',
        },
        {
          path:'/projects',
          name:'Projects',
        },
        {
          path:'/tasks',
          name:'Tasks',
        },
      ]}></NavBar>
      <StyledContainer>
        <StyledUl>
          <StyledLi key={1}><StyledIcon type='checkBox'></StyledIcon>Show Completed</StyledLi>
          <StyledLi key={2}><StyledIcon type='clickedCheckBox'></StyledIcon>Show Completed</StyledLi>
          <StyledLi key={3}><StyledIcon type='checkBox'></StyledIcon>Assigned to me</StyledLi>
          <StyledLi key={4}><StyledIcon type='clickedCheckBox'></StyledIcon>Assigned to me</StyledLi>
        </StyledUl>
        <SearchBar text='task' filters={filters} icons={['mayor','menor']}></SearchBar>
        <TaskProjectCard elements={elements}>
        </TaskProjectCard>
      </StyledContainer>
    </>
  )
}
  
export default ProjectTaskTemplate;