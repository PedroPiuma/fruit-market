import styled from 'styled-components'

export const Container = styled.div`
display: ${props => props.display ? 'fixed' : 'flex'};
align-items: center;
justify-content: space-around;
border: 1px solid blue;
border-radius: 15px;
padding: 5px;
gap: 5px;
top: ${props => props.display ? 0 : ''};
`
