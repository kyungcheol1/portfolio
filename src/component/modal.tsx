import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Modal from "react-modal";

// ComponentA.jsx
const ComponentA = () => {
    return <div>Component A Content</div>;
};

// ComponentB.jsx
const ComponentB = () => {
    return <div>Component B Content</div>;
};

export interface ICustomModal {
    isOpen?: boolean;
    content?: ReactNode;
    onClose?: Dispatch<SetStateAction<boolean>>;
    width?: number;
    height?: number;
    left?: number;
}

const Custom2 = (props: ICustomModal) => {
    const { isOpen = false, content, onClose, width, height, left } = props;
    const [showComponentA, setShowComponentA] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            Modal.setAppElement("body");
        }
    }, []);

    const handleClose = () => {
        if (onClose) {
            onClose(false);
        }
    };

    const toggleComponent = () => {
        setShowComponentA((prev) => !prev);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            style={{
                content: {
                    width: `${width}px`,
                    height: `${height}px`,
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    border: "none",
                },
                overlay: {
                    backgroundColor: "rgba(38, 37, 37, 0.75)",
                    // backgroundColor: 'rgba(0, 0, 0, 0)',
                },
            }}
        >
            {showComponentA ? <ComponentA /> : <ComponentB />}
            <button onClick={toggleComponent}>{showComponentA ? "Show Component B" : "Show Component A"}</button>
        </Modal>
    );
};

export default Custom2;

