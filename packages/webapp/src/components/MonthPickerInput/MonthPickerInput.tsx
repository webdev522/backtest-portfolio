import { css } from '@emotion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import InputBase from '../InputBase'
import MonthPicker from '../MonthPicker'
import { months } from '../MonthPicker/MonthPicker'
import { MonthYearValue } from '../../types/MonthYearValue'

export type MonthPickerInputProps = {
  minimum?: MonthYearValue
  maximum?: MonthYearValue
  value: MonthYearValue
  onChange(value: MonthYearValue): void
  className?: string
}

const formatDate = ({ month, year }: MonthYearValue) =>
  `${months[month - 1]} · ${year}`

function MonthPickerInput({
  minimum,
  maximum,
  value,
  onChange,
  className,
}: MonthPickerInputProps) {
  const [localValue, setLocalValue] = useState<MonthYearValue>(value)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const onClose: Parameters<typeof useOnClickOutside>[1] = (e) => {
    if (ref.current === e.target || ref.current?.contains(e.target as Node)) {
      return
    }
    setOpen(false)
  }

  const handleChange = (value: MonthYearValue) => {
    setLocalValue(value)
    setOpen(false)
  }

  useEffect(() => {
    onChange(localValue)
  }, [localValue, onChange])

  const today = useMemo(() => {
    const d = new Date()
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
    }
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <InputBase css={wrapper} ref={ref} className={className}>
      <div
        css={textStyle}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (['Enter', 'Space'].includes(e.key)) {
            handleOpen()
          }
        }}
        tabIndex={0}
      >
        {formatDate(localValue)}
      </div>
      <MonthPicker
        onChange={handleChange}
        value={localValue}
        visible={open}
        onClose={onClose}
        minimum={minimum}
        maximum={maximum}
      />
    </InputBase>
  )
}

const wrapper = css`
  position: relative;
`

const textStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::focus-visible {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
`

export default MonthPickerInput
