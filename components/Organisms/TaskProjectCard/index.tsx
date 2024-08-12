import React from 'react'
import { StyledButton, StyledContainer, StyledIcon, StyledLi, StyledUl } from './TaskProjectCardStyles';

interface elementsProps {
  title: string;
  value: string | number;
}

// const elements: elementsProps = [
//   {
//     title: 'test',
//     value: 'titlevalue',
//   },
//   {
//     title: 'test2',
//     value: 'titlevalue',
//   },
//   {
//     title: 'test3',
//     value: 10,
//   },
// ]

interface TaskProjectCardProps{
  elements: elementsProps[]
}

const TaskProjectCard: React.FC<TaskProjectCardProps> =({ elements }) => {
  return (
    <StyledContainer>
      {elements.map((element, index) => {
        return(
          <React.Fragment key={`${index}-fragment`}>
            <StyledUl>
              <StyledLi key={`${index}-${element.title}`}>{element.title}</StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledLi key={`${index}-${element.value}`}>{element.value}</StyledLi>
            </StyledUl>
          </React.Fragment>
        )}
      )}
      <StyledUl>
        <StyledLi key={'due-date'}>Due Date</StyledLi>
        <StyledLi key={'files'}>files: </StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledLi key={'days-left'}>N Days Left</StyledLi>
        <StyledLi key={'files'}>N Files</StyledLi>
      </StyledUl>
      <StyledButton>
        <StyledIcon type='add'></StyledIcon>
        add comments
      </StyledButton>
    </StyledContainer>
  )
}

export default TaskProjectCard;