function AuthLayout({ children, ...props }) {
  return (
    <div className="" {...props}>
      <h1>auth layout</h1>
      <div className="">{children}</div>
    </div>
  );
}
export default AuthLayout;
