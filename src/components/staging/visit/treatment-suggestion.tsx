"use client";

import Image from "next/image";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { getTreatmentById } from "@/lib/questionnaire/treatments";
import { formatPrice } from "@/lib/component-utils";
import ButtonCustom from "@/components/ui/button-custom";
import { FadeIn } from "@/components/ui/animate";

interface TreatmentSuggestionProps {
  treatmentId: string;
  reason: string;
}

export default function TreatmentSuggestion({
  treatmentId,
  reason,
}: TreatmentSuggestionProps) {
  const { addTreatment, dismissTreatment } = useQuestionnaire();
  const treatment = getTreatmentById(treatmentId);

  if (!treatment) return null;

  return (
    <FadeIn variant="fadeUp">
      <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-8">
        <p className="text-base uppercase tracking-wider font-medium text-blue-600 mb-5">
          Your provider may also recommend
        </p>

        <div className="flex items-start gap-6">
          <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden bg-white">
            <Image
              src={treatment.image}
              alt={treatment.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-title font-semibold text-xl">
              {treatment.name}
            </h4>
            <p className="text-base text-muted-foreground mt-1">
              {treatment.medicalName}
            </p>
            <p className="text-lg font-semibold mt-1.5">
              {formatPrice(treatment.price)}
              <span className="font-normal text-muted-foreground">/mo</span>
            </p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mt-5">{reason}</p>

        <div className="flex gap-4 mt-6">
          <ButtonCustom
            variant="filled"
            size="lg"
            onClick={() => addTreatment(treatmentId, reason)}
          >
            + Add to Treatment Plan
          </ButtonCustom>
          <ButtonCustom
            variant="outline"
            size="lg"
            onClick={() => dismissTreatment(treatmentId)}
          >
            Not interested
          </ButtonCustom>
        </div>
      </div>
    </FadeIn>
  );
}
