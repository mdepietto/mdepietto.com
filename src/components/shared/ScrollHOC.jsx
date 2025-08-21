import { useInView } from 'react-intersection-observer';

const ScrollHOC = ({ Component, children, props }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    willChange: 'transform, opacity',
  };

  return (
    <div ref={ref} style={style}>
      <Component {...props}>
        {children}
      </Component>
    </div>
  );
};

export default ScrollHOC;

