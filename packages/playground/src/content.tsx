import React from 'react'
import { ComponentTreeWidget, useTreeNode } from '@designable/react'
import { observer } from '@formily/reactive-react'
import 'antd/dist/antd.css'

export const Content = () => (
  <ComponentTreeWidget
    components={{
      TestComponent: observer((props) => {
        const node = useTreeNode()
        return (
          <span
            {...props}
            style={{
              background: '#eee',
              ...props.style,
              padding: '10px 20px',
              border: '1px solid #ddd',
            }}
          >
            {node.props.title}
            {props.children}
          </span>
        )
      }),
      Field: observer((props) => {
        const node = useTreeNode()
        return (
          <span
            {...props}
            style={{
              background: '#eee',
              display: 'inline-block',
              ...props.style,
              padding: '10px 20px',
              border: '1px solid #ddd',
            }}
          >
            {node.props.title}
            {props.children}
          </span>
        )
      }),
      Card: observer((props) => {
        const node = useTreeNode()
        return (
          <div
            {...props}
            style={{
              background: '#eee',
              display: 'grid',
              padding: '10px 20px',
              border: '1px solid #ddd',
              ...props.style,
            }}
          >
            {props.children ? props.children : <span>拖拽字段进入该区域</span>}
          </div>
        )
      }),
    }}
  />
)
