import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddUserForm = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("نام و نام خانوادگی را وارد نمایید"),
    email: yup
      .string()
      .email()
      .required("لطفا یک آدرس ایمیل معتبر وارد نمایید"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required("سن باید عددی بیشتر از 18 باشد"),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "پسوردها یکی نیستند")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex gap-2 rounded-lg bg-my-silver dark:bg-back-body p-2">
        {/* Forms */}
        <div className="flex-1">
          <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="rounded-lg px-2 min-w-full p-1 text-back-body text-sm"
              type="text"
              placeholder="نام و نام خانوادگی"
              {...register("fullname")}
            />

            <br />
            <input
              className="rounded-lg p-1 px-2 min-w-full text-back-body mt-2"
              type="text"
              placeholder="ایمیل"
              {...register("email")}
            />
            <br />
            <input
              type="number"
              placeholder="سن"
              className="rounded-lg p-1 px-2 min-w-full text-back-body mt-2"
              {...register("age")}
            />
            <br />
            <input
              type="password"
              placeholder="Password..."
              className="rounded-lg p-1 px-2 min-w-full text-back-body mt-2"
              {...register("رمز عبور")}
            />
            <br />
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="rounded-lg p-1 px-2 min-w-full text-back-body mt-2"
              {...register("confirmPassword")}
            />
            <br />
            <input
              type="submit"
              className="mt-2 font-semibold px-4 py-1 text-gray-50 cursor-pointer rounded-lg bg-[#0891B2]"
              value="ایجاد"
            />
          </form>
        </div>
        {/* Errors */}
        <div className="p-2 flex-1">
          <div className="text-sm font-semibold text-pink-600">
            <p>{errors.fullname?.message}</p>

            <p className="mt-6">{errors.email?.message}</p>

            <p className="mt-3">{errors.age?.message}</p>

            <p className="mt-3">{errors.password?.message}</p>

            <p className="mt-5">{errors.confirmPassword?.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
