import type { JSX } from "react"

const ContentWrapper = ({
  children,  
}: {children: React.ReactNode}) => {
  return ( 
    <div className="flex p-20 m-auto justify-center items-center">
        <div className="w-full">
            { children }
        </div>
    </div>
  );
}

export default ContentWrapper;