import React from 'react';
import './App.css';
import Code from './components/pre-code'
import * as SC from './components/styles'
import Example, {
    InlineCenterText,
    CenterWithMargin,
    CenterWithInline,
    CenterWithFlex,
    MiddleWithLineHeight,
    MiddleWithMultipleLine,
    HolyGrailWithFloat,
    HolyGrilWithPosition,
    HolyGrilWithNegativeMargin,
    HolyGrilWithFlex,
    JustifiedWithSpaceBetween,
    FlexBox,
    FlexElement,
    GridRowByFlex,
    GridCellByFlex,
    HolyGrailWithGrid,
    GridAreaLayout,
    JustifiedWithMargin, MiddleWithFlex
} from "./components/example";

function App() {
    return (
        <div className="App">
            <SC.Main>

                <header>
                    <h1>
                        你应该知道的 CSS 布局
                    </h1>
                </header>

                <div>
                    <ul>
                        <li>
                            居中
                            <ul>
                                <li>
                                    水平居中
                                </li>
                                <li>
                                    垂直居中
                                </li>
                            </ul>
                        </li>
                        <li>
                            圣杯布局
                        </li>
                        <li>
                            Flex box 布局
                        </li>
                        <li>
                            Grid 布局
                        </li>
                    </ul>
                </div>

                <SC.Section>
                    <header>
                        <h2>居中</h2>
                    </header>
                    <SC.SubSection>
                        <h3>水平居中</h3>
                        <SC.SubSection>
                            <h5>
                                行内文本居中：使用 <SC.HighLight>text-align</SC.HighLight> 属性
                            </h5>

                            <Code>
                                {`
.inline-center {
    text-align: center;
}
 `}
                            </Code>
                            <Example>
                                实例:
                                <InlineCenterText color={'ivory'} background={'camel'}>
                                    行内文本
                                </InlineCenterText>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>固定宽度的 block 元素, 利用 <SC.HighLight>margin: auto</SC.HighLight></h5>
                            <Code>
                                {`
.width-block-center {
    width: 80%;
    display: block;
    margin: 0 auto;
}
                            `}
                            </Code>

                            <Example>
                                实例:
                                <CenterWithMargin color={'tea'} background={'autumn'}>
                                    外部空间
                                    <div className={'inside'}>
                                        内部容器
                                    </div>
                                </CenterWithMargin>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>
                                非固定宽度的 block 元素, 父元素设置 <SC.HighLight>text-align</SC.HighLight>,
                            让子元素使用 <SC.HighLight>display: inline</SC.HighLight> 布局
                            </h5>

                            <Code>
                                {`
.non-width-block-wrapper{
    display: block;
    width: auto;
    text-align: center;
}

.nom-width-block-center {
    display: inline;
}
                            `}
                            </Code>
                            <Example>
                                实例:
                                <CenterWithInline color={'tea'} background={'autumn'}>
                                    <div>
                                        外部空间
                                    </div>

                                    <div className={'inside'}>
                                        内部容器
                                    </div>
                                </CenterWithInline>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>使用 Flex 布局</h5>

                            <Code>
                                {`
.flex-div{
    display: flex;
    justify-content: center; 
}
                            `}
                            </Code>
                            <Example>
                                实例:
                                <CenterWithFlex color={'tea'} background={'autumn'}>
                                    <div>
                                        外部空间
                                    </div>
                                    <div className={'inside'}>
                                        行内文本
                                    </div>
                                </CenterWithFlex>
                            </Example>
                        </SC.SubSection>
                    </SC.SubSection>
                    <SC.SubSection>
                        <h3>垂直居中</h3>
                        <div>
                            <SC.SubSection>
                                <h5>使单行内联文本, 通过父元素设置 <SC.HighLight>line-height</SC.HighLight>, 从而让子元素垂直居中</h5>

                                <Code>
                                    {`
.vertical-box {
    height: 5rem;
    line-height: 5rem;
} 
                                `}
                                </Code>
                                <Example>
                                    实例:
                                    <MiddleWithLineHeight color={'tea'} background={'autumn'}>
                                        行内文本
                                    </MiddleWithLineHeight>
                                </Example>
                            </SC.SubSection>
                            <SC.SubSection>
                                <h5>多行内联文本，通过内部元素设置 <SC.HighLight>display: inline-block</SC.HighLight>,
                                同时设置 <SC.HighLight>vertical-align: middle</SC.HighLight>，可以让兄弟元素竖直居中</h5>

                                <Code>
                                    {`
.vertical-box-wrapper {
    display: inline-block;
}
.vertical-box {
    vertical-align: middle;
}
                                `}
                                </Code>
                                <Example>
                                    实例:
                                    <MiddleWithMultipleLine color={'tea'} background={'autumn'}>
                                        外部空间
                                        <div className={'inside'}>
                                            行内文本
                                        </div>
                                        外部空间
                                    </MiddleWithMultipleLine>
                                </Example>
                            </SC.SubSection>
                            <SC.SubSection>
                                <h5>使用 Flex 布局</h5>

                                <Code>
                                    {`
.vertical-box-flex {
      display: flex;
      align-items: center;
  }
                                `}
                                </Code>
                                <Example>
                                    实例:
                                    <MiddleWithFlex color={'tea'} background={'autumn'}>
                                        外部空间
                                        <div className={'inside'}>
                                            行内文本
                                        </div>
                                    </MiddleWithFlex>
                                </Example>
                            </SC.SubSection>
                        </div>
                    </SC.SubSection>

                </SC.Section>
                <SC.Section>
                    <header>
                        <h2>圣杯布局(双飞翼布局)</h2>
                    </header>
                    <SC.SubSection>
                        <SC.SubSection>

                            <h5>所谓圣杯布局是指采用左右等宽(固定宽度)，中间自适应的三列布局模式。</h5>
                            <table style={{width: '100%'}}>
                                <tr>
                                    <th>
                                        Left
                                    </th>
                                    <th>
                                        Main
                                    </th>
                                    <th>
                                        Right
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        等宽
                                    </td>
                                    <td>
                                        自适应
                                    </td>
                                    <td>
                                        等宽
                                    </td>
                                </tr>
                            </table>
                        </SC.SubSection>

                        <SC.SubSection>

                            <h5>左右列固定宽度，使用 <b>float + margin</b> 的实现</h5>
                            <Code>
                                {` 
.left {
    float: left;
    width: 200px;
}

.right {
    float: right;
    width: 200px;
}

.main {
    margin: 0 200px;
}
                            `}
                            </Code>
                            <Example>
                                实例:
                                <HolyGrailWithFloat>
                                    <div className={'right'}>右边</div>
                                    <div className={'left'}>左边</div>
                                    <div className={'main'}>中间</div>
                                </HolyGrailWithFloat>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>左右列固定宽度，通过 <SC.HighLight>position + margin</SC.HighLight> 的实现</h5>

                            <Code>
                                {`
.left, .right {
    position: absolute;
    top: 0; 
    width: 200px;
}
.left { 
    left: 0;
}
.right { 
    right: 0; 
}
.main { 
    margin: 0 200px;
}
                                
                            `}
                            </Code>
                            <Example>
                                实例:
                                <HolyGrilWithPosition>
                                    <div className={'right'}>右边</div>
                                    <div className={'left'}>左边</div>
                                    <div className={'main'}>中间</div>
                                </HolyGrilWithPosition>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>(双飞翼)左右列固定宽度，通过 <SC.HighLight>float + 负margin</SC.HighLight> 的实现</h5>

                            <Code>
                                {`
.left {       
    float: left;        
    width: 200px;        
    margin-left: -100%;               
    position: relative;  
    left: -200px;  
}   
.right {        
    float: left;        
    width: 200px;        
    margin-left: -200px; 
    position: relative; 
    right: -200px;  
}
.main-wrap {        
    float: left;       
    width: 100%;   
}
.main {        
    margin: 0 200px;   
}
                            `}
                            </Code>
                            <Example>
                                实例:
                                <HolyGrilWithNegativeMargin>
                                    <div className={'main-wrap'}>
                                        <div className={'main'}>
                                            中间
                                        </div>
                                    </div>
                                    <div className={'left'}>左边</div>
                                    <div className={'right'}>右边</div>
                                </HolyGrilWithNegativeMargin>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>使用 Flex 布局实现</h5>

                            <Code>
                                {`
.wrapper{
    display: flex;
}

.main {
    flex: 1;
}

.left, .right {
    width: auto;
    flex-basis: 200px; 
    width: 200px;
}

.left {
    order: -1;
} 
                            `}
                            </Code>
                            <Example>
                                实例:
                                <HolyGrilWithFlex>
                                    <div className={'main'}>
                                        中间
                                    </div>
                                    <div className={'left'}>
                                        左边
                                    </div>
                                    <div className={'right'}>
                                        右边
                                    </div>
                                </HolyGrilWithFlex>
                            </Example>
                        </SC.SubSection>
                    </SC.SubSection>

                </SC.Section>

                <SC.Section>
                    <header>
                        <h2>Flex 布局</h2>
                    </header>
                    <div>
                        <Example>
                            属性介绍：
                            <div>
                                flex 父元素
                                <ul>

                                    <li> flex-direction: 子元素的排列方向</li>
                                    <li> flex-wrap: 子元素的换行设置</li>
                                    <li> justify-content: 子元素在水平轴上的对齐方式</li>
                                    <li> align-items: 子元素在竖直轴上的对齐方式</li>
                                    <li> align-content: 多行子元素的时候，所有行的对齐方式</li>
                                </ul>
                            </div>

                            <div>
                                flex 子元素

                                <ul>
                                    <li> order: 子元素排序</li>
                                    <li> flex-grow: 子元素在单行中占的放大比例，默认 0 (既不会自动填充比例)</li>
                                    <li> flex-shrink: 子元素在单行中占的缩放比例, 默认 0 (既不会自动缩放比例)</li>
                                    <li> flex-basis: 子元素在进行自动填充/缩放之前，元素占用的宽度(可为百分比)</li>
                                    <li> flex: {`<flex-grow> | <flex-shrink> | <flex-basis>`}</li>
                                    <li> align-self: 为当前子元素显示声明竖直轴的对齐方式，将会覆盖父元素的 align-items</li>
                                </ul>
                            </div>
                        </Example>
                        

                        <SC.SubSection>
                            <h5>使用 <SC.HighLight>justify-content</SC.HighLight> 两端对齐</h5>

                            <Code>
                                {` 
.panel-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
                            `}
                            </Code>
                            <Example>
                                实例1:
                                <JustifiedWithSpaceBetween>
                                    <div>
                                        内部文本1
                                    </div>
                                    <div>
                                        内部文本2
                                    </div>
                                </JustifiedWithSpaceBetween>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>对于多于两个子元素的两端对齐,
                                使用 <SC.HighLight>margin-left: auto</SC.HighLight> 使子元素自动对齐到右侧</h5>

                            <Code>
                                {` 
.panel-title {
    display: flex;
    flex-direction: row;
}

.right-option{
    margin-left: auto;
}
                            `}
                            </Code>
                            <Example>
                                实例1:
                                <JustifiedWithMargin>
                                    <div>
                                        内部文本1
                                    </div>
                                    <div>
                                        内部文本2
                                    </div>
                                    <div className={'right'}>
                                        内部文本3
                                    </div>
                                </JustifiedWithMargin>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>流式布局:
                            即容器宽度固定，内部自动填充并且自动换行</h5>
                            <Code>
                                {`
.parent {
    width: 600px;
    height: 400px;
    background-color: black;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start; 
}

.child {
    box-sizing: border-box;
    background-color: white;
    flex: 0 0 25%;
    height: 12px;
    border: 1px solid red;
}
                            `}
                            </Code>

                            <Example>
                                <FlexBox>
                                    <FlexElement color={'night'} background={'water'}>1</FlexElement>
                                    <FlexElement color={'ivory'} background={'rouge'}>2</FlexElement>
                                    <FlexElement color={'night'} background={'autumn'}>3</FlexElement>
                                    <FlexElement color={'night'} background={'bamboo'}>4</FlexElement>
                                    <FlexElement color={'night'} background={'indigo'}>5</FlexElement>
                                    <FlexElement color={'night'} background={'tea'}>6</FlexElement>
                                    <FlexElement color={'ivory'} background={'camel'}>7</FlexElement>
                                    <FlexElement color={'ivory'} background={'night'}>8</FlexElement>
                                    <FlexElement color={'ivory'} background={'bamboo'}>9</FlexElement>
                                    <FlexElement color={'ivory'} background={'camel'}>10</FlexElement>
                                </FlexBox>
                            </Example>
                        </SC.SubSection>
                        <SC.SubSection>
                            <h5>基于Flex 的栅格系统(Grid System):
                            栅格系统把容器进行12等分，在定义子元素的时候，根据需要定义子元素的宽度</h5>

                            <Code>
                                {`
.grid {
    display: flex;
}

.grid-cell {
    flex: 1;
}

.grid-cell.cell-1 {
    flex: 0 0 8.3333%;
}
.grid-cell.cell-2 {
    flex: 0 0 16.6667%;
}
.grid-cell.cell-3 {
    flex: 0 0 25%;
}
.grid-cell.cell-4 {
    flex: 0 0 33.3333%;
}
...
.grid-cell.cell-12 {
    flex: 0 0 100%;
}
                            `}
                            </Code>
                            <Example>
                                实例:
                                <GridRowByFlex>
                                    <GridCellByFlex width={1} color={'night'} background={'water'}>1</GridCellByFlex>
                                    <GridCellByFlex width={2} color={'ivory'} background={'rouge'}>2</GridCellByFlex>
                                    <GridCellByFlex width={3} color={'night'} background={'autumn'}>3</GridCellByFlex>
                                    <GridCellByFlex width={4} color={'night'} background={'bamboo'}>4</GridCellByFlex>
                                    <GridCellByFlex width={2} color={'night'} background={'tea'}>5</GridCellByFlex>
                                    <GridCellByFlex width={1} color={'night'} background={'indigo'}>6</GridCellByFlex>
                                    <GridCellByFlex width={1} color={'night'} background={'tea'}>7</GridCellByFlex>
                                    <GridCellByFlex width={1} color={'ivory'} background={'night'}>8</GridCellByFlex>
                                    <GridCellByFlex width={1} color={'ivory'} background={'bamboo'}>9</GridCellByFlex>
                                    <GridCellByFlex width={1} color={'ivory'} background={'camel'}>10</GridCellByFlex>
                                    <GridCellByFlex width={1} color={'ivory'} background={'camel'}>11</GridCellByFlex>
                                </GridRowByFlex>
                            </Example>
                        </SC.SubSection>
                    </div>

                </SC.Section>
                <SC.Section>
                    <header>
                        <h2>Grid 布局</h2>
                    </header>
                    <h5>Grid 布局方式是另一种更加强大的布局方式，比 Flex 更加直观并简约, 其使用也与使用 Table 类似</h5>

                    <Example>
                        <h5>单位介绍:</h5>
                        <b>fr</b>: 该单位代表容器中剩余的可用空间比例, 如 `grid-template-columns: 1fr 1fr` 代表两列等宽排列
                        <b>repeat</b>: 代表重复单元声明，如 `grid-template-columns: repeat(3, 1fr)` 代表生成三列排布，同时每列宽度 `1fr`
                    </Example>

                    <Example>
                        <h5>属性介绍:</h5>
                        <div>
                            Grid 父元素
                            <ul>
                                <li> grid-template-columns: 定义 grid 的列以及宽度, 每个值代表一列</li>
                                <li> grid-template-rows: 定义 grid 的行的高度,</li>
                                <li> grid-auto-columns: 隐式创建列标识，在使用 grid-template-columns</li>
                                <li> grid-auto-row: 隐式创建行标识，在使用 grid-template-rows</li>
                                <li> column-gap: 定义 grid</li>
                                <li> row-gap: 定义 grid</li>
                                <li> grid-template-areas: 区域标识模板，代表对对应标识的子元素放置的位置，</li>
                            </ul>
                        </div>

                        <div>
                            Grid 子元素

                            <ul>
                                <li> grid-column-start: 代表该元素占用 grid 单元的起始列数</li>
                                <li> grid-column-end: 代表该元素占用 grid 单元的结束列数</li>
                                <li> grid-row-start: 代表该元素占用 grid 单元的起始行数</li>
                                <li> grid-row-start: 代表该元素占用 grid 单元的结束行数</li>
                                <li> grid-area: 子元素所放置在 grid 区域模板中的标识</li>
                            </ul>
                        </div>
                    </Example>

                    <SC.SubSection>
                        <h5>使用 Grid 的圣杯布局</h5>

                        <Code>
                            {` 
body {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
}

.header {
    grid-column: 1 / -1;
}

.left {
    grid-column: 1 / 2;
}

.main {
    grid-column: 2 / 11;
}

.right: {
    grid-column: span 1 / -1;
}

.footer { 
    grid-column: 1 / -1;
}
                            `}
                        </Code>
                        <Example>
                            实例:
                            <HolyGrailWithGrid>
                                <div className={'header'}>Header</div>
                                <div className={'left'}>Left</div>
                                <div className={'main'}>Main</div>
                                <div className={'right'}>Right</div>
                                <div className={'footer'}>Footer</div>
                            </HolyGrailWithGrid>
                        </Example>
                    </SC.SubSection>
                    <SC.SubSection>
                        <h5>使用 grid-area 进行布局</h5>

                        <Code>
                            {`
.container {
    height: 100%;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto 40px;
    grid-template-areas: 
        "m m h h h h h h h h h h"
        "m m c c c c c c c c c c"
        "f f f f f f f f f f f f";
}

.header {
    grid-area: h;
}

.menu {
    grid-area: m;
}

.content {
    grid-area: c;
}

.footer {
    grid-area: f;
}
                            `}
                        </Code>

                        <Example>
                            <GridAreaLayout>
                                <div className={'header'}>Header</div>
                                <div className={'menu'}>Menu</div>
                                <div className={'content'}>Main</div>
                                <div className={'footer'}>Footer</div>
                            </GridAreaLayout>
                        </Example>
                    </SC.SubSection>
                </SC.Section>
            </SC.Main>
        </div>
    );
}

export default App;
