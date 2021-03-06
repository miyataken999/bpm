import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
/**
 * ExclusiveGateway class
 */
export default class extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = {
            id: null,
            type: "exclusiveGateway",
            bounds: {
                x: null,
                y: null,
                width: 40,
                height: 40
            }
        }
        this.config(options)
        this.configBounds(options.bounds)
    }

    /**
     * Render the ExclusiveGateway Based in options config
     */
    render() {
        this.shape = new JointElements.ExclusiveGateway();
        this.shape.position(this.options.bounds.x, this.options.bounds.y)
        this.shape.resize(this.options.bounds.width, this.options.bounds.height)
        this.shape.addTo(this.graph)
    }
}
