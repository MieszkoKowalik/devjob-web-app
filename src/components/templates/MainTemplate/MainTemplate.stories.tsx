import React from "react";
import MainTemplate from "./MainTemplate";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Templates/MainTemplate",
  component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args} />
);
export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ullam quasi illo, totam voluptate ut officia numquam nobis libero dolores possimus perspiciatis, eum sint veniam eius, fugit dignissimos impedit qui facere mollitia vitae reprehenderit a minus inventore. Soluta consectetur sed saepe porro! Exercitationem dolorum omnis eligendi similique atque assumenda unde placeat minus eum molestiae dignissimos voluptatum, eaque at laudantium voluptatibus aliquid autem, enim perspiciatis. Temporibus, aperiam impedit! Saepe, aut dolorum? Sapiente enim inventore aut iure. In obcaecati, eum consequatur sunt dolorum provident impedit quaerat fugit nemo, distinctio tempore exercitationem, explicabo quam voluptatibus fuga assumenda ea sequi adipisci quia a odio. Tenetur ipsam ipsum rerum cupiditate soluta iure explicabo cumque assumenda nobis fugiat, error delectus autem quidem dolores impedit? Quasi quibusdam dolorum omnis placeat, distinctio nihil vitae sint illo exercitationem aliquam minus rem non facere accusantium unde, sit temporibus sapiente minima ab? Inventore sunt eveniet, natus totam deleniti quasi atque recusandae id delectus impedit magnam repudiandae incidunt harum, ad optio obcaecati laboriosam laborum? Mollitia perferendis est repellendus voluptatum labore. Impedit doloremque voluptates et minima mollitia pariatur distinctio, cumque dolorem beatae nihil totam soluta accusamus eius eaque aspernatur ea nemo veniam neque aut vero recusandae sunt odio? Dicta blanditiis dolorem vitae quo.",
};
