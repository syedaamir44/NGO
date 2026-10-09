import { PageHeader } from '../components/form'
import { POLICIES, type Block } from '../data/policies'

function BlockView({ block }: { block: Block }) {
  if (typeof block === 'string') {
    return <p className="mt-3 text-[15px] text-muted leading-relaxed">{block}</p>
  }
  if ('strong' in block) {
    return (
      <p className="mt-4 bg-[#FDF3DC] border-l-4 border-[#E0B95E] px-4 py-3 text-[15px] text-[#5C4409] leading-relaxed">
        {block.strong}
      </p>
    )
  }
  if ('list' in block) {
    return (
      <ul className="mt-3 space-y-2">
        {block.list.map((item, i) => (
          <li key={i} className="relative pl-5 text-[15px] text-muted leading-relaxed">
            <span className="absolute left-0 top-0 text-marigold">—</span>
            {item}
          </li>
        ))}
      </ul>
    )
  }
  // table
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-[14px]">
        <thead>
          <tr className="bg-ink text-cream text-left">
            {block.table.head.map((h) => (
              <th key={h} className="px-3 py-2.5 font-medium align-top">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row, i) => (
            <tr key={i} className="border-b border-line align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2.5 text-ink-deep leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function PolicyPage({ slug }: { slug: string }) {
  const policy = POLICIES.find((p) => p.slug === slug)
  if (!policy) return null

  return (
    <>
      <PageHeader
        crumb={policy.nav}
        label="Policy"
        title={policy.title}
        intro={`Effective from ${policy.effective}.`}
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        {policy.intro.map((p, i) => (
          <p key={i} className="mt-3 first:mt-0 text-[15px] text-muted leading-relaxed">
            {p}
          </p>
        ))}

        {policy.sections.map((section, si) => (
          <section key={si} className="mt-9 first:mt-8">
            {section.heading && (
              <h2 className="font-serif text-[1.15rem] text-ink-deep border-b-2 border-ink pb-1.5">
                {section.heading}
              </h2>
            )}
            {section.blocks.map((block, bi) => (
              <BlockView key={bi} block={block} />
            ))}
          </section>
        ))}

        <p className="mt-12 pt-6 border-t border-line text-[0.82rem] text-muted leading-relaxed">
          This policy is published by Shiksha Sarathi Foundation, a company registered under Section
          8 of the Companies Act, 2013. It forms part of the Foundation’s Website Policy Pack.
        </p>
      </div>
    </>
  )
}
