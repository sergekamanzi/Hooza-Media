const featuredArticle = {
  category: 'INNOVATION',
  date: 'March 17, 2018',
  title: "Digital media house in Kigali, Rwanda",
  description:
    'Startup Africa caught up with Victor Nkindi, Founder and CEO of Hooza, a digital media house based in Kigali, Rwanda to discuss about himself and his startup journey.',
  cta: 'Read Full Report',
  image: '/new1.webp',
  url: 'https://startupafricas.com/hooza/',
}

const gridArticles = [
  {
    id: 1,
    category: 'Innovation',
    categoryColor: '#92278f',
    date: '13 May 2014',
    readTime: '5 min read',
    title: 'Forbes Africa: TECH STARTUPS WILL SUPPORT AFRICA’S GROWTH',
    description: "Across the African continent, more technology startups are emerging. They have an important role to play...",
    image: '/new2.jpg',
    url: '/ADVRT Accenture_proof_005.pdf',
  },
  {
    id: 2,
    category: 'Events',
    categoryColor: '#0891b2',
    date: '04 Jun 2020',
    readTime: '8 min read',
    title: 'Enhancing citizen engagement among rural populations in Rwanda with a mobile solution',
    description: 'This technology was used during the 2017 Rwandan presidential elections,...',
    image: '/new3.webp',
    url: 'https://www.itu.int/hub/2020/06/enhancing-citizen-engagement-among-rural-populations-in-rwanda-with-a-mobile-solution/',
  },
  {
    id: 3,
    category: 'Impact',
    categoryColor: '#16a34a',
    date: '22 Apr 2026',
    readTime: '4 min read',
    title: 'Bridging Africa’s Digital Usage Gap: The Voice at the End of the Line',
    description: 'Somewhere outside Kigoma, a farmer picks up a feature phone that cost her less than a sack of maize. She doesn’t tap an app...',
    image: '/new4.jpeg',    url: 'https://www.ktpress.rw/2026/04/bridging-africas-digital-usage-gap-the-voice-at-the-end-of-the-line/',  },
]

const bottomArticles = [
  {
    id: 4,
    category: 'Corporate',
    categoryColor: '#92278f',
    date: '16 Jun 2017',
    readTime: '5 min read',
    title: 'Victor Nkindi is Using the Power of the Media to Drive Civic Education in Rwanda',
    description: 'following the deadline set by the International Telecommunication Union (ITU),...',
    image: '/new5.jpg',
    url: 'https://www.tonyelumelufoundation.org/east-africa/victor-nkidnli-is-using-the-power-of-the-media-to-drive-civic-education-in-rwanda',
  },
  {
    id: 5,
    category: 'Innovation',
    categoryColor: '#0891b2',
    date: '2 May 2016',
    readTime: '10 min read',
    title: 'VOA Kinyarwanda programming available on mobile in Rwanda',
    description: 'Increasingly, people are using their mobile phones to access information that is important to them,...',
    image: '/new6.jpg',
    url: 'https://www.usagm.gov/2016/05/02/voa-kinyarwanda-programming-available-on-mobile-in-rwanda/',
  },
]

function CategoryBadge({ label, color }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {label}
    </span>
  )
}

function ArticleCard({ article }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        <div className="absolute left-3 top-3">
          <CategoryBadge label={article.category} color={article.categoryColor} />
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="mb-2 text-sm font-bold leading-snug text-gray-900 sm:text-base">{article.title}</h3>
        <p className="flex-1 text-xs leading-relaxed text-gray-500 sm:text-sm">{article.description}</p>
        <a
          href={article.url || '#'}
          target={article.url ? '_blank' : undefined}
          rel={article.url ? 'noopener noreferrer' : undefined}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold sm:text-sm"
          style={{ color: '#92278f' }}
        >
          Learn more <span>›</span>
        </a>
      </div>
    </div>
  )
}

export default function News() {
  return (
    <section id="news" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="max-w-xl">
            <span
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
              style={{ backgroundColor: '#92278f' }}
            >
              Media-Tech Insights
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">News &amp; Media</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
              Pioneering the narrative of digital transformation across Africa. Hooza Group delivers essential updates on the convergence of media, mobile technology, and institutional growth.
            </p>
          </div>
        </div>

        {/* ── Featured Article ── */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:mb-14">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="h-60 w-full overflow-hidden bg-gray-100 sm:h-72 lg:h-auto lg:w-[55%]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="flex flex-1 flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: '#92278f' }}
                >
                  {featuredArticle.category}
                </span>
                <span className="text-xs text-gray-400">• {featuredArticle.date}</span>
              </div>
              <h3 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                {featuredArticle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
                {featuredArticle.description}
              </p>
              <a
                href={featuredArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: '#92278f' }}
              >
                {featuredArticle.cta} <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 3-Column Card Grid ── */}
        <div className="mb-10 grid gap-6 sm:mb-14 sm:grid-cols-2 lg:grid-cols-3">
          {gridArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* ── Bottom Row: 2 cards + Stay Informed ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bottomArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}

          {/* Stay Informed box */}
          <div
            className="flex flex-col justify-between rounded-xl p-7 sm:col-span-2 lg:col-span-1"
            style={{ background: 'linear-gradient(135deg, #92278f 0%, #6b1a6a 100%)' }}
          >
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Stay Informed</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Receive the latest media-tech insights and corporate updates directly in your inbox.
              </p>
            </div>
            <div className="mt-6">
              <input
                type="email"
                placeholder="Your work email"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/50 focus:ring-0"
              />
              <button
                className="mt-3 w-full rounded-lg py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                Subscribe
              </button>
              <p className="mt-3 text-center text-xs text-white/40">
                By subscribing, you agree to our GDPR-compliant Privacy Policy.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
