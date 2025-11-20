import Image from "next/image";

export function Testimonials() {
  return (
    <section className="bg-white text-black p-6 md:p-8 lg:p-12">
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 text-base">We partner with ambitious companies to build software that matters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl">
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              "Vertex helped us modernize our legacy systems. The transition was seamless, and our operational efficiency has improved by 40%."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
                <Image src="/diverse-group-avatars.png" alt="User" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">Sarah Chen</div>
                <div className="text-xs text-gray-500">CTO, TechFlow</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl">
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              "The mobile app Vertex built for us has completely transformed how we engage with our customers. The UI is intuitive and performance is flawless."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
                <Image src="/diverse-group-avatars.png" alt="User" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">Michael Ross</div>
                <div className="text-xs text-gray-500">Product Manager, RetailGo</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl">
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              "Their technical expertise and consulting guidance were invaluable during our cloud migration. Highly recommended for complex IT projects."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
                <Image src="/diverse-group-avatars.png" alt="User" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">David Miller</div>
                <div className="text-xs text-gray-500">Director of Engineering</div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl">
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              "Vertex isn't just a vendor; they are a true partner. They understood our business goals and delivered a solution that exceeded expectations."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
                <Image src="/diverse-group-avatars.png" alt="User" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-sm">Emily Zhang</div>
                <div className="text-xs text-gray-500">CEO, StartUp Inc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
