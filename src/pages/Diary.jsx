import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import { getStringedDate } from '../util/getStringedDate';
import useDiary from '../hooks/useDiary';
import useTitle from '../hooks/useTitle';

const Diary = () => {
  const { id } = useParams(); 
  const nav = useNavigate();

  const curDiaryItem = useDiary(id);

  useTitle(`${id}일기쓰기`);

  if (!curDiaryItem) {
    return <div>데이터를 로딩 중입니다...</div>;
  }

  const { createDate, date, emotionId, content } = curDiaryItem;
  const targetDate = createDate || date;
  const title = getStringedDate(new Date(Number(targetDate)));

  return (
    <div>
      <Header
        leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />}
        title={title}
        rightChild={<Button text={'수정하기'} type={'POSITIVE'} onClick={() => nav(`/edit/${id}`)} />}
      />
      <Viewer emotionId={emotionId} content={content} /> 
    </div>
  );
};

export default Diary;