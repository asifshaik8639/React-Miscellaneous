import React from 'react'
import { connect } from 'react-redux'

export const component = (props) => {
  return (
    <div>component</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(component)