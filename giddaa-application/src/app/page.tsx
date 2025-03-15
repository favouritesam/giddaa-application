import DashboardLayout from "@/components/containers/dashboard-layout";

export default function Home() {
  const user = {
    name: "James Mensah",
    email: "jamesmensah@gmail.com"
  };
  return <DashboardLayout user={user} />
}




