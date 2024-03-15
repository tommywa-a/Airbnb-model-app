'use client'

import { Range } from "react-date-range"
import Calendar from "../inputs/Calendar"
import Button from "../Button"

interface ListingReservationProps {
  price: number
  totalPrice: number
  onChangeDate: (value: Range) => void
  dateRange: Range
  onSubmit: () => void
  disabled?: boolean
  disabledDates: Date[]
}


const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates
}) => {

  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(price)

  const formatedTotalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(totalPrice)

  return (
    <div className="
      bg-white
      rounded-xl
      border-[1px]
      border-neutral-200
      overflow-hidden
    ">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          {formatedPrice}
        </div>
        <div className="font-light text-neutral-600">
          / night
        </div>
      </div>

      <hr />

      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />

      <hr />

      <div className="p-4">
        <Button
          disabled={disabled}
          label="Reserve"
          onClick={onSubmit}
        />
      </div>

      <div className="
        p-4
        flex
        flex-row
        items-center
        justify-between
        font-semibold
        text-lg
      ">
        <div>
          Total
        </div>
        <div>
          {formatedTotalPrice}
        </div>
      </div>
    </div>
  )
}

export default ListingReservation