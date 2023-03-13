import * as React from 'react';

import Tag from '@/components/tag/Tag';

export default function TagSandbox() {
  return (
    <div className='layout py-20 space-x-4'>
      <Tag>Default</Tag>
      <Tag color='success'>Default</Tag>
      <Tag color='danger'>Default</Tag>
      <Tag color='purple'>Default</Tag>
      <Tag color='skyblue'>Default</Tag>
      <Tag color='warning'>Default</Tag>
    </div>
  );
}
