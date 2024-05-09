import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HighlightJS: React.FC<SyntaxHighlighterProps> = ({
  children,
  ...restProps
}) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco} {...restProps}>
      {children}
    </SyntaxHighlighter>
  );
};
