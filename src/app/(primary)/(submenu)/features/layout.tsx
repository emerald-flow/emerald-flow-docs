import SubLayout from "~/components/sub-layout";
import { pages } from "~/lib/menu-items";

export default function Layout(props: LayoutProps<"/features">) {
  return (
    <SubLayout {...pages.features}>
      {props.children}
      {props.modal}
    </SubLayout>
  );
}
