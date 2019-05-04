import classNames from 'classnames'
import React from 'react'
import lodashGet from 'lodash/get'

const TreeRootSty = { lineHeight: '120%' }
const liSty = { listStyleType: 'none' }
const ulSty = { height: 'inherit', WebkitPaddingStart: '16px' }
const ulStyle = { height: 'inherit', WebkitPaddingStart: '16px' }
const iconStyBase = {
  background: "url('./img/sun.ico') 0/16px no-repeat",
  marginRight: '10px',
  width: '16px'
}

const defaultColors = {
  parent: '#AF90A5',
  parentSelected: '#7BB53B',
  endnode: '#afac87',
  endnodeSelected: '#b58900'
}

const TreeViewNode = props => {
  const { customColors, iconClick, node, options, titleClick } = props
  const clickHandler = () => {
    titleClick(node)
  }
  const iconHandler = () => {
    if (node.children && node.children.length > 0) {
      iconClick(node)
    } else {
      clickHandler()
    }
  }
  const titleColors = customColors || defaultColors
  const titleSty = { marginTop: '2px' }
  let childNodes
  let hasChildren = false

  if (node.children && node.children.length > 0) {
    childNodes = node.children.map(child => (
      <li key={child.nodeid} style={liSty}>
        <TreeViewNode
          customColors={customColors}
          iconClick={iconClick}
          node={child}
          options={options}
          titleClick={titleClick}
        />
      </li>
    ))
    hasChildren = true
  }
  if (hasChildren) {
    titleSty.color = node.selected
      ? titleColors.parentSelected
      : titleColors.parent
  } else {
    titleSty.color = node.selected
      ? titleColors.endnodeSelected
      : titleColors.endnode
  }

  let isClosed = true
  if (node.closed !== null) isClosed = node.closed

  const branch = isClosed ? null : (
    <ul id="ulStyle" key={node.nodeid} style={ulStyle}>
      {childNodes}
    </ul>
  )

  const TreeNodePClass = classNames(
    'tree-node-p',
    {
      'tree-node-p-can-toggle': hasChildren
    },
    {
      'tree-node-p-no-toggle': !hasChildren
    }
  )

  const iconSty = Object.assign({}, iconStyBase)
  const iconType = lodashGet(props, options.typeName)
  if (iconType === options.icon.sun)
    iconSty.background = "url('./img/sun.ico') 0/16px no-repeat"
  else if (iconType === options.icon.leaf)
    iconSty.background = "url('./img/leaf.ico') 0/16px no-repeat"
  else if (iconType === options.icon.snow)
    iconSty.background = "url('./img/snow.ico') 0/16px no-repeat"
  // else iconSty.background = "url('./img/sun.ico') 0/16px no-repeat";

  return (
    <div id="TreeNode">
      <div className={TreeNodePClass}>
        <div
          id="iconSty"
          onClick={iconHandler}
          onKeyPress={iconHandler}
          role="button"
          style={iconSty}
          tabIndex={0}
        >
          &nbsp;
        </div>
        <div
          id="titleSty"
          onClick={clickHandler}
          onKeyPress={clickHandler}
          role="button"
          style={titleSty}
          tabIndex={0}
        >
          {node.title}
        </div>
      </div>
      {branch}
    </div>
  )
}

const TreeView = props => {
  const { data, options, iconClick, titleClick, customColors } = props
  const childNodes = data.map((child, index) => (
    <li key={`${child.nodeid}${index + 1}`} style={liSty}>
      <TreeViewNode
        customColors={customColors}
        iconClick={iconClick}
        node={child}
        options={options}
        titleClick={titleClick}
      />
    </li>
  ))
  return (
    <div id="TreeRootSty" style={TreeRootSty}>
      <ul id="ulSty" key="ulRoot" style={ulSty}>
        {childNodes}
      </ul>
    </div>
  )
}

export default TreeView
