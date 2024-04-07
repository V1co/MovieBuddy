import { Navigation } from "./Navigation"

export const Header = ( { children, title } ) => {
  return (
    <header className="w-full h-52 absolute top-0 left-0 border-b border-neutral-600 content-center bg-header bg-cover bg-left-bottom bg-blend-multiply bg-neutral-500 dark:bg-neutral-600">
      <div className="h-full flex flex-row justify-between items-center w-5/6 ml-auto mr-auto">
        <Navigation />
        {children}
        <h2 className="text-3xl font-bold text-white self-center">{title}</h2>
      </div>
    </header>
  )
}