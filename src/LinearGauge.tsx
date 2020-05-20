import React, { createRef } from 'react'

import {LinearGauge} from 'canvas-gauges'



export default class ReactLinearGauge extends React.Component {
  private canvasRef = createRef<HTMLCanvasElement>();
  private gauge: LinearGauge | undefined;

  componentDidMount () {
    const options = Object.assign({}, this.props, {
      renderTo: this.canvasRef
    })
    // @ts-ignore
    this.gauge = new LinearGauge(options).draw()
  }

  componentWillReceiveProps (nextProps: CanvasGauges.GenericOptions) {
    // @ts-ignore
    this.gauge.value = nextProps.value
    // @ts-ignore
    this.gauge.update(nextProps)
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}
