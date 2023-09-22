export type GetAddressByCoordinateResponse = {
  v2: {
    status: {
      code: 0;
      name: 'ok';
      message: 'done';
    };
    address: {
      jibunAddress: string;
      roadAddress: string;
    };
  };
};
