import { Button } from './ui'
import { PROGRAMME } from '../config'

export default function CtaBand() {
  return (
    <div className="bg-marigold text-[#241703] py-14 px-6 text-center">
      <h2 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
        {PROGRAMME.name} is open for applications
      </h2>
      <div className="mt-6">
        <Button href="#/apply" variant="ink">
          Apply Now →
        </Button>
      </div>
    </div>
  )
}
