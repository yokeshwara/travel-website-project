import { ChevronRight } from "lucide-react"

export default function VisaDetails() {
  return (
    <section className="space-y-12 max-w-6xl mx-auto mb-16">
      {/* Extend Visa Description */}
      <div>
        <h3 className="text-xl font-bold mb-4 uppercase">EASILY EXTEND YOUR UAE TOURIST VISA</h3>
        <p className="text-slate-600 leading-relaxed">
          Extend your visit visa without exiting the country with our UAE TOURIST VISA CHANGE PACKAGES! No more waiting
          in the airport for long hours or travelling to Oman by Bus. Both 30 days and 90 days package are available at
          affordable price. The applicant should submit their documents 2-3 days prior to their last day. This can be
          done sitting at home. The applicant will not need to leave the country. He or She can wait for the visa
          approval from the comfort of your home.
        </p>
      </div>

      {/* Who Can Avail */}
      <div>
        <h3 className="text-xl font-bold mb-4 uppercase">WHO CAN AVAIL THE UAE VISA CHANGE?</h3>
        <p className="text-slate-600 mb-6 font-medium">
          THE COUNTRY VISA CHANGE will be Hassle Free and 100% possible for tourist who is already inside UAE.
        </p>
        <ul className="space-y-3">
          {[
            "UAE Tourist/Visit Visa holders on Single Entry",
            "UAE Tourist/Visit Visa holders on Multiple Entry",
            'Nationalities with "VISA ON ARRIVAL" who wanted to stay longer inside the UAE. for more information visit here',
            "From Cancelled Employment Visa to Tourist Visa",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <ChevronRight className="text-blue-600 mt-1 shrink-0" size={18} />
              <span>
                {item.includes("visit here") ? (
                  <>
                    {item.split("visit here")[0]}
                    <a href="#" className="text-pink-500 hover:underline">
                      visit here
                    </a>
                  </>
                ) : (
                  item
                )}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-slate-600 italic">
          Please talk to our visa expert at +971 0000000 if you need more advice and information.
        </p>
      </div>

      {/* Documents Required */}
      <div>
        <h3 className="text-xl font-bold mb-6 uppercase">DOCUMENTS REQUIRED FOR PROCESSING UAE COUNTRY VISA CHANGE</h3>
        <ul className="space-y-3">
          {[
            "Clear, scanned copy of your passport",
            "Clear, scanned copy of your passport/2x2 size photo with white background",
            "Birth certificate copy of the child age 18 and below",
            "For the child age 18 and below, we will also need the passport & Tourist visa or UAE Residence visa copy of the mother or father",
            "Copy of your current Tourist/Visit Visa.",
            "Copy of your Cancellation Document, if from UAE Residence Visa.",
            "Copy of your entry stamp on passport from UAE Immigration",
            "Provide your file number, if available",
            "For Pakistani & Iran Nationality, copy of your National ID Card (Front and Back)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <ChevronRight className="text-blue-600 mt-1 shrink-0" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
