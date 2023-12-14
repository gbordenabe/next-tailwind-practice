interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: Props) => {
  return (
    <label
      className='block text-sm font-bold leading-6 text-gray-500'
      {...props}
    >
      {children}
    </label>
  );
};
