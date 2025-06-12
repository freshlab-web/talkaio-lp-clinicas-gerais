import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useEffect } from "react"

const logos = [
  { name: "iClinic", url: "../lovable-uploads/iclinic.png" },
  { name: "Doctoralia", url: "../lovable-uploads/doctoralia.png" },
  { name: "Feegow", url: "../lovable-uploads/feegow.png" },
  { name: "Linx Saúde", url: "../lovable-uploads/linx-saude.png" },
  { name: "ProDoctor", url: "../lovable-uploads/prodoctor.png" },
]

export default function IntegrationCarousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.5, spacing: 10 },
      },
    },
  })

  useEffect(() => {
    if (!slider.current) return
    const interval = setInterval(() => {
      slider.current?.next()
    }, 3000)
    return () => clearInterval(interval)
  }, [slider])

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-talkaio-dark mb-16">
        Integração com os principais sistemas do mercado
      </h2>
      <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto px-6 py-6">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center rounded-xl p-6 shadow-md bg-gray-50"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-28 md:h-32 object-contain max-w-[180px]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
