const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <>I am Header</>
      {children}
      <>I am Footer</>
    </>
  );
};

export default Layout;
