import { LinearGauge, RadialGauge } from '../src/react-canvas-gauges'

/**
 * Dummy test
 */
describe("RadialGauge test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("RadialGauge is instantiable", () => {
    expect(new RadialGauge()).toBeInstanceOf(RadialGauge)
  })

  it("LinearGauge is instantiable", () => {
    expect(new LinearGauge()).toBeInstanceOf(LinearGauge)
  })
})
