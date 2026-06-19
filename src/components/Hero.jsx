import { useEffect, useRef, useState } from 'react'

const heroBackgroundImage = '/w2.jpg'

function CountUpNumber({ value, suffix = '', duration = 2600 }) {
	const [count, setCount] = useState(0)
	const [hasAnimated, setHasAnimated] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const element = ref.current
		if (!element || hasAnimated) {
			return undefined
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) {
					return
				}

				setHasAnimated(true)
				const startTime = performance.now()

				const step = (currentTime) => {
					const progress = Math.min((currentTime - startTime) / duration, 1)
					const easedProgress = 1 - (1 - progress) ** 3
					setCount(Math.floor(easedProgress * value))

					if (progress < 1) {
						requestAnimationFrame(step)
					} else {
						setCount(value)
					}
				}

				requestAnimationFrame(step)
				observer.disconnect()
			},
			{ threshold: 0.35 },
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [duration, hasAnimated, value])

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	)
}

export default function Hero() {
	return (
		<>
			<section
				id="home"
				className="relative isolate overflow-hidden bg-(--hooza-surface-strong)"
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),rgba(240,227,243,0.72)_38%,rgba(230,211,236,0.95))]" />
				<div
					className="absolute inset-0 bg-center bg-no-repeat opacity-65"
					style={{
						backgroundImage: `url(${heroBackgroundImage})`,
						backgroundSize: 'cover',
						filter: 'brightness(0.74) contrast(0.96) saturate(1.05)',
					}}
					aria-hidden="true"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,246,252,0.92)_0%,rgba(251,246,252,0.62)_40%,rgba(251,246,252,0.2)_100%)]" />

				<div className="relative mx-auto grid min-h-[calc(60svh-81px)] max-w-7xl items-start px-4 py-6 sm:min-h-[calc(70svh-81px)] sm:items-center sm:px-6 sm:py-10 lg:min-h-[calc(100svh-81px)] lg:grid-cols-12 lg:px-10 lg:py-20">
					<div className="max-w-2xl lg:col-span-7">
						<div className="inline-flex rounded-full bg-(--hooza-primary-soft) px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-(--hooza-primary-dark) shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
							Pan-African media-tech leadership
						</div>

						<h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight text-(--hooza-text) sm:mt-6 sm:text-5xl lg:text-7xl">
							Pioneering Digital <span className="text-(--hooza-primary)">Engagement</span> Across the Continent.
						</h1>

						<p className="mt-4 max-w-2xl text-sm leading-6 text-(--hooza-text-soft) sm:mt-6 sm:text-lg sm:leading-7">
							Bridging the gap between institutional reliability and digital innovation. We provide strategic media solutions and tech-driven platforms for a modern Africa.
						</p>

						<div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
							<a
								href="#solutions"
								className="inline-flex items-center justify-center rounded-sm bg-(--hooza-primary) px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(146,39,143,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-(--hooza-primary-dark) sm:px-7 sm:py-4 sm:text-sm"
							>
								Our Solutions 
							</a>
							<a
								href="#case-studies"
								className="inline-flex items-center justify-center rounded-sm border border-(--hooza-primary) bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-(--hooza-primary) transition-colors duration-200 hover:bg-white/75 sm:px-7 sm:py-4 sm:text-sm"
							>
								Case Studies 
							</a>
						</div>
					</div>

				</div>
			</section>

			<section className="bg-white py-14 sm:py-18 lg:py-24">
				<div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-10">
					<div className="lg:col-span-6">
						<div className="overflow-hidden rounded-3xl bg-[#130d18] p-3 shadow-[0_24px_60px_rgba(19,13,24,0.14)]">
							<div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black">
								<img
									src={heroBackgroundImage}
									alt="Connected global market illustration"
									className="h-full w-full object-cover opacity-90"
								/>
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,39,143,0.34),transparent_58%)]" />
							</div>
						</div>
					</div>

					<div className="lg:col-span-6">
						<p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--hooza-primary) sm:text-sm">
							Market Expansion
						</p>
						<h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-(--hooza-text) sm:text-4xl lg:text-5xl">
							Scale Without Boundaries
						</h2>
						<p className="mt-5 max-w-2xl text-sm leading-7 text-(--hooza-text-soft) sm:text-base lg:text-lg">
							We facilitate seamless market entry for European tech firms looking to tap into the African digital boom, and for African media giants seeking to establish a strategic presence in the EU.
						</p>

						<div className="mt-8 space-y-5 sm:mt-10">
							<div className="flex items-start gap-4">
								<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--hooza-primary-soft) text-sm font-bold text-(--hooza-primary-dark)">
									✓
								</div>
								<div>
									<h3 className="text-base font-semibold text-(--hooza-text) sm:text-lg">
										Localized Strategy Support
									</h3>
									<p className="mt-1 text-sm leading-6 text-(--hooza-text-soft) sm:text-base">
										Tailoring your product for diverse linguistic and regulatory landscapes.
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--hooza-primary-soft) text-sm font-bold text-(--hooza-primary-dark)">
									✓
								</div>
								<div>
									<h3 className="text-base font-semibold text-(--hooza-text) sm:text-lg">
										Joint Venture Facilitation
									</h3>
									<p className="mt-1 text-sm leading-6 text-(--hooza-text-soft) sm:text-base">
										Connecting you with verified high-level partners on the ground.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
				<div className="mx-auto max-w-7xl  bg-[#2a182f] px-6 py-12 text-center text-[#f5d7df] shadow-[0_24px_60px_rgba(19,13,24,0.18)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
						<div className="space-y-3">
							<p className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
								<CountUpNumber value={25} suffix="M+" duration={6000} />
							</p>
							<p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#cdbec7] sm:text-xs">
								Monthly listeners
							</p>
						</div>

						<div className="space-y-3">
							<p className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
								<CountUpNumber value={12} duration={5200} />
							</p>
							<p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#cdbec7] sm:text-xs">
								Global awards
							</p>
						</div>

						<div className="space-y-3">
							<p className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
								<CountUpNumber value={150} suffix="+" duration={6500} />
							</p>
							<p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#cdbec7] sm:text-xs">
								Team experts
							</p>
						</div>

						<div className="space-y-3">
							<p className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
								<CountUpNumber value={300} suffix="%" duration={7000} />
							</p>
							<p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#cdbec7] sm:text-xs">
								Growth rate
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#f6e9f7] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
				<div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-7 xl:col-span-6">
						<div className="inline-flex rounded-full bg-[#f3b4ef] px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7d2c76] shadow-sm sm:text-sm">
							Connect with us
						</div>
						<h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-(--hooza-primary) sm:text-5xl lg:text-6xl">
							Let’s build the future of African Media-Tech together.
						</h2>
						<p className="mt-5 max-w-2xl text-sm leading-7 text-(--hooza-text-soft) sm:text-base lg:text-lg">
							Whether you’re an investor, potential partner, or looking for expert media solutions across the continent, our team is ready to assist you.
						</p>
					</div>

					<div className="lg:col-span-5 xl:col-span-6 lg:justify-self-end">
						<div className="overflow-hidden rounded-[1.25rem] bg-white shadow-[0_24px_60px_rgba(124,46,120,0.16)]">
							<div className="relative aspect-video w-full overflow-hidden sm:aspect-video lg:aspect-video">
								<img
									src={heroBackgroundImage}
									alt="Global connection map"
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(146,39,143,0.08)_100%)]" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
