import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Controls from "./controls/Controls";
import "./controls/index.css";
import { Form, useForm } from "./controls/useForm";

const initialFValues = {
  pMaXacNhan: "22RTMRRN",
  pISDN: "702966613",
};
export default function AuthPopup(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("pMaXacNhan" in fieldValues)
      temp.pMaXacNhan = fieldValues.pMaXacNhan
        ? ""
        : "Tên Không Được Để Trống ";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("pISDN" in fieldValues)
      temp.pISDN =
        fieldValues.pISDN.length > 8 ? "" : "Số Điện Thoại Không Hợp Lệ ";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "Vui Lòng Chọn Số Lượng";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid>
          <Controls.Input
            label="Số Điện Thoại"
            name="pISDN"
            value={values.pISDN}
            onChange={handleInputChange}
            error={errors.pISDN}
          />
          <Controls.Input
            name="pMaXacNhan"
            label="Mã Quà Tặng"
            value={values.pMaXacNhan}
            onChange={handleInputChange}
            error={errors.pMaXacNhan}
          />

          <div className="control-button">
            <Controls.Button type="submit" text="Xác Nhận" />
            <Controls.Button
              text="Đặt Lại"
              color="default"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
