import type { JSX } from "react"

const ContentWrapper = ({content}: {content: JSX.Element}) => {
  return ( 
    <div className="flex p-20 m-auto justify-center items-center">
        <div className="w-full">
            { content }
        </div>
    </div>
  );
}

export default ContentWrapper;