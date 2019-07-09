import styled from 'styled-components'
import { color } from "./styles";

export default styled.div`
  display: block;
  background: ${color.tea};
  box-shadow: 1px 1px 2px 4px ${color.water};
  padding: 32px;
  margin: 8px 0;
  
`

export const InlineCenterText = styled.div`
  text-align: center;
  line-height: 24px;
  color: ${props => color[props.color]};
  background: ${props => color[props.background]};
`

export const CenterWithMargin = styled.div`
  width: 100%;
  color: ${color.ivory};
  background: ${color.camel};
  padding: 8px;

    & .inside {
        width: 80%;
        display: block;
        margin: 0 auto;
        color: ${props => color[props.color]};
        background: ${props => color[props.background]};
    }
`
export const CenterWithInline = styled.div`
  color: ${color.ivory};
  background: ${color.camel};
  display: block;
  width: auto;
  text-align: center;
  padding: 8px;

    & .inside {
        width: 80%;
        display: inline;
        color: ${props => color[props.color]};
        background: ${props => color[props.background]};
    }
`
export const CenterWithFlex = styled.div`
  color: ${color.ivory};
  background: ${color.camel};
  display: flex;
  justify-content: center;

    & .inside {
        color: ${props => color[props.color]};
        background: ${props => color[props.background]};
    }
`

export const MiddleWithLineHeight = styled.div`
  height: 5rem;
  line-height: 5rem;  
  padding: 8px;
  color: ${props => color[props.color]};
  background: ${props => color[props.background]};
`

export const MiddleWithMultipleLine = styled.div`
  color: ${color.ivory};
  background: ${color.camel};
  
  & .inside {
    display: inline-block;
    vertical-align: middle;
    height: 240px;
    color: ${props => color[props.color]};
    background: ${props => color[props.background]};
  }
`
export const MiddleWithFlex = styled.div`
  color: ${color.ivory};
  background: ${color.camel};
  display: flex;
  align-items: center;
  height: 240px;
  
  & .inside {
    color: ${props => color[props.color]};
    background: ${props => color[props.background]};
  }
`

export const HolyGrailWithFloat = styled.div`
  width: 100%;
  background: ${color.camel};
  color: ${color.ivory};
  text-align: center;
  height: 320px;
  padding: 8px;
  
  .left {
    float: left;
    width: 200px;
    height: 100%;
    background: ${color.rouge};
  }

  .right {
    float: right;
    width: 200px;
    height: 100%;
    background: ${color.bamboo};
  }

  .main {
    margin: 0 200px;
    height: 100%;
    background: ${color.indigo};
  }
`

export const HolyGrilWithPosition = styled.div`
    width: 100%;
    background: ${color.camel};
    color: ${color.ivory};
    text-align: center;
    height: 320px;
    padding: 8px;
    position: relative;

    .left, .right {
        position: absolute;
        top: 8px; 
        width: 200px;
        height: 320px;
    }
    .left { 
        left: 8px;
        background: ${color.rouge};
    }
    .right { 
        right: 8px;
        background: ${color.bamboo};
    }
    .main { 
        margin: 0 200px;
        background: ${color.indigo};
        height: 100%;
    }
`
export const HolyGrilWithNegativeMargin = styled.div`
    width: 100%;
    background: ${color.camel};
    color: ${color.ivory};
    text-align: center;
    height: 320px;
    padding: 8px;

    .left {       
        float: left;        
        width: 200px;
        margin-left: -100%;
        position: relative;  
        background: ${color.rouge};
        height: 100%;
    }   
    .right {        
        float: left;        
        width: 200px;        
        margin-left: -200px; 
        position: relative; 
        background: ${color.bamboo};
        height: 100%;
    }
    .main-wrap {        
        float: left;       
        width: 100%;   
        background: ${color.indigo};
        height: 100%;
    }
    .main {        
        margin: 0 200px;   
    }
`

export const HolyGrilWithFlex = styled.div`
    display: flex;
    width: 100%;
    background: ${color.camel};
    color: ${color.ivory};
    text-align: center;
    height: 320px;
    padding: 8px;
    
    .main {
        flex: 1;
        background: ${color.indigo};
        height: 100%;
    }

    .left, .right {
        width: auto;
        flex-basis: 200px; 
    }

    .left {
        order: -1;
        background: ${color.rouge};
        height: 100%;
    } 
    
    .right {
        background: ${color.bamboo};
        height: 100%;
    }
`

export const JustifiedWithSpaceBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
    background: ${color.camel};
    color: ${color.ivory};
    padding: 8px;
    
    & div {
      background: ${color.indigo};
      padding: 8px;
    }
    & div:nth-child(2) {
     background: ${color.rouge};
    }
`
export const JustifiedWithMargin = styled.div`
    display: flex;
    flex-direction: row;
    background: ${color.camel};
    color: ${color.ivory};
    padding: 8px;
    
    & div {
        background: ${color.indigo};
        padding: 8px;
    }
    & div:nth-child(2) {
        background: ${color.rouge};
    }
    & .right {
        margin-left: auto;
        background: ${color.tea};
        color: ${color.night};
    }
`

export const FlexBox = styled.div`
    color: ${color.ivory};
    width: 400px;
    height: 320px;
    background-color: black;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
`

export const FlexElement = styled.div`
    box-sizing: border-box;
    color: ${props => color[props.color]};
    background-color: ${props => color[props.background]};
    flex: 0 0 25%;
    text-align: center;
    height: 80px;
    line-height: 80px;
    border: 1px solid red;
    font-size: 2rem;
`

export const GridRowByFlex = styled.div`
    color: ${color.ivory};
    width: 640px;
    background-color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
`

export const GridCellByFlex = styled.div`
    flex: ${props => `0 0 ${props.width * 8.3333}%`};
    text-align: center;
    height: 80px;
    line-height: 80px;
    box-sizing: border-box;
    border: 1px solid red;
    color: ${props => color[props.color]};
    background-color: ${props => color[props.background]};
`

export const HolyGrailWithGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 64px auto 64px;
    background: ${color.camel};
    color: ${color.ivory};
     & > div{
        padding: 8px;
        text-align: center;
        font-size: 1.5rem;
     }
    
    .header {
        grid-column: 1 / -1;
        background-color: ${color.bamboo};
    }

    .left {
        grid-column: 1 / 2;
        background-color: ${color.autumn};
        color: ${color.night};
    }

    .main {
        grid-column: 2 / 12;
        background-color: ${color.rouge};
        min-height: 320px;
    }

    .right {
        grid-column: span 1 / -1;
        background-color: ${color.camel};
    }

    .footer { 
        grid-column: 1 / -1;
        background-color: ${color.lake};
        color: ${color.night};
    }
`

export const GridAreaLayout = styled.div`
    background: ${color.camel};
    color: ${color.ivory};
    height: 100%;
    display: grid;
    grid-gap: 4px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas: 
        "m m h h h h h h h h h h"
        "m m c c c c c c c c c c"
        ". . f f f f f f f f . .";
    
        @media (max-width: 600px) {
            grid-template-rows: 40px auto auto 40px;
            grid-template-areas: 
                "h h h h h h h h h h h h"
                "m m m m m m m m m m m m"
                "c c c c c c c c c c c c"
                "f f f f f f f f f f f f";
        }
        
    & > div {
        padding: 8px;
        text-align: center;
        font-size: 1.5rem;
    }
        
    .header {
        grid-area: h;
        background-color: ${color.bamboo};

        @media (max-width: 600px){
            &:hover + .menu {
                display: block;
            }
        }
    }

    .menu {
        grid-area: m;
        background-color: ${color.autumn};
        color: ${color.night};
        min-height: 320px;

        @media (max-width: 600px){
            display: none;

            &:hover {
                display: block;
            }
        }
    }

    .content {
        grid-area: c;
        background-color: ${color.rouge};
    }

    .footer {
        grid-area: f;
        background-color: ${color.lake};
        color: ${color.night};
    }
`
