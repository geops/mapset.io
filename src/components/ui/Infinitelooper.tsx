import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/**
 * Original code from https://github.com/fershibli/slots-react/tree/main/src/components/common/InfinteLooper
 * Blog: https://dev.to/finiam/infinite-looping-react-component-3135
 */
const InfiniteLooper = function InfiniteLooper({
  speed = 20,
  direction = "right",
  children,
}: {
  speed?: number;
  direction?: string;
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const [animate, setAnimate] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const orientation =
    direction === "up" || direction === "down" ? "vertical" : "horizontal";

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width, height } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth, height: parentHeight } =
      outerRef.current.getBoundingClientRect();

    if (orientation === "vertical") {
      const heightDeficit = parentHeight - height;

      const instanceHeight = height / innerRef.current.children.length;

      if (heightDeficit) {
        setLooperInstances(
          looperInstances + Math.ceil(heightDeficit / instanceHeight) + 1,
        );
      }
    } else {
      const widthDeficit = parentWidth - width;

      const instanceWidth = width / innerRef.current.children.length;
      if (widthDeficit) {
        setLooperInstances(
          looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1,
        );
      }
    }

    function resetAnimation() {
      setAnimate(false);

      setTimeout(() => {
        setAnimate(true);
      }, 10);
    }

    resetAnimation();
  }, [looperInstances, orientation]);

  /**
   * 6 instances, 200 each = 1200
   * parent = 1700
   */
  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  const animationClassName = useMemo(() => {
    if (!animate) {
      return "animation-none";
    }
    return orientation === "horizontal"
      ? "animate-loop-horizontal"
      : "animate-loop-vertical";
  }, [animate, orientation]);

  return (
    <div
      className={`overflow-hidden ${
        orientation === "horizontal" ? "w-full" : "h-full"
      }`}
      ref={outerRef}
    >
      <div
        className={` flex w-fit justify-center ${
          orientation === "vertical" ? "flex-col" : ""
        } ${animationClassName}`}
        ref={innerRef}
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={`flex w-max items-center ${animationClassName}`}
            style={{
              animationDuration: `${speed}s`,
              animationDirection:
                direction === "right" || direction === "down"
                  ? "reverse"
                  : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;
