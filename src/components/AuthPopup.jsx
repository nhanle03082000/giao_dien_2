import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "./controls/Controls";
import { useForm, Form } from "./controls/useForm";
import * as Service from "../services/Service";
import "./controls/index.css";
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  maquatang: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function AuthPopup(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("maquatang" in fieldValues)
      temp.maquatang = fieldValues.maquatang ? "" : "Tên Không Được Để Trống ";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Số Điện Thoại Không Hợp Lệ ";
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

  const handleSubmit = (e) => {
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
            name="email"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="maquatang"
            label="Mã Quà Tặng"
            value={values.maquatang}
            onChange={handleInputChange}
            error={errors.maquatang}
          />
          {/* <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          /> */}

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
