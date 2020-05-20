import React, { createRef } from 'react'
import { RadialGauge } from 'canvas-gauges'


export default class ReactRadialGauge extends React.Component {
  private canvasRef = createRef<HTMLCanvasElement>();
  private gauge: RadialGauge | undefined;

  componentDidMount () {
    const options = Object.assign({}, this.props, {
      renderTo: this.canvasRef
    })
    // @ts-ignore
    this.gauge = new RadialGauge(options).draw()
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

