"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';

const Counter = ({name}: {name: string}) => {
  const [numberOfGuests, setNumberOfGuests] = useState(0);

  function increasee() {
    setNumberOfGuests(numberOfGuests + 1);
  }

  function decrease() {
    if (numberOfGuests > 0) {
      setNumberOfGuests(numberOfGuests - 1);
    }
  }
  return (
    <div className="flex items-center gap-x-4">
      <input type="hidden" name={name} value={numberOfGuests} />
      <Button variant="outline" size="icon" type="button" onClick={decrease}>
        <Minus className="h-4 w-4 text-primary" />
      </Button>
      <p className="font-medium text-lg">{numberOfGuests}</p>
      <Button variant="outline" size="icon" type="button" onClick={increasee}>
        <Plus className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
}

export default Counter