import React from 'react'

class JInput extends React.Component {
  state = { textValue: '' }

  componentDidMount = () => {
    const { input } = this.props
    if (input.textValue) this.setState({ textValue: input.textValue })
    if (input.focus) this.inputRef.focus()
  }

  componentWillReceiveProps = nextProps => {
    const { textValue } = this.state
    if (nextProps.input.textValue && textValue !== nextProps.input.textValue) {
      this.setState({ textValue: nextProps.input.textValue })
    }
  }

  handleCheckedChange = event => {
    const { handleChange, input } = this.props
    handleChange(input.name, event.target.checked)
  }

  handleTextValueChange = event => {
    const { handleChange, input } = this.props
    const newValue = event.target.value
    this.setState({ textValue: newValue })
    handleChange(input.name, newValue)
  }

  handleValueChange = event => {
    const { handleChange, input } = this.props
    handleChange(input.name, event.target.value)
  }

  handleFolderChange = event => {
    const { handleChange, input } = this.props
    handleChange(input.name, event.target.value)
  }

  render() {
    const { input } = this.props
    const inputSty = input.style || { color: '#4d2c3d' }
    const inputType = input.type || 'text'
    let returnIt = ''

    switch (inputType) {
      case 'checkbox': {
        const checkedValue =
          input.checkedValue != null ? input.checkedValue : false
        returnIt = (
          <input
            ref={ref => {
              this.inputRef = ref
            }}
            type={inputType}
            style={inputSty}
            checked={checkedValue}
            onChange={this.handleCheckedChange}
          />
        )
        break
      }
      case 'radio': {
        const radioValue = input.radioValue || ''
        const radioChecked =
          input.radioChecked != null ? input.radioChecked : false
        returnIt = (
          <input
            ref={ref => {
              this.inputRef = ref
            }}
            type={inputType}
            style={inputSty}
            checked={radioChecked}
            value={radioValue}
            onChange={this.handleValueChange}
          />
        )
        break
      }
      case 'color': {
        const colorValue = input.colorValue || '#1A3212'
        returnIt = (
          <input
            type={inputType}
            ref={ref => {
              this.inputRef = ref
            }}
            style={inputSty}
            value={colorValue}
            onChange={this.handleValueChange}
          />
        )
        break
      }
      case 'number':
      case 'range': {
        const numberValue = input.numberValue || 0
        const min = input.min || 0
        const max = input.max || 100
        const step = input.step || 1
        returnIt = (
          <input
            type={inputType}
            ref={ref => {
              this.inputRef = ref
            }}
            style={inputSty}
            value={numberValue}
            min={min}
            max={max}
            step={step}
            onChange={this.handleValueChange}
          />
        )
        break
      }
      case 'file': {
        returnIt = (
          <input
            type={inputType}
            ref={ref => {
              this.inputRef = ref
            }}
            style={inputSty}
            onChange={this.handleFolderChange}
            multiple
          />
        )
        break
      }
      default: {
        const { textValue } = this.state
        returnIt = (
          <input
            type={inputType}
            ref={ref => {
              this.inputRef = ref
            }}
            style={inputSty}
            value={textValue}
            onChange={this.handleTextValueChange}
          />
        )
        break
      }
    }

    return returnIt
  }
}

export default JInput
