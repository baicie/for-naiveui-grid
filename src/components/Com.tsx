import { NFormItemGi, NInput } from "naive-ui";
import { defineComponent } from "vue";

const Child = defineComponent({
  setup() {
    return (
      <NFormItemGi span={6}>
        <NInput />
      </NFormItemGi>
    );
  },
});

export default Child;
