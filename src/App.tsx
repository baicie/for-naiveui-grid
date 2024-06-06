import {
  NButton,
  NForm,
  NFormItemGi,
  NGrid,
  NGridItem,
  NInput,
} from "naive-ui";
import { defineComponent } from "vue";

const App = defineComponent({
  setup() {
    return () => (
      <NGrid cols={24} xGap={20} yGap={20}>
        <NGridItem span={12}>
          <NButton>long button</NButton>
        </NGridItem>
        <NForm
          labelPlacement="left"
          showFeedback={false}
          style={{ marginLeft: "50px" }}
        >
          <NFormItemGi span={12}>
            <NInput />
          </NFormItemGi>
        </NForm>
      </NGrid>
    );
  },
});

export default App;
