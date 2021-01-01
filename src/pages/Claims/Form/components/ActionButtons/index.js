import React from "react";
import { Button } from "@material-ui/core";

export default function ActionButtons({ refs }) {
  const handleContinue = () => {
    refs.forEach((ref) => {
      ref.current.validate();
    });
  };

  return (
    <div>
      <Button variant="outlined" color="secondary">
        Anterior
      </Button>
      <Button variant="outlined" color="primary" onClick={handleContinue}>
        Siguiente
      </Button>
    </div>
  );
}
