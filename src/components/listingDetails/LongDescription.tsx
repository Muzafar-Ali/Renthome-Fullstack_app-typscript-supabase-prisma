"use client"
import React, { useState } from 'react'
import { 
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '../ui/alert-dialog'
import { ChevronRight, X } from 'lucide-react'

const LongDescription = ({ description }: { description: string | undefined}) => {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger>
      { 
        (description?.length ?? 0) > 355 && (
          <div className='flex items-center '>
            <h2 onClick={() => setIsOpen(true)} className='font-bold underline'>show more</h2>
            <ChevronRight className='h-[20px] w-[20px] font-bold'/>
          </div>
        )
      }
      </AlertDialogTrigger>
      <AlertDialogContent className='h-[500px] max-w-[1000px]  overflow-y-scroll'>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className='flex items-center justify-between'>
              <h2>Description</h2>
              <X 
                onClick={() => setIsOpen(false)}
                className='cursor-pointer'
              />
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <p>{ description }</p>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LongDescription
