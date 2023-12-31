import { CSSProperties, SVGProps } from "react";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  const { fill, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M2.42465 11.9094L1 11.9183L12.8925 11.8456L24.7851 11.773" stroke="black" stroke-width="5"/>
        <path d="M12.7915 2.51804L12.7838 1.09338L12.8466 12.986L12.8466 24" stroke="black" stroke-width="5"/>
    </svg>
  );
};