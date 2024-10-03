import { fetchDataClasses } from "@/redux/reducers/classes";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchClasses = () => {
  const dispatch: AppDispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.classes);
  useEffect(() => {
    fetchListPublic();
  }, []);
  const fetchListPublic = () => {
    try {
      if (!error) {
        dispatch(fetchDataClasses());
      }
    } finally {
      //
    }
  };
};
export default useFetchClasses;
