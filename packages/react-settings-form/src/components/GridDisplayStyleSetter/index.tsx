import React from 'react'
import { useField, Field, observer } from '@formily/react'
import { FormItem } from '@formily/antd'
import { Radio } from 'antd'
import { usePrefix, IconWidget } from '@designable/react'
import { FlexStyleSetter } from '../FlexStyleSetter'
import cls from 'classnames'
import './styles.less'
export interface IDisplayStyleSetterProps {
  className?: string
  style?: React.CSSProperties
  value?: string
  onChange?: (value: string) => void
}

export const GridDisplayStyleSetter: React.FC<IDisplayStyleSetterProps> =
  observer((props) => {
    const field = useField<Formily.Core.Models.Field>()
    const prefix = usePrefix('display-style-setter')
    return (
      <>
        <Field name="" component={[FlexStyleSetter]} />
      </>
    )
  })
