const { CopyToClipboard, } = CopyToClipboard;
const { useState, } = React;

function QuizFormResult({ result }) {
  const [, setQuizState] = useState({ copied: false });

  const style = {
    resultBox: {
      background: "#e1f5fe",
      minHeight: 260,
      padding: 20,
      margin: 20,
    },
    button: {
      whiteSpace: "nowrap",
      display: "inline-block",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "0 0 20px 20px",
      fontSize: "20px",
      color: "#fff",
      backgroundImage: "linear-gradient(#4f93ce,#285f8f)",
      border: "1px solid #285f8f",
      cursor: "pointer",
    },
  };

  return (
    <div className="QuizFormResult">
      {result != null ? (
        <div>
          <div style={style.resultBox}>
            <pre> {result} </pre>
          </div>
          <div>
            <CopyToClipboard
              text={result}
              onCopy={() => setQuizState({ copied: true })}
            >
              <button style={style.button}>Copy to Clipboard</button>
            </CopyToClipboard>
          </div>
        </div>
      ) : null}
    </div>
  );
}