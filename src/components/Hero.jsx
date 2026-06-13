const heroBackgroundImage = '/w2.jpg'

export default function Hero() {
	return (
		<section
			id="home"
			className="relative isolate overflow-hidden bg-[#f6eef2]"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.85),_rgba(246,238,242,0.7)_38%,_rgba(241,232,237,0.92))]" />
			<div
				className="absolute inset-0 bg-center bg-no-repeat opacity-65"
				style={{
					backgroundImage: `url(${heroBackgroundImage})`,
					backgroundSize: 'cover',
					filter: 'brightness(0.72) contrast(0.95)',
				}}
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,244,247,0.9)_0%,rgba(251,244,247,0.6)_40%,rgba(251,244,247,0.22)_100%)]" />

			<div className="relative mx-auto grid min-h-[calc(60svh-81px)] max-w-7xl items-start px-4 py-6 sm:min-h-[calc(70svh-81px)] sm:items-center sm:px-6 sm:py-10 lg:min-h-[calc(100svh-81px)] lg:grid-cols-12 lg:px-10 lg:py-20">
				<div className="max-w-2xl lg:col-span-7">
					<div className="inline-flex rounded-full bg-[#f3a2e6] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6f1560] shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
						Pan-African media-tech leadership
					</div>

					<h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight text-[#20172a] sm:mt-6 sm:text-5xl lg:text-7xl">
						Pioneering Digital <span className="text-[#900a5d]">Engagement</span> Across the Continent.
					</h1>

					<p className="mt-4 max-w-2xl text-sm leading-6 text-[#5f4d57] sm:mt-6 sm:text-lg sm:leading-7">
						Bridging the gap between institutional reliability and digital innovation. We provide strategic media solutions and tech-driven platforms for a modern Africa.
					</p>

					<div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
						<a
							href="#solutions"
							className="inline-flex items-center justify-center rounded-sm bg-[#8f0e58] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(143,14,88,0.22)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#a11766] sm:px-7 sm:py-4 sm:text-sm"
						>
							Our Solutions 
						</a>
						<a
							href="#case-studies"
							className="inline-flex items-center justify-center rounded-sm border border-[#a11766] bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#8f0e58] transition-colors duration-200 hover:bg-white/65 sm:px-7 sm:py-4 sm:text-sm"
						>
							Case Studies 
						</a>
					</div>
				</div>

			</div>
		</section>
	)
}
