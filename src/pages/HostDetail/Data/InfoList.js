import { AiOutlineUser } from 'react-icons/ai';
import { BsCloudPlus } from 'react-icons/bs';
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineCreditCard } from 'react-icons/ai';

export const InfoListData = [
  {
    id: 1,
    icon: <AiOutlineUser />,
    letter: '본인 인증',
  },
  {
    id: 2,
    icon: <BsCloudPlus />,
    letter: '70회 예약됨.',
  },
  {
    id: 3,
    icon: <BsFillPinMapFill />,
    letter: '서울시 서대문구',
  },
  {
    id: 4,
    icon: <AiOutlineClockCircle />,
    letter: '연락 가능 시간: 오전 9시 부터 오후 6시',
  },
  {
    id: 5,
    icon: <AiOutlineCreditCard />,
    letter: '카드결제, 계좌이체, 현금결제 가능',
  },
];
