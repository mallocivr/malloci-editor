import React from "react"

import ExhibitMaster from "../components/exhibitmaster"
import ExhibitText from "../components/exhibittext"
import ImageFiles from "../components/imagefiles"
import { Button } from 'antd';
import { Row, Col } from 'antd';

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Malloci Editor" />
    <Row>
      <Col className="gutter-col" span={12}>
          <div className="gutter-row" id="exhibittext">
            <ExhibitText />
          </div>
        
          <div className="gutter-row" id="imageupload">
            <ImageFiles></ImageFiles>
          </div>
        
          <div className="gutter-row">
            <Button type="primary">Build</Button>
          </div>
        
      </Col>
      <Col className="gutter-col" span={12}>
      {/* <Col xs={{ span: 2, offset: 1 }} sm={{ span: 4, offset: 1 }} md={{ span: 6, offset: 1 }} lg={{ span: 8, offset: 1 }} xl={{ span: 10, offset: 1 }}> */}
        <div id="exhibitmaster">
          <ExhibitMaster></ExhibitMaster>
        </div>
      </Col>
    </Row>

  </Layout>
)

export default IndexPage
