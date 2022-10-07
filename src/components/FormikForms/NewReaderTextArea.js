import { useField } from "formik";

const NewReaderTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    
    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <textarea {...field} {...props} />
            {meta.error ? (
                <small className="alert alert-danger form-text text-muted">
                    {meta.error}
                </small>

            ) : null}
        </div>
    );  
};

export default NewReaderTextArea;
