import React from 'react'

import JInput from '../../common/FormInput'

const treeDetailSty = { margin: '10px 10px' }
const inputTextSty = { color: 'black', margin: '0 5px', width: '90%' }

const titleInput = {
  name: 'title',
  type: 'text',
  style: inputTextSty,
  focus: true
}

const radioInput1 = { name: 'radioGroup', type: 'radio', radioValue: 'dev' }
const radioInput2 = { name: 'radioGroup', type: 'radio', radioValue: 'home' }
const radioInput3 = { name: 'radioGroup', type: 'radio', radioValue: 'sys' }

export default class TreeDetail extends React.Component {
  state = { title: 'Hello!' }

  componentWillReceiveProps = nextProps => {
    const { title } = this.state
    if (title !== nextProps.treeNode.title)
      this.setState({ title: nextProps.treeNode.title })
  }

  handleTitleChange = (name, value) => {
    const { handleChange } = this.props
    handleChange(name, value)
  }

  handleValueChange = (name, value) => {
    const { handleChange } = this.props
    handleChange('type', value)
  }

  render() {
    const { treeNode } = this.props
    titleInput.textValue = treeNode.title

    const currentRadioGroupValue = treeNode.type
    radioInput1.radioChecked = currentRadioGroupValue === radioInput1.radioValue
    radioInput2.radioChecked = currentRadioGroupValue === radioInput2.radioValue
    radioInput3.radioChecked = currentRadioGroupValue === radioInput3.radioValue
    return (
      <div id="treeDetail" style={treeDetailSty}>
        <JInput input={radioInput1} handleChange={this.handleValueChange} />
        &nbsp;Dev &nbsp;
        <JInput input={radioInput2} handleChange={this.handleValueChange} />
        &nbsp;Home &nbsp;
        <JInput input={radioInput3} handleChange={this.handleValueChange} />
        &nbsp;System &nbsp;
        <br />
        <br />
        <JInput input={titleInput} handleChange={this.handleTitleChange} />
        <br />
      </div>
    )
  }
}
