import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the login page
  redirect("/auth");

  return null; // Optionally render nothing as the page redirects
}
