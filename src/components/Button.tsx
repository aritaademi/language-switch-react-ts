
import React, { useState } from 'react';
import AllContent from './AllContent';
import GroupedContent from './GroupedContent';
import { Radio } from 'antd';

const Button: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'all' | 'grouped'>('all');

  //  shared props
  const languages: string[] = ['En', 'Mk'];
  const fields: string[] = ['Name', 'Description']

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="mb-6">
        <Radio.Group // antd tabs
          value={selectedView}
          onChange={(e) => setSelectedView(e.target.value)}
          buttonStyle="solid"
        >
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="grouped">Grouped</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        {selectedView === 'all' ? <AllContent languages={languages} fields={fields} /> : <GroupedContent languages={languages} fields={fields} />}
      </div>
    </div>
  );
};

export default Button;
