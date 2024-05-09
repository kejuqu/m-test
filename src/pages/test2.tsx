import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { HighlightJS } from "@/components";

// test 2 result:
function confirm() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() > 0.5);
    }, 2000);
  });
}

const Test2: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setLoading(true);
    if (await confirm()) {
      message.success("you pass the test");
      setIsModalOpen(false);
      setLoading(false);
    } else {
      message.error("please try again");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Test2 Demo
      </Button>
      <Modal
        title="Test Test"
        open={isModalOpen}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
      >
        <HighlightJS>
          {`function confirm() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random() > 0.5);
    }, 2000);
  });
}`}
        </HighlightJS>
      </Modal>
    </>
  );
};

export default Test2;
