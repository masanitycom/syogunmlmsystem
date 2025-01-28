import * as React from "react";

export const Sheet = ({
    children,
    open,
    onClose,
}: {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}) => {
    return (
        open && (
            <div className="sheet">
                <div className="sheet-content">{children}</div>
                <button onClick={onClose}>Close</button>
            </div>
        )
    );
};
