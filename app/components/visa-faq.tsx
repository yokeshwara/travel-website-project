import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQS = [
  "Can I change my visa while in the country?",
  "How long does a visa change process take?",
  "Do I need to leave the country for a visa change?",
  "Can I apply for a visa change online?",
  "Can my visa change be denied?",
]

export default function Faq() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((q, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-6 border-b last:border-0">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">{q}</AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">
                Yes, you can change your visa status while remaining in the country using our simplified A2A or land
                exit packages.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
