import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "./controls/Controls";
import { useForm, Form } from "./controls/useForm";
import * as Service from "../services/Service";
import "./controls/index.css";
import { AuthContext } from "../contexts/AuthContext";
import { LocationContext } from "../contexts/LocationContext";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../api/check.api";

const initialFValues = {
  pMaXacNhan: "GCGUHVQG",
  pISDN: "911656561",
};
export default function AuthPopup(props) {
  const history = useHistory();
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
    await checkAuth(values)
      .then((res) => {
        console.log("dataa bene popup", res.data);
        history.push({
          pathname: "/product",
          state: { detail: res.data },
          // search: `?email=${data.email}`,
        });
      })
      .catch((error) => {
        console.log(error);

        //  props.handleChangeLoading(false);
        //  setOpenModal(true);
      });
    // history.push("/product");
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
