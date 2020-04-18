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

          <div className="gutter-row">
            <Button type="primary">Build</Button>
          </div>
        
          <div className="gutter-row" id="imageupload">
            <ImageFiles></ImageFiles>
          </div>
        
      </Col>
      <Col className="gutter-col" span={12}>
        <div id="exhibitmaster">
          <ExhibitMaster></ExhibitMaster>
        </div>
      </Col>
    </Row>

    <script>
      
    </script>

  </Layout>
)

export default IndexPage
