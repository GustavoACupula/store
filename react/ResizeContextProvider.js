import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Resize from 'react-resize-detector'

function getClassForWidth(width) {
  if (width < 640) {
    return 'vtex-context--s'
  }

  return 'vtex-context--ns'
}

export default class ResizeContextProvider extends Component {
  static propTypes = {
    children: PropTypes.object,
  }
  render() {
    const { children } = this.props
    return (
      <Resize handleWidth>
        {width => <div className={getClassForWidth(width)}> {children} </div>}
      </Resize>
    )
  }
}
