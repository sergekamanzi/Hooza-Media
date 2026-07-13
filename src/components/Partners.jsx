import {
  FiFlag, FiRadio, FiMonitor, FiPhone,
  FiHeart, FiBookOpen, FiActivity, FiGlobe,
} from 'react-icons/fi'

const industries = [
  { Icon: FiFlag,      label: 'Government' },
  { Icon: FiRadio,     label: 'Broadcasting' },
  { Icon: FiMonitor,   label: 'Media' },
  { Icon: FiPhone,     label: 'Telecommunications' },
  { Icon: FiHeart,     label: 'NGOs' },
  { Icon: FiBookOpen,  label: 'Education' },
  { Icon: FiActivity,  label: 'Health' },
  { Icon: FiGlobe,     label: 'Development Partners' },
]

const partners = [
  { name: 'AFRICAINE DE CONSEIL ET DE COMMUNICATION (ACC)', country: 'Senegal', sector: 'Public Relation, Media & Communication' },
  { name: 'AGACIRO DEVELOPMENT FUND', country: 'Rwanda', sector: "Rwanda's Sovereign Wealth Fund" },
  { name: 'AIIB', country: 'China', sector: 'Finance' },
  { name: 'BDO EAST AFRICA', country: 'Rwanda', sector: 'Advisory' },
  { name: 'CFI', country: 'France', sector: 'Media Development' },
  { name: 'DEUTSCHE WELLE', country: 'Germany', sector: 'Broadcasting' },
  { name: 'ERICSSON', country: 'Sweden', sector: 'Technology' },
  { name: 'FORBES AFRICA', country: 'South Africa', sector: 'Publishing' },
  { name: 'FRANCE MÉDIAS MONDE', country: 'France', sector: 'Broadcasting' },
  { name: 'INTERNATIONAL TELECOMMUNICATION UNION', country: 'Switzerland', sector: 'Publishing' },
  { name: 'KIRUSA INC', country: 'USA', sector: 'Technology' },
  { name: 'ML CORPORATE SERVICES', country: 'Rwanda', sector: 'Advisory' },
  { name: 'OPPO', country: 'China', sector: 'Advisory' },
  { name: 'ORGANISATION DE LA PRESSE FRANCOPHONE AU RWANDA (OPFR)', country: 'Rwanda', sector: 'Governance' },
  { name: 'RWANDA BROADCASTING AGENCY', country: 'Rwanda', sector: 'Broadcasting' },
  { name: 'RWANDA MEDIA COMMISSION', country: 'Rwanda', sector: 'Media Regulation' },
  { name: 'RWANDA NATIONAL ELECTORAL COMMISSION', country: 'Rwanda', sector: 'Public Awareness' },
  { name: 'SONY MUSIC / THE ORCHARD', country: 'USA', sector: 'Publishing & Global Distribution' },
  { name: 'TF1', country: 'France', sector: 'Broadcasting' },
  { name: 'THE TONY ELUMELU FOUNDATION', country: 'Nigeria', sector: 'Start-up Incubation & Accelerator' },
  { name: 'UNITED NATIONS RADIO', country: 'USA', sector: 'Broadcasting' },
  { name: 'UNITED STATES AGENCY FOR GLOBAL MEDIA', country: 'USA', sector: 'Broadcasting' },
  { name: 'VIAMO', country: 'Mauritius', sector: 'Technology' },
]

export default function Partners() {
  return (
    <>
    {/* ── Section 1: Partners & References ── */}
    <section id="partners-references" className="bg-[#fafafa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#92278f]/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#92278f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#92278f]" />
            Our Network
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Partners &amp; References
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 sm:text-lg">
            A trusted network of global institutions, broadcasters, technology leaders, and development partners.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 divide-y divide-x-0 divide-gray-200 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center gap-3 bg-white px-6 py-10 text-center transition-colors duration-200 hover:bg-[#f9f0f9]"
            >
              <span className="text-sm font-bold leading-snug tracking-wide text-gray-900 group-hover:text-[#92278f] transition-colors duration-200">
                {partner.name}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                {partner.sector}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#f9f0f9] px-2.5 py-0.5 text-[10px] font-medium text-[#92278f]">
                {partner.country}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ── Section 2: Industries We Serve ── */}
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">

          {/* Left — copy + industry cards */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Industries <br className="hidden sm:block" />We Serve
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
              From government institutions to grassroots organisations, Hooza delivers media, technology, and communications solutions across Africa's most vital sectors.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {industries.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-[#fafafa] px-4 py-6 text-center transition-all duration-200 hover:border-[#92278f]/30 hover:bg-[#f9f0f9] hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm transition-colors duration-200 group-hover:bg-[#92278f]">
                    <Icon className="h-5 w-5 text-[#92278f] transition-colors duration-200 group-hover:text-white" />
                  </div>
                  <span className="text-xs font-semibold leading-tight text-gray-700 group-hover:text-[#92278f] transition-colors duration-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative purple circle behind */}
              <div className="absolute -inset-6 rounded-full bg-linear-to-br from-[#92278f]/10 to-[#92278f]/5 blur-2xl" />
              {/* Accent ring */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full border-2 border-[#92278f]/20" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border-2 border-[#92278f]/15" />

              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/partners.png"
                  alt="Hooza Civic Info Portal — available on smartphones and feature phones"
                  className="relative w-full rounded-2xl object-contain"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full bg-[#92278f] px-4 py-2 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-white/70 animate-pulse" />
                <span className="text-xs font-semibold text-white">Works on every device</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
