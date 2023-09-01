import React, { useCallback, useState } from "react";

import GalleryPage from "../GalleyPage/GalleryPage";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { DatePickerContainer } from "./styles";

const MainPage = () => {
  const [pickedDate, setPickedDate] = useState(null);
  const [isShouldReload, setIsShouldReload] = useState(false);

  const handleDateChange = (date) => {
    setPickedDate(date);
    setIsShouldReload(true);
  };

  const resetIsShouldReload = useCallback(() => {
    setIsShouldReload(false);
  }, []);

  return (
    <>
      <DatePickerContainer>
        <BasicDatePicker
          selectedDate={pickedDate}
          onDateChange={handleDateChange}
        />
      </DatePickerContainer>
      <GalleryPage
        isShouldReload={isShouldReload}
        resetIsShouldReload={resetIsShouldReload}
      />
    </>
  );
};

export default MainPage;
