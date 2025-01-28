import * as React from "react";

export const AlertDialog = ({
    open,
    onOpenChange,
    children,
}: {
    open: boolean;
    onOpenChange: (isOpen: boolean) => void;
    children: React.ReactNode;
}) => {
    return (
        open && (
            <div className="alert-dialog">
                <div className="dialog-content">{children}</div>
                <button onClick={() => onOpenChange(false)}>Close</button>
            </div>
        )
    );
};

export const AlertDialogContent = ({
    children,
}: {
    children: React.ReactNode;
}) => <div className="alert-dialog-content">{children}</div>;

export const AlertDialogHeader = ({
    children,
}: {
    children: React.ReactNode;
}) => <div className="alert-dialog-header">{children}</div>;

export const AlertDialogFooter = ({
    children,
}: {
    children: React.ReactNode;
}) => <div className="alert-dialog-footer">{children}</div>;
