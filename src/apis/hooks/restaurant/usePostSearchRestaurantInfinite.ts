import { searchMapRestaurantData } from '@apis/common/restaurant';
import { PostRestaurantSearchRequest } from '@apis/responses/Restaurant/PostMapSearchRestaurant';

const fetchPostSearchRestaurantData = async ({
  page,
  startLocation,
  endLocation,
  filter,
}: PostRestaurantSearchRequest) => {
  const res = await searchMapRestaurantData({
    page,
    startLocation,
    endLocation,
    filter,
  });
  return res.data;
};

// export const usePostSearchRestaurantInfinite = ({
//   page: { size = 10 },
// }: PostRestaurantSearchRequest) => {
//   const { data, ...rest } = useInfiniteQuery(
//     [Keys.RESTAURANT, page, size, sort],
//     ({ pageParam = 0 }) =>
//       fetchPostSearchRestaurantData({
//         page: pageParam,
//       }),
//     {
//       getNextPageParam: (data) => {
//         if (data.data.page.pageLast) {
//           return data.data.page.currentPage + 1;
//         }
//       },
//     },
//   );
//   return {
//     restaurantData: data && data.pages,
//     ...rest,
//   };
// };
