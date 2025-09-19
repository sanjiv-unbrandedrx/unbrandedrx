export default function DeepDiveSection() {
  return (
    <section className="my-4 xl:my-15 container mx-auto py-6 xl:py-10 px-4 xl:px-0">
      <div className="flex flex-col xl:flex-row justify-between gap-y-8 gap-x-19">
        <div className="flex-1 bg-[url('/products/key-ingredients.png')] bg-center bg-cover rounded-3xl min-h-[360px] xl:min-h-[522px] flex flex-col items-stretch justify-stretch">
          <div className="bg-gradient-to-b from-white/20 to-white w-full h-full flex-1 flex flex-col gap-y-5 justify-end items-start py-8 px-10">
            <h4 className="font-title text-3xl font-medium">
              Key Active Ingredients
            </h4>
            <p className="text-neutral-800">
              <span className="font-semibold">Minoxidil 7.5%</span> helps
              increase blood flow to hair follicles, while
            </p>
            <p className="text-neutral-800">
              <span className="font-semibold">Dutasteride 0.1%</span> a potent
              DHT blocker, helps prevent follicle miniturization.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-y-3.5">
            <div>
              <table className="shadow-table rounded-3xl overflow-hidden w-full table-auto border-collapse">
                <thead className="bg-neutral-300/20 font-title font-medium text-xl">
                  <tr>
                    <th className="pt-5 pb-4 text-right border-b"></th>
                    <th className="pt-5 pb-4 px-4 text-left border-b font-medium">
                      Dutasteride
                    </th>
                    <th className="pt-5 pb-4 px-4 text-left border-b font-medium">
                      Finasteride
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-5 pb-4 text-right text-xs text-neutral-500 px-4 border-b">
                      DHT Blocking
                    </td>
                    <td className="pt-5 pb-4 px-4 border-b">More Potent</td>
                    <td className="pt-5 pb-4 px-4 border-b">
                      Standard Potency
                    </td>
                  </tr>
                  <tr className="bg-neutral-300/20">
                    <td className="pt-5 pb-4 text-right text-xs text-neutral-500 px-4 border-b">
                      Best For
                    </td>
                    <td className="pt-5 pb-4 px-4 border-b">
                      Stubborn Hair Loss
                    </td>
                    <td className="pt-5 pb-4 px-4 border-b">
                      General Hair Loss
                    </td>
                  </tr>
                  <tr>
                    <td className="pt-5 pb-4 text-right text-xs text-neutral-500 px-4 border-b">
                      Formulation
                    </td>
                    <td className="pt-5 pb-4 px-4 border-b">Topical or Oral</td>
                    <td className="pt-5 pb-4 px-4 border-b">Primarily Oral</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-10 space-y-5">
              <h4 className="font-title font-medium text-3xl">
                Dutasteride vs. Finasteride
              </h4>
              <p>
                Dutasteride blocks more types of the 5-alpha reductase enzyme
                than finasteride, making it potentially more effective at
                reducing DHT and treating hair loss. Both share similar uses and
                side effect profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
