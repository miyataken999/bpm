import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
/**
 * Group class
 */
export default class extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = {
            id: null,
            x: null,
            y: null,
            width: 600,
            height: 150
        }
        this.config(options)
    }

    /**
     * Render the Group Based in options config
     */
    render() {
        this.shape = new JointElements.Group();
        this.shape.position(this.options.x, this.options.y);
        this.shape.resize(this.options.width, this.options.height);
        this.shape.addTo(this.graph);
    }
}
