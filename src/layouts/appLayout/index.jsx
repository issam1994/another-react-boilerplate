function AppLayout({ children, ...props }) {
  return (
    <div className="" {...props}>
      <h1>user layout</h1>
      <div className="">{children}</div>
    </div>
  );
}

export default AppLayout;
