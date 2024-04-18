import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 opacity-100 z-20">
      <AiOutlineLoading3Quarters className="animate-spin size-10" />
    </div>
  )
}