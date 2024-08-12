import React from 'react'
import { StyledButton, StyledContainer, StyledForm, StyledIcon, StyledInput, StyledLi, StyledP, StyledSpan, StyledUl } from './SearchBarStyles';

interface FilterProps {
    title: string;
    values: string[] | string;
}

type IconType = 'search' | 'checkBox' | 'clickedCheckBox' | 'unRegisteredUser' | 'editUser' | 'separator' | 'dropDown' | 'mayor' | 'menor';

// const icons: IconType[] = ['mayor', 'menor'];

// const filters: FilterProps[] = [
//   { title: 'Project', values: ['setProjects'] },
//   { title: 'Due Date', values: 'colocar cant de dias' },
//   { title: 'Status', values: ['Completed', 'In Progress', 'Pending'] },
//   { title: 'Search with key words', values: 'escriba aquí ...' },
// ];

interface SearchBarProps {
    text: string;
    filters: FilterProps[];
    icons: IconType[];
}

// eslint-disable-next-line no-console
const search=() => (console.log('Deslogueado'))

const SearchBar: React.FC<SearchBarProps> =({ text, filters, icons }) => {
  return (
    <>
      <StyledForm>
        <StyledUl>
          <StyledLi key={`Search your`}>
            <StyledInput value={`Search your ${text}`}></StyledInput>
          </StyledLi>
          <StyledLi key={'search'}>
            <StyledButton onClick={search}>
              <StyledIcon type='search'></StyledIcon>
            </StyledButton>
          </StyledLi>
        </StyledUl>
        <StyledUl>
          {
            filters.map((filter,index)=>{
              return(
                <StyledLi key={`${index}-${filter.title}`}>{filter.title}</StyledLi>
              )
            })
          }
        </StyledUl>
        <StyledUl>
          {
            filters.map((filter,index)=>{
              if (index===0 || index === 2){
                return (
                  <React.Fragment key={`${index}-fragment`}>
                    <StyledIcon type="dropDown" />
                    {Array.isArray(filter.values) &&
                      filter.values.map((value, i) => (
                        <StyledLi key={`${index}-${value}-${i}`}>{value}</StyledLi>
                      ))}
                  </React.Fragment>
                );
              } else if(index === 1){
                return(
                  <StyledContainer key={`${index}-container`}>
                    <StyledIcon type='dropDown'/>
                    <StyledUl key={`${index}--ul`}>
                      {icons.map((icon, iconIndex) => {
                        return(
                          <StyledLi key={`${iconIndex}-${icon}`}>
                            <StyledIcon key={iconIndex} type={icon}/>
                          </StyledLi>
                        )
                      })}
                    </StyledUl>
                    <StyledSpan>{filter.values}</StyledSpan>
                  </StyledContainer>
                )
              } else{
                return(
                  <StyledLi key={`${index}-${filter.values}`}>{filter.values}</StyledLi>
                )
              }
            })
          }
        </StyledUl>
      </StyledForm>
    </>
  )
} 

export default SearchBar;