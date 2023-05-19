import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DetailBottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
  return (
    <Backdrop
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={() => onClose()}
    >
      <BottomSheet
        initial={{ y: '100%' }}
        animate={isOpen ? { y: 0 } : { y: '100%' }}
        // exit={{ y: '100%' }}
        transition={{ duration: 0.3 }}
      >
        <BottomSheetButton>수정하기</BottomSheetButton>
        <BottomSheetButton onClick={() => onclose}>삭제하기</BottomSheetButton>
      </BottomSheet>
    </Backdrop>
  );
};

export default DetailBottomSheet;
const Backdrop = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: flex-end;
  top: 48px;

  height: 100vh;
  /* gray900 */
  z-index: 9;
  width: 100vw;
  background-color: #161a1d40;
`;
const BottomSheet = styled(motion.div)`
  z-index: 10;
  position: relative;
  background-color: #fff;
  padding: '20px';
  width: 100%;
  height: 212px;
  padding: 20px;
  border-radius: 24px 24px 0px 0px;
  position: sticky;
  bottom: 0;
`;

const BottomSheetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  background: #ffffff;
  /* gray100 */
  border: 2px solid #f1f3f4;
  border-radius: 8px;
  margin-top: 12px;
`;
