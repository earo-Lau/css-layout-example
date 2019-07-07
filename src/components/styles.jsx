import styled from 'styled-components'

export const color = {
    ivory: '#efdeb0',
    bamboo: '#789262',
    rouge: '#9d2932',
    camel: '#a88462',
    autumn: '#d9b612',
    lake: '#d4f2e8',
    moon: '#d7ecf1',
    indigo: '#177cb0',
    water: '#d4f2e8',
    tea: '#f3f8f1',
    night: '#313335',

};

export const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const Section = styled.section`
  margin-bottom: 8px;
  
  & header {
    border-bottom: 1px solid ${color.moon};
  }
`

export const HighLight = styled.b`
    background: ${color.lake};
    color: ${color.indigo};
    padding: 4px;
`

export const SubSection = styled.section`
 ${Section} & {
    margin-left: 16px;
    margin-bottom: 16px;
 } 
`

