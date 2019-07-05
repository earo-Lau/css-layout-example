import styled from 'styled-components'
import React, {Component} from 'react'

class PreCode extends Component {

    render() {
        return (
            <pre className={this.props.className}>
                <code>
                    {this.props.children}
                </code>
            </pre>
        )
    }

}

export default styled(PreCode)`
  background: black;
  color: lightcyan;
  box-shadow: 5px 5px cadetblue;
`