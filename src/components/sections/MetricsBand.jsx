
import { metrics } from "../../data/content";
 
export default function MetricsBand() {
  return (
    <section className="bg-[#67e8f9] text-[#08111f] py-14">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map(({ heading, body }) => (
            <div key={heading}>
              <h3 className="text-[42px] font-black m-0">{heading}</h3>
              <p className="mt-2 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
