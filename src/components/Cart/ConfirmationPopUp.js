import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  
} from "./styled";

const ConfirmationPopUp = ({
  onCancel = null,
  onConfirm = null,
  show = false
}) => {
  return show ? (
    <>
      <Button>
        <div>Please confirm your deletion</div>
        <Button>
          <Button
            onClick={() => typeof onConfirm === "function" && onConfirm()}
          >
            confirm
          </Button>
          <Button onClick={() => typeof onCancel === "function" && onCancel()}>
            cancel
          </Button>
        </Button>
      </Button>
      
    </>
  ) : null;
};

ConfirmationPopUp.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  show: PropTypes.bool
};

export default ConfirmationPopUp;
