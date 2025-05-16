export default function IconButton({ icon, onClick }) {
    return (
        <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <img src={icon} alt="Icon" style={{ width: '24px', height: '24px' }} />
        </button>
    );
}