const renderField = ({
  input,
  placeholder,
  label,
  type,
  meta: { touched, error, warning }
}) =>
    <div>
        <div>
            <input {...input} placeholder={placeholder} type={type} className="form-control" />
            {touched && (
                (error &&
                    <div className="form-error">
                    {error}
                    </div>
                )
            ) }
        </div>
    </div>

export default renderField
