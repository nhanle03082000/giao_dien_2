import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import error from "../../assets/images/error.png";
import { useHistory } from "react-router-dom";

export default function ModalErrorComponent(props) {
  const history = useHistory();

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="modal-img">
              <img src={error} alt="" width="100%" />
            </div>
            <div className="modal-title">
              <span>{props.title}</span>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={props.handleClickHome} color="primary">
            Đăng Nhập
          </Button> */}
          <Button onClick={props.handleClose} color="secondary" autoFocus>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
