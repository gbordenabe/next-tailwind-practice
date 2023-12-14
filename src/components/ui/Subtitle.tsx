interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Subtitle = ({ children, ...props }: Props) => {
  return (
    <h2
      className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white'
      {...props}
    >
      {children}
    </h2>
  );
};
