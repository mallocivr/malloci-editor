import PropTypes from "prop-types"
import React from "react"
import { PageHeader } from 'antd';

const Header = ({ siteTitle }) => (

  <PageHeader
    className="site-page-header"
    title={siteTitle}

  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
