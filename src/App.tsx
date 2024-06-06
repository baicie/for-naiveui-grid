import { NForm, NFormItemGi, NGrid, NGridItem, NInput } from "naive-ui";
import { defineComponent } from "vue";
import Child from "./components/Com";

const App = defineComponent({
  setup() {
    return () => (
      <NForm
        labelPlacement="left"
        showFeedback={false}
        style={{ marginLeft: "50px" }}
      >
        <NGrid cols={24} xGap={20} yGap={20}>
          <NFormItemGi span={12}>
            <NInput />
          </NFormItemGi>

          <Child />
        </NGrid>
      </NForm>
    );
  },
});

export default App;
