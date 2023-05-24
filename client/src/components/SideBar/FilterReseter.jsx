import { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../utils/context'
import { colors } from '../../styles/stylevars'

const StyledGameCount = styled.button`
  display: block;
  background-color: ${colors.darkgrey};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey};
  }
`

export default function FilterReseter() {
  const { 
    setSearchInput,
    setSortMode,
    setSortDirection,
    setSelectedGenres,
    setSelectedGamemodes
  } = useContext(AppContext);

  const handleFilterReset = () => {
    setSearchInput('');
    setSortMode('name');
    setSortDirection('asc');
    setSelectedGenres([0]);
    setSelectedGamemodes([0]);
  }

  return(
    <StyledGameCount onClick={handleFilterReset}>
      Reset filters
    </StyledGameCount>
  )
}