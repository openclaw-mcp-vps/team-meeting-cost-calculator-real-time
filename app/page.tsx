export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Every meeting has a price tag.<br />
          <span className="text-[#58a6ff]">Now you can see it.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          MeetingCost injects a live cost counter into Zoom, Google Meet, and Teams — calculated from your team&apos;s salaries and meeting duration. Make every minute count.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial — $5/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Works on Chrome &amp; Edge · Cancel anytime</p>

        {/* Live demo widget */}
        <div className="mt-14 mx-auto max-w-sm bg-[#161b22] border border-[#30363d] rounded-2xl p-6 text-left shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-[#8b949e] uppercase tracking-widest">Meeting Cost</span>
            <span className="flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
              Live
            </span>
          </div>
          <p className="text-5xl font-bold text-white mb-1">$47.32</p>
          <p className="text-sm text-[#8b949e]">6 attendees · 23 min elapsed</p>
          <div className="mt-4 h-1.5 rounded-full bg-[#21262d] overflow-hidden">
            <div className="h-full w-2/5 rounded-full bg-[#58a6ff] animate-pulse"></div>
          </div>
          <p className="mt-2 text-xs text-[#484f58]">Avg salary $120k/yr · updating every second</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$5<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to run leaner meetings</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Real-time cost overlay on Zoom, Meet & Teams",
              "Unlimited team members & salary profiles",
              "Meeting history & cost reports",
              "Chrome & Edge extension",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#484f58]">7-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which platforms does it support?",
              a: "MeetingCost works with Google Meet, Zoom, and Microsoft Teams via a lightweight browser extension for Chrome and Edge."
            },
            {
              q: "How are salaries handled?",
              a: "You configure salary ranges or exact figures locally in the extension popup. Data stays in your browser — nothing is sent to our servers."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} MeetingCost. All rights reserved.
      </footer>
    </main>
  );
}
