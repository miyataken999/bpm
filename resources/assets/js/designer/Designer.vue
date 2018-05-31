<template>
    <div id="designer-container">
        <component :is="modalComponent" :if="modalComponent"></component>
        <toptoolbar ref="toptoolbar"></toptoolbar>
        <div id="designer-subcontainer">
            <toolbar ref="toolbar"></toolbar>
            <div class="canvas-container">
                <designer ref="canvas"></designer>
            </div>
            <designerobjectsmenu></designerobjectsmenu>
        </div>
    </div>
</template>


<script>
// Import our designer event-bus
import EventBus from "./lib/event-bus";
// Import our top-level components

// Designer is our overall canvas tool
import designer from "./components/designer";

// This is our toolbar palette
import toolbar from "./components/toolbar";

// This is our top toolbar with process title and process options
import toptoolbar from "./components/toptoolbar";

// This is our objects menu with nested object-menu items components
import designerobjectsmenu from "./components/designer-objects-menu";

// @todo Figure out a way to add these modals to the properties of components
import modalPermissionsAdd from "./components/modals/modal-permissions-add";

export default {
  components: {
    designer,
    toolbar,
    toptoolbar,
    designerobjectsmenu,
    "modal-permissions-add": modalPermissionsAdd
  },
  data() {
    return {
      modalComponent: null
    }
  },
  created() {
    // Listen for opening an add dialog
    EventBus.$on("open-add-dialog", this.openAddDialog);
  },
  methods: {
    openAddDialog(key) {
      // Replace this with dynamic modal generation once we have all modals in place
      // We're not doing this now so we can have visual alert feedback when a modal isn't implemented
      switch(key) {
        case 'permissions':
          this.modalComponent = 'modal-permissions-add'
          break;
        default:
          alert(key + ' add modal not yet implemented.')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#designer-container {
  // Width and height is set to 100% to fill the outside container
  max-height: 100%;
  min-height: 100%;
  max-width: 100%;
  min-width: 100%;
  flex: 1;
  // We will flex container the items
  display: flex;
  flex-direction: column;
  background-color: green;

  #designer-subcontainer {
    display: flex;
    flex: 1;
    flex-direction: row;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;

    .canvas-container {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>