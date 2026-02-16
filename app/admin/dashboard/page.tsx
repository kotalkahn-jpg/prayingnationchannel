import { supabase } from "@/lib/supabase";

export default async function AdminDashboard() {
  const { count: articleCount } = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true });

  const { count: eventCount } = await supabase
    .from("events")
    .select("*", { count: "exact", head: true });

  const { count: subscriberCount } = await supabase
    .from("subscribers")
    .select("*", { count: "exact", head: true });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <StatCard title="Articles" value={articleCount || 0} />
        <StatCard title="Events" value={eventCount || 0} />
        <StatCard title="Subscribers" value={subscriberCount || 0} />

      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <p className="text-gray-500 text-sm mb-2">
        {title}
      </p>
      <h2 className="text-4xl font-bold text-[#0B1E3D]">
        {value}
      </h2>
    </div>
  );
}
