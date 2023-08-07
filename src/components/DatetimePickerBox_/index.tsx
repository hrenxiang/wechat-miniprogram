import { DatetimePicker, Popup } from "@antmjs/vantui"
import { View } from "@tarojs/components"
import dayjs from "dayjs"
import { useState } from "react"

const DatetimePickerBox_ = (props) => {

  const { getValue } = props;

  const [state, changeState] = useState({
    show: false,
    innerValue: new Date(),
  });

  const setState =
    (key, value) => {
      changeState({
        ...state,
        [key]: value,
      });
    }

  const toggleShow = (show: boolean) => {
    setState('show', show);
  }

  const onConfirm = (e) => {
    // setState('innerValue', e.detail.datetimePicker.innerValue);
    // setState('show', false);

    const updateState = {
      show: false,
      innerValue: e.detail.value
    }

    changeState(updateState);
    getValue(updateState);
  }

  const onCancel = () => {
    toggleShow(false);
  }

  return (
    <>
      <View onClick={() => toggleShow(true)} style={{ width: '100%', padding: '1rem', backgroundColor: 'rgba(248, 249, 250)', fontSize: '0.8rem' }}>
        {state.innerValue ? dayjs(state.innerValue).format('YYYY-MM-DD HH:mm') : '请选择日期'}
      </View>
      <Popup
        position="bottom"
        show={state.show}
        onClose={() => toggleShow(false)}
      >
        <DatetimePicker
          type="datetime"
          value={state.innerValue}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Popup>
    </>
  );
}

export default DatetimePickerBox_;
