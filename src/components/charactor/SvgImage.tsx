const SvgImage = ({ href }: { href: string }) => {
  return (
    <>
      <image href={href} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
    </>
  );
};

export default SvgImage;
