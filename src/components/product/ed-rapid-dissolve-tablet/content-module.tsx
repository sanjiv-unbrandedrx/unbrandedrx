// src/components/product/ed-troche/content-module.tsx
export default function ContentModule() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="rounded-3xl bg-secondary p-10 text-center xl:p-20">
        {/* TASK 19: Change title to RDT */}
        <h3 className="font-title text-3xl font-medium">
          What is a Rapid Dissolving Tablet (RDT)?
        </h3>
        <div className="mx-auto mt-4 max-w-3xl space-y-4 text-left text-muted-foreground">
          {/* TASK 19: Update description to define RDT */}
          <p>
            A Rapid Dissolving Tablet (RDT) is a small lozenge designed to
            dissolve when placed between your cheek and gum. This method allows
            the active ingredients to be absorbed directly into the bloodstream,
            bypassing the digestive system for a potentially faster onset of
            action compared to traditional pills that need to be swallowed.
          </p>
          <div>
            {/* TASK 19: Update benefits title */}
            <p className="font-medium text-foreground">Benefits of an RDT:</p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold">Faster Absorption:</span> Works
                quicker than oral tablets.
              </li>
              <li>
                <span className="font-semibold">Discreet & Convenient:</span> No
                water needed, can be taken anywhere.
              </li>
              <li>
                <span className="font-semibold">Multi-Ingredient Formula:</span>{" "}
                Ideal for complex, combination formulas.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}