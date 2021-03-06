import {mount, shallow} from '@vue/test-utils'
import actions from '../../../../resources/assets/js/designer/actions'

describe('designer.vue', () => {
    beforeEach(() => {

    })

    it('Actions', () => {
        expect(actions.designer.drag.toolbar.end({})).toEqual({
            type: "designer/drag/toolbar/end",
            payload: {}
        })
        expect(actions.designer.drag.toolbar.start({})).toEqual({
            type: "designer/drag/toolbar/start",
            payload: {}
        })

        expect(actions.designer.drag.shape.start({})).toEqual({
            type: "designer/drag/shape/start",
            payload: {}
        })

        expect(actions.designer.drag.shape.end({})).toEqual({
            type: "designer/drag/shape/end",
            payload: {}
        })

        expect(actions.designer.zoom.in({})).toEqual({
            type: "designer/zoom/in",
            payload: {}
        })

        expect(actions.designer.zoom.out({})).toEqual({
            type: "designer/zoom/out",
            payload: {}
        })

        expect(actions.designer.zoom.reset({})).toEqual({
            type: "designer/zoom/reset",
            payload: {}
        })

        expect(actions.designer.shape.remove({})).toEqual({
            type: "designer/shape/remove",
            payload: {}
        })

        expect(actions.designer.shape.drag({})).toEqual({
            type: "designer/shape/drag",
            payload: {}
        })

        expect(actions.designer.shape.click({})).toEqual({
            type: "designer/shape/click",
            payload: {}
        })

        expect(actions.designer.bpmn.update({})).toEqual({
            type: "designer/bpmn/update",
            payload: {}
        })

        expect(actions.designer.lane.create({})).toEqual({
            type: "designer/lane/create",
            payload: {}
        })

        expect(actions.designer.flow.create({})).toEqual({
            type: "designer/flow/create",
            payload: {}
        })

        expect(actions.designer.flow.creating({})).toEqual({
            type: "designer/flow/creating",
            payload: {}
        })

        expect(actions.designer.canvas.click({})).toEqual({
            type: "designer/canvas/click",
            payload: {}
        })
    })
})