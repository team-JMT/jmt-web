export const useGetClusterIcon = (navermaps: typeof naver.maps) => {
  const htmlMarker1 = {
    content: `<div style="cursor:pointer; display: flex; width:80px;height:80px; align-items: center; justify-content: center; line-height: 60px; text-align: center; align-content: center; font-size:24px; font-weight:500; color:#FF531A; background: #ffffff; box-shadow: 0px 4px 16px rgba(22, 26, 29, 0.08); border-radius: 40px"></div>`,
    size: new navermaps.Size(80, 80),
    anchor: new navermaps.Point(20, 20),
  };

  return { htmlMarker1 };
};
