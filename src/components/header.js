import PropTypes from "prop-types"
import React, {useState} from "react"
import { PageHeader } from 'antd';


const Header = ({ siteTitle }) => (

  <PageHeader
    className="site-page-header"
    title={siteTitle}
    // avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}    
    />
    
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Malloci`,
}

export default Header
