import { useForm } from 'react-hook-form';

const OrderForm = ({handleOnConfirm}) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const onSubmit = (data,event) => { 
    handleOnConfirm(data,event)
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="order-form">
      <p>Confirma tu compra!</p>
      <input type="text" placeholder="Nombre..." maxLength="15" className="input-form" {...register("name", { required: true, pattern: /^[a-z ,.'-]+$/i})} />
      {errors.name?.type === "required" && <p>El nombre es requerido.</p>}
      {errors.name?.type === "pattern" && <p>El nombre ingresado no es valido.</p>}
      
      <input type="text" placeholder="Apellido..." maxLength="15" className="input-form" {...register("surname", { required: true, pattern: /^[a-z ,.'-]+$/i })} />
      {errors.surname?.type === "required" && <p>El apellido es requerido.</p>}
      {errors.surname?.type === "pattern" && <p>El apellido ingresado no es valido.</p>}
      
      <input type="tel" placeholder="Telefono..." maxLength="10" className="input-form" {...register("phone", { required: true, pattern: /^[0-9]/ })} />
      {errors.phone?.type === "required" && <p>El telefono es requerido.</p>}
      {errors.phone?.type === "pattern" && <p>El telefono ingresado no es valido.</p>}
      
      <input type="mail" placeholder="Correo..." className="input-form" {...register("email", { required: true , pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
      {errors.email?.type === "required" && <p>El email es requerido.</p>}
      {errors.email?.type === "pattern" && <p>El email es invalido.</p>}

      <input type="mail" placeholder="Repetir correo..." className="input-form" {...register("confirmationEmail", { required: true , pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i , validate: value => value === getValues("email") })} />
      {errors.confirmationEmail?.type === "required" && <p>El mail de confirmacion es requerido.</p>}
      {errors.confirmationEmail?.type === "pattern" && <p>El mail de confirmacion es invalido.</p>}
      {errors.confirmationEmail?.type === "validate" && <p>Los correos ingresados no coinciden.</p>}

      <input type="submit" className="product-button"></input>
      
    </form>
  )
}

export default OrderForm