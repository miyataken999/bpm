import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
/**
 * IntermediateTimerEvent class
 */
export default class extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = {
            id: null,
            type: "endEvent",
            bounds: {
                x: null,
                y: null,
                width: null,
                height: null
            }
        }
        this.config(Object.assign({}, options, {
            type: "intermediateThrowEvent",
            definition: options.type
        }))
        options.bounds = Object.assign({}, options.bounds, {
            width: 40,
            height: 40
        })
        this.configBounds(options.bounds)
    }

    /**
     * Render the IntermediateTimerEvent Based in options config
     */
    render() {
        this.shape = new JointElements.TimerEventDefinition();
        this.shape.position(this.options.bounds.x, this.options.bounds.y)
        this.shape.resize(this.options.bounds.width, this.options.bounds.height)
        this.shape.addTo(this.graph)
    }
}
