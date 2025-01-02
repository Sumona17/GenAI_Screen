import React, { useEffect, useState } from 'react';
import { Card, Tabs } from 'antd';
import FormComp from '../../components/FormComp';
import axios from 'axios';

const { TabPane } = Tabs;

export default function UITabs() {
  const [tabsData, setTabsData] = useState([]);
  const apiEndpoint = 'http://localhost:8082/api/form/getform?state=NY&lineOfBusiness=Commercial';

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        console.log(res.data);
        setTabsData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey="0">
        {tabsData.map((tab, tabIndex) => (
          <TabPane tab={tab.tab} key={tabIndex}>
            {tab.sections.map((section, sectionIndex) => (
              <Card
                key={sectionIndex}
                title={section.sectionName}
                bordered={false}
                style={{
                  marginBottom: 16,
                  backgroundColor: '#f9f9f9',
                  borderRadius: 12,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                  padding: 16
                }}
              >
                <FormComp formObj={section.fields} />
              </Card>
            ))}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
