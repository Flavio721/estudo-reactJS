function Input({ label, type, placeholder, value, onChange }) {
  const inputStyle = {
    marginLeft: "10px",
    width: "300px",
    marginTop: "10px",
    marginBottom: "10px",
  };
  const labelStyle = {
    marginTop: "10px",
    marginBottom: "10px",
  };
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        style={inputStyle}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
