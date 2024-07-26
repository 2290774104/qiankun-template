import React from 'react';
import './index.css';
import { Button, Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  const toNextPage = () => {
    navigate('/nextPage');
  };

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <>
      <Button onClick={toNextPage}>前往下一个页面</Button>
      <div>
        <Calendar onPanelChange={onPanelChange} />;
      </div>
    </>
  );
}

export default Root;
