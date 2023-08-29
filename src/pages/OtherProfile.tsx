import React from 'react';

import useGetUserInfo from '@apis/hooks/user/useGetUserInfo';
import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import Tab from '@components/common/Tab/Tab';
import LikePlace from '@layouts/OtherProfile/LikePlace';
import PostPlace from '@layouts/OtherProfile/PostPlace';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';

interface OtherProfileProps {
  params: {
    userId: number;
  };
}
const OtherProfile = ({ params }: OtherProfileProps) => {
  const { pop } = useHomeFlow();
  const [tab, setTab] = React.useState('POST');

  const { UserData } = useGetUserInfo(params.userId);

  if (UserData === undefined) {
    return <>오류!</>;
  } else {
    return (
      <AppScreen
        appBar={{
          title: <h1 className={'text-l-medium'}></h1>,
          backButton: {
            render: () => (
              <button className={'back-button'} onClick={pop}>
                <LeftArrowIcon />
              </button>
            ),
          },
          height: '48px',
        }}
      >
        <main className={'safe-area-layout-container'}>
          <div className={'other-profile-container'}>
            <div className={'user-info-container'}>
              <img className={'user-image'} src={UserData.profileImg} />
              <div className={'user-info'}>
                <a className={classNames('title-s-bold', 'gray900')}>
                  {UserData.nickname}
                </a>
                <div className={'post'}>
                  <p className={classNames('text-l-medium', 'gray500')}>
                    등록한 맛집
                  </p>
                  <p className={classNames('text-l-medium', 'gray900')}>
                    number
                  </p>
                </div>
              </div>
            </div>
            <Tab.Root defaultId={tab} setState={setTab}>
              <Tab id={'POST'} color={'gray900'}>
                등록한 맛집
              </Tab>
              <Tab id={'LIKE'} color={'gray900'}>
                좋아한 맛집
              </Tab>
            </Tab.Root>
            <br />
            <AnimatePresence mode="sync">
              {tab === 'POST' ? <PostPlace /> : <LikePlace />}
            </AnimatePresence>
          </div>
        </main>
      </AppScreen>
    );
  }
};

export default OtherProfile;
