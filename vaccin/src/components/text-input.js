export default function TextInput(props) {
  const {
    label = undefined,
    name = undefined,
    onChange = undefined,
    ...otherProps
  } = props;
  return (
    <label className="text-white font-bold space-x-1" htmlFor={name}>
      <span className="mb-4">{label}</span>
      <input
        {...otherProps}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        type="text"
        className="block w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none border focus:border-2 focus:border-cyan-400"
      />
    </label>
  );
}
