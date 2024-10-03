import { axiosBase } from "@/utils/axios";

export const requestGetClasses = () => {
  const config = {
    method: "GET",
    url: `/api/v1/classes`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosBase(config);
};
