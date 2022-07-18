import ButtonPrimary from "./misc/button-primary";

const ContactUs = () => {
    return (
    
    <div className="w-full md:w-96 md:max-w-full mx-auto">
  <div className="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" action="">
      <label className="block mb-6">
        <span className="text-gray-700">نام و نام خانوادگی </span>
        <input
          type="text"
          name="name"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="نام ..."
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">آدرس ایمیل</span>
        <input
          name="email"
          type="email"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="joe.bloggs@example.com"
          required
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">متن</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="هر آنچه که سوال دارید بپرسید ..."
        ></textarea>
      </label>
      <div className="mb-6">
      <ButtonPrimary>ارسال</ButtonPrimary>
      </div>
    
    </form>
  </div>
</div>
   
        )
}


export default ContactUs;
