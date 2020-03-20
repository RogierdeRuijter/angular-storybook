import { addDecorator } from "@storybook/angular";

const CenterDecorator = storyFn => <div class="bold">{storyFn()}</div>;

addDecorator(CenterDecorator);
