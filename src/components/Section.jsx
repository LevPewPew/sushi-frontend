import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Section() {
  const sectionData = useSelector((state) => state.sectionData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'UPDATE_SECTION_DATA',
      newSectionData: 'new test data !!!'
    });
  });

  return (
    <div>
      {sectionData}
    </div>
  )

}

export default Section;