const Tabs = ({ tabs }: { tabs: string[] }) => {
    return (
        <div className="tabs">
            {tabs.map((tab, index) => (
                <button key={index} className="tab">
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
