import glusterImage from '../../public/assets/Gluster.svg';
export const useGetClusterIcon = (navermaps: typeof naver.maps) => {
  const htmlMarker1 = {
    content: `<div style="cursor:pointer; display: flex; width:60px;height:60px; align-items: center; justify-content: center; line-height: 60px; text-align: center; align-content: center; font-size:20px; font-weight:500; color:#FF531A; background:url(${glusterImage});background-size: contain;"></div>`,
    size: new navermaps.Size(40, 40),
    anchor: new navermaps.Point(20, 20),
  };

  return { htmlMarker1 };
};
