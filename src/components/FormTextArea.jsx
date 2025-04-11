function FormTextArea({ label, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <textarea
        className="textarea h-24 w-full"
        placeholder="Type Here"
        name={name}
      ></textarea>
    </fieldset>
  );
}

export default FormTextArea;
