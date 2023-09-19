import { memo, RefObject, useEffect, useState } from 'react';
import { Overlay, useMap, useNavermaps } from 'react-naver-maps';

import { useGetClusterIcon } from '@hooks/useGetClusterIcon';

import { Restaurant } from '../../models/getRestaurantData';

import { makeMarkerClustering } from './marker-cluster';

function MarkerCluster({
  markers,
  markerInfo,
}: {
  markers: Array<RefObject<naver.maps.Marker>>;
  markerInfo?: Restaurant[];
}) {
  const navermaps = useNavermaps();
  const map = useMap();

  const { htmlMarker1 } = useGetClusterIcon(navermaps); // 클러스트 아이콘 dom 리스트

  // https://github.com/zeakd/react-naver-maps/blob/main/website/src/samples/marker-cluster.js
  const MarkerClustering = makeMarkerClustering(window.naver);

  const getCluster = () => {
    const markerList = markers.map((_marker) => {
      return _marker.current;
    });

    // @ts-ignore
    const cluster = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 10, // 조절하면 클러스터링이 되는 기준이 달라짐 (map zoom level)
      map: map,
      markers: markerList.filter((marker) => marker),
      disableClickZoom: false,
      gridSize: 120,
      icons: [htmlMarker1],
      indexGenerator: [5, 10, 15, 20, 30],
      stylingFunction: function (clusterMarker: any, count: number) {
        clusterMarker.getElement().querySelector('div:first-child').innerText =
          count;
      },
    });

    return cluster;
  };

  // Customize Overlay 참고
  // https://zeakd.github.io/react-naver-maps/guides/customize-overlays/
  // 타입이 따로 없어서 any처리
  const [cluster, setCluster] = useState<any>(null);

  useEffect(() => {
    const cluster = getCluster();
    // 클러스트 객체 생성해서, 상태에 저장
    setCluster(cluster);
  }, [markers]);

  return <>{cluster && <Overlay element={cluster} />}</>;
}

export default memo(MarkerCluster);
