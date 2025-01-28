const Switch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider"></span>
        </label>
    );
};

export default Switch;
