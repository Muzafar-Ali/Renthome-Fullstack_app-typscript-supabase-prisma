// import { createCategoryForHome } from '@/app/actions'

import { createCategoryForHome } from '@/app/actions'
import SelectCategory from '@/components/createHome/SelectCategory'
import NextSubmitButton from '@/components/submitButtons/NextSubmitButton'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'


const CategoryPage = ({ params }: { params: { id: string } }) => {

  return (
    <div className='mt-10'>
      <div className='px-5 md:w-3/5 mx-auto'>
        <h2 className="text-xl md:text-3xl font-semibold tracking-tight transition-colors text-center">
          Which of these best describe your Home?
        </h2>
      </div>

      <form action={createCategoryForHome}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectCategory/>

        {/* button section, back and next */}
        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-16 md:h-24">
          <Separator className="mx-auto w-full h-1" />
          <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Link href={`/create/${params.id}/about-place`}>
              <Button variant="secondary" size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3"> Back </Button>
            </Link>
            <NextSubmitButton/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CategoryPage