const Loader = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-10 absolute top-0 left-0 w-full" >
      <div
        className="flex justify-center items-center h-8 relative w-8 animate-spin rounded-full border-4 border-blue-700 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>

    </div>
  )
}

export default Loader;