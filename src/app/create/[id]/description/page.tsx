import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader } from '@/components/ui/card'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button';
import NextSubmitButton from '@/components/submitButtons/NextSubmitButton';
import Link from 'next/link';
import { createHomeDescription } from '@/app/actions';
import Counter from '@/components/createHome/Counter';


const DescriptionPage = ({ params }: { params: { id: string };}) => {
  return (
    <>
      <div className="px-5 md:w-3/5 mx-auto mt-5">
        <h2 className="text-xl md:text-3xl font-semibold tracking-tight transition-colors">
          Please describe your home as good as you can!
        </h2>
      </div>

      <form action={createHomeDescription}>
        <input type="hidden" name="homeId" value={params.id} />
        <div className="px-5 md:w-3/5 mx-auto mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              name="title"
              type="text"
              required
              placeholder="Short and simple..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Descrption</Label>
            <Textarea
              name="description"
              required
              placeholder="Please describe your home..."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              type="number"
              required
              placeholder="Price per Night in USD"
              min={10}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input name="image" type="file" required />
          </div>

          {/* add guest section, rooms, beds, bathrooms */}
          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Guests</h3>
                  <p className="text-muted-foreground text-sm">
                    How many guests do you want?
                  </p>
                </div>
                <Counter name="guest" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Rooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many rooms do you have?
                  </p>
                </div>
                <Counter name="room" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Beds</h3>
                  <p className="text-muted-foreground text-sm">
                    How beds do you have?
                  </p>
                </div>
                <Counter name="bed" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Bathrooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many bathrooms do you have?
                  </p>
                </div>
                <Counter name="bathroom" />
              </div>
            </CardHeader>
          </Card>
        </div>
        {/* button section, back and next */}
        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-16 md:h-24">
          <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Link href={`/create/${params.id}/amenities`}>
              <Button variant="secondary" size="lg" className="max-md:h-9 max-md:rounded-md max-md:px-3"> Back </Button>
            </Link>
            <NextSubmitButton/>
          </div>
        </div>
      </form>
    </>
  )
}

export default DescriptionPage