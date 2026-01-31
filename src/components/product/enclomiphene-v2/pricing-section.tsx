const enclomiphenePricing = [
  { dose: "6.25mg", monthly: 79, quarterly: 189, quarterlySavings: 48, fiveMonth: 319, fiveMonthSavings: 76 },
  { dose: "12.5mg", monthly: 99, quarterly: 237, quarterlySavings: 60, fiveMonth: 389, fiveMonthSavings: 106 },
  { dose: "25mg", monthly: 119, quarterly: 297.5, quarterlySavings: 59.5, fiveMonth: 469, fiveMonthSavings: 126 },
];

const comboPricing = [
  { dose: "6.25mg + Tadalafil", monthly: 79, quarterly: 189, quarterlySavings: 48, fiveMonth: 319, fiveMonthSavings: 76 },
  { dose: "12.5mg + Tadalafil", monthly: 99, quarterly: 237, quarterlySavings: 60, fiveMonth: 389, fiveMonthSavings: 106 },
  { dose: "25mg + Tadalafil", monthly: 119, quarterly: 297.5, quarterlySavings: 59.5, fiveMonth: 469, fiveMonthSavings: 126 },
];

export default function PricingSection() {
  return (
    <section className="container mx-auto my-4 py-12 px-4 xl:my-15 xl:py-20 xl:px-0">
      <div className="text-center mb-12">
        <h2 className="font-title text-3xl xl:text-4xl tracking-tight font-medium">
          Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          No hidden fees, no surprises. Choose the plan that works for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Enclomiphene Only Card */}
        <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100">
            <h3 className="font-semibold text-xl text-emerald-900">Enclomiphene</h3>
            <p className="text-base text-emerald-700">Pure testosterone boost</p>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-base text-muted-foreground">
                  <th className="text-left font-medium pb-4">Dose</th>
                  <th className="text-center font-medium pb-4">30-Day</th>
                  <th className="text-center font-medium pb-4">90-Day</th>
                  <th className="text-center font-medium pb-4">150-Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {enclomiphenePricing.map((item) => (
                  <tr key={item.dose}>
                    <td className="py-4 text-base font-medium text-neutral-800">
                      {item.dose}
                    </td>
                    <td className="py-4 text-center">
                      <span className="text-base font-semibold text-neutral-900">
                        ${item.monthly}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-base font-semibold text-neutral-900">
                          ${item.quarterly}
                        </span>
                        <span className="text-sm text-emerald-600 font-medium">
                          Save ${item.quarterlySavings}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-base font-semibold text-neutral-900">
                          ${item.fiveMonth}
                        </span>
                        <span className="text-sm text-emerald-600 font-medium">
                          Save ${item.fiveMonthSavings}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enclomiphene + Tadalafil Card */}
        <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
            <h3 className="font-semibold text-xl text-blue-900">Enclomiphene + Tadalafil</h3>
            <p className="text-base text-blue-700">T-boost + ED support</p>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-base text-muted-foreground">
                  <th className="text-left font-medium pb-4">Dose</th>
                  <th className="text-center font-medium pb-4">30-Day</th>
                  <th className="text-center font-medium pb-4">90-Day</th>
                  <th className="text-center font-medium pb-4">150-Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {comboPricing.map((item) => (
                  <tr key={item.dose}>
                    <td className="py-4 text-base font-medium text-neutral-800">
                      {item.dose}
                    </td>
                    <td className="py-4 text-center">
                      <span className="text-base font-semibold text-neutral-900">
                        ${item.monthly}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-base font-semibold text-neutral-900">
                          ${item.quarterly}
                        </span>
                        <span className="text-sm text-emerald-600 font-medium">
                          Save ${item.quarterlySavings}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-base font-semibold text-neutral-900">
                          ${item.fiveMonth}
                        </span>
                        <span className="text-sm text-emerald-600 font-medium">
                          Save ${item.fiveMonthSavings}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </section>
  );
}
