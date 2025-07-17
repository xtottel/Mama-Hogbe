//redirect to /news
import { redirect } from "next/navigation";
export default function Page() {
  redirect("/news");
}