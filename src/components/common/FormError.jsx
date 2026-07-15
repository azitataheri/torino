function FormError({message}) {
    if(!message) return null;

  return (
    <p className="text-custome-red text-xs mt-3">
        {message}
    </p>
  )
}

export default FormError