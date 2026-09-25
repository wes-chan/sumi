import Nav from "./component/nav";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/quote/new");
}
