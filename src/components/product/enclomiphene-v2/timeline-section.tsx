import { Clock, TrendingUp, Target, Trophy } from "lucide-react";

export default function TimelineSection() {
  return (
    <section className="bg-secondary py-12 xl:py-20">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="text-center mb-12">
          <h2 className="font-title text-3xl xl:text-4xl tracking-tight font-medium">
            What to Expect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Results vary by individual, but here&apos;s what most men experience
            with consistent daily use.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <TimelineCard
              icon={<Clock className="size-6" />}
              week="Week 1-2"
              title="Hormone Shift"
              description="Your body begins responding. LH and FSH levels start to rise, signaling increased testosterone production."
              color="blue"
            />
            <TimelineCard
              icon={<TrendingUp className="size-6" />}
              week="Week 3-4"
              title="Early Changes"
              description="Many men notice improved morning energy, better sleep quality, and subtle mood improvements."
              color="emerald"
            />
            <TimelineCard
              icon={<Target className="size-6" />}
              week="Week 6-8"
              title="Noticeable Results"
              description="Energy, libido, and mental clarity typically show meaningful improvement. Testosterone levels measurably higher."
              color="amber"
            />
            <TimelineCard
              icon={<Trophy className="size-6" />}
              week="Week 12+"
              title="Full Benefits"
              description="Optimal results for body composition, sustained energy, and overall well-being. Many continue long-term."
              color="purple"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Individual results may vary. Consistent daily use is important for
            best results. Your provider may adjust dosing based on lab results
            and symptoms.
          </p>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  icon,
  week,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  week: string;
  title: string;
  description: string;
  color: "blue" | "emerald" | "amber" | "purple";
}) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    emerald: "bg-emerald-100 text-emerald-600",
    amber: "bg-amber-100 text-amber-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div
        className={`inline-flex p-3 rounded-xl mb-4 ${colorClasses[color]}`}
      >
        {icon}
      </div>
      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
        {week}
      </p>
      <h3 className="font-semibold text-lg text-neutral-900 mb-2">{title}</h3>
      <p className="text-base text-muted-foreground">{description}</p>
    </div>
  );
}
