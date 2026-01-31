interface HeadingProps {
    type?: "h4" | "h2";
    children: React.ReactNode;
    className?: string;
}
declare const Heading: ({ children, type, className }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
export default Heading;
