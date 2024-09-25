function DynamicButton({ label, onClick }) {
    return (
        <button style={{ border: `1px solid white` }} onClick={onClick}>{label}</button>
    );
    }export default DynamicButton;
